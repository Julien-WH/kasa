import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Afin de préparer l'application à la récupération des données depuis une API,
//nous allons créer un hook personnalisé useFetch
// Ce hook permettra de récupérer les données depuis l'API et de les stocker dans un state
// Ce hook prend en paramètre l'identifiant de l'élément à récupérer
// Si l'identifiant est null, le hook récupère tous les éléments
// Si l'identifiant est renseigné, le hook récupère l'élément correspondant à cet identifiant

// À noter qu'il y aura des ajustements à faire pour récupérer les données depuis l'API
// Tel que la gestion de l'authentification, des erreurs, etc.

// URL de l'API à partir de laquelle les données sont récupérées
const API_URL = "/public-datas/logements.json";

// useEffect est utilisé pour effectuer la requête API au chargement du composant
const useFetch = (id) => {
  // Utilisation de useNavigate pour rediriger l'utilisateur vers une page d'erreur si l'élément n'existe pas
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  // En attendant la réponse de l'API, loading est à true, cela évite d'afficher des données non existantes
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        // Si un id est fourni, on cherche l'élément correspondant dans la réponse
        if (id) {
          const data = response.find((item) => item.id === id);
          // Si l'élément n'est pas trouvé, on redirige vers une page 404
          if (!data) {
            navigate("/NotFound404");
          }
          // On met à jour l'état des données avec l'élément trouvé
          setData(data);
        } else {
          setData(response);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};
export default useFetch;
