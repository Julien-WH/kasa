import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; 

function Header() {
return (
    <header>
        <img src="src\assets\images\logo.svg" alt="Kasa" />
        <nav>
            <ul>
                <li><Link to="/" className="active">Accueil</Link></li>
                <li><Link to="/about">À propos</Link></li>
            </ul>
        </nav>
    </header>
);
}

export default Header;