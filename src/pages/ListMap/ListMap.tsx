import React, { useEffect, useState } from 'react';
import Marke from '../../assets/Local.png'
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import api from '../../services/api';
import Leaflet from 'leaflet';
import './ListMap.css';
import 'leaflet/dist/leaflet.css';

interface MapPoints{
    id: number,
    name: string,
    latitude: number,
    longitude: number,
}

const ListMap = () => {
    const mapIcon = Leaflet.icon({
        iconUrl: Marke,
        iconAnchor: [29,58],
        iconSize: [58,68],
        popupAnchor: [170,2]
    })
    const [pointMaps, setPointsMap] = useState<MapPoints[]>([]);
    
    useEffect(() => {
        api.get(`/create_orphanages`).then(response => {
            setPointsMap(response.data);
        })
    },[])

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
                {pointMaps.map(item => (
                    <Marker key={item.id} icon={mapIcon}  position={[item.latitude, item.longitude]}>
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {item.name}
                            <Link to={`/details_orphanages/${item.id}`}>
                                <FiArrowRight size={20} color="#FFF"/>
                            </Link>
                        </Popup>
                    </Marker>
                ))}
            </Map>

            <Link to="/create_orphanages" className="create">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default ListMap;