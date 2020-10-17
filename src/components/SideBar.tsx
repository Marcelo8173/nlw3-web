import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import mapMarkerImg from '../assets/Local.png';
import { useHistory } from "react-router-dom";
import './SideBar.css';

export default function SideBar(){
    const { goBack } = useHistory();
    return(
        <aside className="app-sidebar">
            <img src={mapMarkerImg} alt="Happy" />

            <footer>
            <button type="button" onClick={goBack}>
                <FiArrowLeft size={24} color="#FFF" />
            </button>
            </footer>
        </aside>
    )
}