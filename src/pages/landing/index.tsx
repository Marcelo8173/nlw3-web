import React from 'react';
import './landing.css'
import LogoImg from '../../assets/Logo.png';
import { FiArrowRight } from 'react-icons/fi'; 
import {Link} from 'react-router-dom';

const Landing = () => {
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={LogoImg} alt="Logo"/>

            <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <div className="location">
                <strong>Manaus</strong>
                <span>Amazonas</span>
            </div>

            <Link to="/list_map" className="enter-to-page">
                <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
            </Link> 
            </div>
        </div>
    )
}

export default Landing;