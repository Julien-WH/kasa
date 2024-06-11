import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const API_URL = "/public-datas/logements.json";
const useFetch = (id) => {
    const navigate = useNavigate();

  const [data, setData] = useState(null);
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
        if (id) {
          const data = response.find((item) => item.id === id);
          if (!data) {
            navigate("/NotFound404");
          }
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
