import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <h1>MyPlaylist <span>by Cristian Sandoval</span> </h1>
                <nav>
                <Link className="link" to="">Playlist</Link>
                <Link className="link" to="/agregar">Agregar canción</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}