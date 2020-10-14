import React from 'react';
import Marke from '../../assets/Local.png'
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import './ListMap.css';

const ListMap = () => {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={Marke} alt=""/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Manaus</strong>
                    <span>Amazonas</span>
                </footer>
            </aside>

            <div></div>
            <Link to="/" className="create">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default ListMap;