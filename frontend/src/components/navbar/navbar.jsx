import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importando Link para navegação
import './navbar.css'; // Assuming you have a CSS file for styling

const NavBar = () => {
    const [activeLang, setActiveLang] = useState(''); // Estado para armazenar o botão ativo

    const handleLanguageChange = (lang) => {
        setActiveLang(lang); // Define o botão clicado como ativo
    };

    return (
        <nav className="navbar">
            <a className="img-logo" href="/">
                <img src="/images/logos/logo.png" alt="fishbase-logo" width="85" height="85" />
            </a>
            <section id="buttons">
                <Link to="/" className="nav-button">Sobre o evento</Link>
                <Link to="/register" className="nav-button">Programação</Link>
                <Link to="/login" className="nav-button">Contato</Link>
                <div className="toggle-language">
                    <button
                        className={activeLang === 'en' ? 'active-lang' : ''}
                        onClick={() => handleLanguageChange('en')}
                    >
                        <img src="/images/icones/USA.png" alt="EN" width="25" height="25" />
                    </button>
                    <button
                        className={activeLang === 'pt' ? 'active-lang' : ''}
                        onClick={() => handleLanguageChange('pt')}
                    >
                        <img src="/images/icones/Brazil.png" alt="PT-BR" width="25" height="25" />
                    </button>
                </div>
                <Link to="/login" className="login-button">
                    <img src="/images/icones/Lock.png" alt="logout" width="25" height="25" />
                    Login
                </Link>
            </section>
            <a className="img-logo" href="/">
                <img src="/images/logos/SeaLifeBase-logo-solo.png" alt="SeaLifeBase-logo-solo.png" width="85" height="85" />
            </a>
        </nav>
    );
};

export default NavBar;