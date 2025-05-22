'use client';
import React from "react";
import { FaHotel } from "react-icons/fa";
import "./Hoteis.css";


import { useLanguage } from '../../contexts/LanguageContext';
import Header from '../Header';


const TravelPage = () => {
    const { texts } = useLanguage();
    return (
        <div className="main">
            <Header></Header>
            <div className="pageContent">
                <div className='sidebar'></div>
                <div className="travel-page">
                {/* Header Image */}
                <div className="header-image">
                    <img
                    src="/Imagens Hoteis/carangueijo.png"
                    alt="Foto de um dos principais pontos turísticos de Aracaju"
                    />
                </div>


                {/* Tabs */}
                <div className="tabs">
                    <button className="tab active">{texts.hotels.hotelSugestion}</button>
                    <button className="tab">{texts.hotels.agencySugestion}</button>
                </div>


                {/* Hotel Cards */}
                <div className="hotel-grid">
                    <div className="hotel-card">
                        <img src="/Imagens Hoteis/vidam.jpg" alt="Foto do Hotel Vidam" />
                        <div className="hotel-name-container">
                            <FaHotel className="hotel-icon" />
                            <span className="hotel-name">Vidam</span>
                        </div>
                    </div>
                    <div className="hotel-card">
                        <img src="/Imagens Hoteis/realclassic.jpg" alt="Foto do Hotel Real Classic" />
                        <div className="hotel-name-container">
                            <FaHotel className="hotel-icon" />
                            <span className="hotel-name">Real Classic</span>
                        </div>
                    </div>
                    <div className="hotel-card">
                        <img src="/Imagens Hoteis/Aquarios.jpg" alt="Foto do Hotel Aquarios" />
                        <div className="hotel-name-container">
                            <FaHotel className="hotel-icon" />
                            <span className="hotel-name">Aquarios</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};


export default TravelPage;