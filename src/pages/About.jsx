import './About.scss';
import Collapsible from '../components/Collapsible/Collapsible';
import React from 'react';
import data from '../../datas/aboutDatas.json';

function About() {

  return (
    <section className='aboutSection'>
      <header><img src="src\assets\images\about-header.jpeg" alt="Une photo d'un paysage avec des montagnes et une forêt de sapins." /></header>
  
  {/* Ajout des collapsibles avec les données du json */}
  {data.map ((item, index) => (
    <Collapsible key={index} pageClass="aboutContent" title={item.title}>
      {item.content}
    </Collapsible>
  )
  )}

      {/* <div className='collapsibleDiv'>
        <h3>Fiabilité</h3>
        <p></p>
      </div>

      <div>
        <h3>Respect</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id lacinia aliquet, nisl velit tincidunt nunc, vitae tincidunt felis nunc id nunc. Sed vitae nunc sed nunc tincidunt lacinia. Sed id semper nunc. Nulla facilisi. Sed euismod, nisl id lacinia aliquet, nunc nisl tincidunt nunc, vitae tincidunt felis nunc id nunc. Sed vitae nunc sed nunc tincidunt lacinia. Sed id semper nunc. Nulla facilisi.</p>
      </div>

      <div>
        <h3>Service</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id lacinia aliquet, nisl velit tincidunt nunc, vitae tincidunt felis nunc id nunc. Sed vitae nunc sed nunc tincidunt lacinia. Sed id semper nunc. Nulla facilisi. Sed euismod, nisl id lacinia aliquet, nunc nisl tincidunt nunc, vitae tincidunt felis nunc id nunc. Sed vitae nunc sed nunc tincidunt lacinia. Sed id semper nunc. Nulla facilisi.</p>
      </div>

      <div>
        <h3>Sécurité</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id lacinia aliquet, nisl velit tincidunt nunc, vitae tincidunt felis nunc id nunc. Sed vitae nunc sed nunc tincidunt lacinia. Sed id semper nunc. Nulla facilisi. Sed euismod, nisl id lacinia aliquet, nunc nisl tincidunt nunc, vitae tincidunt felis nunc id nunc. Sed vitae nunc sed nunc tincidunt lacinia. Sed id semper nunc. Nulla facilisi.</p>
      </div> */}
    </section>
  );
}

export default About;