import React from 'react';
import './styles/global.css';
import './pages/landing.css'
import LogoImg from './assets/Logo.png';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoImg} alt="Logo"/>

        <main>
          <h1 id="title">Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Manaus</strong>
          <span>Amazonas</span>
        </div>

        <a href="/" className="enter-to-page">

        </a> 
      </div>
    </div>
  );
}

export default App;
