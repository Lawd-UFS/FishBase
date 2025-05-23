'use client';
import React, { useState } from "react";
import { FaHotel } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
<<<<<<< HEAD
import { FaLocationDot } from "react-icons/fa6";
import { FaAt } from "react-icons/fa6";
import { PiLineVerticalThin } from "react-icons/pi";
import { GiWhaleTail } from "react-icons/gi";


import "./Hoteis.css";


import { useLanguage } from '../../contexts/LanguageContext';
import Header from '../Header';

const Hoteis = () => {
    const { texts } = useLanguage();

    const [activeTab, setActiveTab] = React.useState('hotels');

    const hotels = [
    {
        name: "Vidam",
        image: "/Imagens Hoteis/vidam.jpg",
        instagram: "https://www.instagram.com/vidamhotel/",
        address: "https://maps.app.goo.gl/XSUTPunrWNfMM8Hp6",
        phones: ["(79) 9 9863 1002", "(79) 3304-0700"]
    },
    {
        name: "Real Classic",
        image: "/Imagens Hoteis/realclassic.jpg",
        instagram: "https://www.instagram.com/realclassicaracaju/",
        address: "https://maps.app.goo.gl/KfmXSD9fgbwSBDf4A",
        phones: ["(79) 2106-7020/7023", "(79) 9 9812-2145"]
    },
    {
        name: "Aquarios",
        image: "/Imagens Hoteis/Aquarios.jpg",
        instagram: "https://www.instagram.com/aquariospraiahotel/",
        address: "https://maps.app.goo.gl/xrGwWzMzVJ43Vf826",
        phones: ["(79) 99191-5800", "(79) 2107-5209"]
    }
    ];

    const [selectedHotelIndex, setSelectedHotelIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = (index) => {
    setSelectedHotelIndex(index);
    setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    const nextHotel = () =>
    setSelectedHotelIndex((prev) => (prev + 1) % hotels.length);

    const prevHotel = () =>
    setSelectedHotelIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
=======
import { FaLocationDot, FaAt } from "react-icons/fa6";
import { PiLineVerticalThin } from "react-icons/pi";
import { GiWhaleTail } from "react-icons/gi";

import { useLanguage } from '../../contexts/LanguageContext';
import './Hoteis.css';

const Hoteis = () => {
    const { texts } = useLanguage();
    const [activeTab, setActiveTab] = useState('hotels');
    const [selectedHotelIndex, setSelectedHotelIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const hotels = [
        {
            name: "Vidam",
            image: "/vidam.jpg",
            instagram: "https://www.instagram.com/vidamhotel/",
            address: "https://maps.app.goo.gl/XSUTPunrWNfMM8Hp6",
            phones: ["(79) 9 9863 1002", "(79) 3304-0700"]
        },
        {
            name: "Real Classic",
            image: "/realclassic.jpg",
            instagram: "https://www.instagram.com/realclassicaracaju/",
            address: "https://maps.app.goo.gl/KfmXSD9fgbwSBDf4A",
            phones: ["(79) 2106-7020/7023", "(79) 9 9812-2145"]
        },
        {
            name: "Aquarios",
            image: "/Aquarios.jpg",
            instagram: "https://www.instagram.com/aquariospraiahotel/",
            address: "https://maps.app.goo.gl/xrGwWzMzVJ43Vf826",
            phones: ["(79) 99191-5800", "(79) 2107-5209"]
        }
    ];

    const openModal = (index) => {
        setSelectedHotelIndex(index);
        setShowModal(true);
    };
    const closeModal = () => setShowModal(false);

    const nextHotel = () =>
        setSelectedHotelIndex((prev) => (prev + 1) % hotels.length);
    const prevHotel = () =>
        setSelectedHotelIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
>>>>>>> us001-realizar-cadastro

    return (
        <div className="main">
            {showModal && selectedHotelIndex !== null && (
<<<<<<< HEAD
            <div className="hotel-modal">
                <div className="modal-overlay" onClick={closeModal}></div>
                <div className="modal" onClick={closeModal}>
                    <div className="modal-inner">
                        <button className="arrow-button left" onClick={(e) =>{
                            e.stopPropagation();
                            prevHotel();
                            }} >
                        <IoIosArrowBack />
                        </button>

                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                            <div className="hotel-details">
                                <img src={hotels[selectedHotelIndex].image} alt="" />
                                <div className="info line-1">
                                    <h2 className="modal-hotel-name"><FaHotel className="hotel-icon" />{hotels[selectedHotelIndex].name}</h2>
                                    <div className="hotel-links">
                                        <a className="hotel-link" href={hotels[selectedHotelIndex].instagram} target="_blank"><FaAt /> Instagram</a>
                                        <a className="hotel-link" href={hotels[selectedHotelIndex].address} target="_blank"><FaLocationDot /> {texts.hotels.adress}</a>
                                    </div>
                                </div>
                                <div className="hotel-contacts">
                                    {hotels[selectedHotelIndex].phones.map((phone, i) => (
                                        <React.Fragment key={i}>
                                        <div className="phone-number">{phone}</div>
                                        {i !== hotels[selectedHotelIndex].phones.length - 1 && (
                                            <PiLineVerticalThin />
                                        )}
                                        </React.Fragment>
                                    ))}
                                </div>

                            </div>

                        </div>

                        <button className="arrow-button right" onClick={(e) =>{
                            e.stopPropagation();
                            nextHotel();
                            }}>
                        <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
            )}
            <div className="travel-page">
                {/* Header Image */}
                <div className="header-image">
                    <img
                    src="/Imagens Hoteis/carangueijo.png"
                    alt="Foto de um dos principais pontos turísticos de Aracaju"
                    />
                </div>

                <div className="center-content">
                    {/* Tabs */}
=======
                <div className="hotel-modal">
                    <div className="modal-overlay" onClick={closeModal}></div>
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-inner">
                            <button className="arrow-button left" onClick={(e) => {
                                e.stopPropagation();
                                prevHotel();
                            }}>
                                <IoIosArrowBack />
                            </button>

                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <div className="hotel-details">
                                    <img src={hotels[selectedHotelIndex].image} alt="" />
                                    <div className="info line-1">
                                        <h2 className="modal-hotel-name">
                                            <img src="/apartment.svg" alt="Hotel icon" className="hotel-icon" />
                                            {hotels[selectedHotelIndex].name}
                                        </h2>
                                        <div className="hotel-links">
                                            <a href={hotels[selectedHotelIndex].instagram} target="_blank" className="hotel-link">
                                                <FaAt /> Instagram
                                            </a>
                                            <a href={hotels[selectedHotelIndex].address} target="_blank" className="hotel-link">
                                                <FaLocationDot /> {texts.hotels.adress}
                                            </a>
                                        </div>

                                    </div>
                                    <div className="hotel-contacts">
                                        {hotels[selectedHotelIndex].phones.map((phone, i) => (
                                            <React.Fragment key={i}>
                                                <div className="phone-number">{phone}</div>
                                                {i !== hotels[selectedHotelIndex].phones.length - 1 && (
                                                    <PiLineVerticalThin />
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button className="arrow-button right" onClick={(e) => {
                                e.stopPropagation();
                                nextHotel();
                            }}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="travel-page">
                <div className="header-image">
                    <img src="/carangueijo.png" alt="Ponto turístico de Aracaju" />
                </div>

                <div className="center-content">
>>>>>>> us001-realizar-cadastro
                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === 'hotels' ? 'active' : ''}`}
                            onClick={() => setActiveTab('hotels')}
                        >
<<<<<<< HEAD
                            {activeTab === 'hotels' && <GiWhaleTail className="active-icon" />}
=======
                            {activeTab === 'hotels' && (
                                <img src="/fish-tail-filled.png" alt="Ícone cauda" className="tab-icon" />
                            )}
>>>>>>> us001-realizar-cadastro
                            {texts.hotels.hotelSugestion}
                        </button>
                        <button
                            className={`tab ${activeTab === 'agencies' ? 'active' : ''}`}
                            onClick={() => setActiveTab('agencies')}
                        >
<<<<<<< HEAD
                            {activeTab === 'agencies' && <GiWhaleTail className="active-icon" />}
=======
                            {activeTab === 'agencies' && (
                                <img src="/fish-tail-filled.png" alt="Ícone cauda" className="tab-icon" />
                            )}
>>>>>>> us001-realizar-cadastro
                            {texts.hotels.agencySugestion}
                        </button>
                    </div>

                    {activeTab === 'hotels' ? (
                        <div className="hotel-grid">
                            {hotels.map((hotel, index) => (
<<<<<<< HEAD
                            <div key={index} className="hotel-card" onClick={() => openModal(index)}>
                                <img src={hotel.image} alt={`Foto do Hotel ${hotel.name}`} />
                                <div className="hotel-name-container">
                                <FaHotel className="hotel-icon" />
                                <span className="hotel-name">{hotel.name}</span>
                                </div>
                            </div>
                            ))}
                        </div>
                        ) : (
                        <div className="agency-grid">
                            {/* Agency suggestion content (second image) goes here */}
                            <div className="agency-card naotorta">
                                <img src="/Imagens Agencias/Nozes.png" alt="Nozes Turismo" />
                                <span>Nozes Turismo</span>
                            </div>
                            <div className="agency-card torta">
                                <img src="/Imagens Agencias/Aracaju.png" alt="Aracaju Turismo" />
                                <span>Aracaju Turismo</span>
                            </div>
                        </div>
                        )}

=======
                                <div key={index} className="hotel-card" onClick={() => openModal(index)}>
                                    <img src={hotel.image} alt={`Foto do Hotel ${hotel.name}`} />
                                    <div className="hotel-name-container">
                                        <img src="/apartment.svg" alt="Hotel icon" className="hotel-icon" />
                                        <span className="hotel-name">{hotel.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="agency-grid">
                            <div className="agency-card naotorta">
                                <img src="/Nozes.png" alt="Nozes Turismo" />
                                <span>Nozes Turismo</span>
                            </div>
                            <div className="agency-card torta">
                                <img src="/Aracaju.png" alt="Aracaju Turismo" />
                                <span>Aracaju Turismo</span>
                            </div>
                        </div>
                    )}
>>>>>>> us001-realizar-cadastro
                </div>
            </div>
        </div>
    );
};

<<<<<<< HEAD

=======
>>>>>>> us001-realizar-cadastro
export default Hoteis;
