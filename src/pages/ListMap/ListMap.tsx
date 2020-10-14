import React from 'react';
import Marke from '../../assets/Local.png'
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import './ListMap.css';
import 'leaflet/dist/leaflet.css';

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

            <Map 
                center={[-3.0590672, -60.0143848]}
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="/" className="create">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default ListMap;