import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import axios from 'axios';
import ScheduleCard from '../../components/scheduleCard/schedulecard';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const HomePage = () => {
    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        axios.get('https://fishbase-backend.onrender.com/programming')
            .then((response) => {
                if (response.data.success) {
                    setScheduleData(response.data.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Configuração correta do Embla Carousel
    const autoplay = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    const [emblaRef] = useEmblaCarousel(
        { loop: true, slidesToScroll: 1 }, // 🚀 Agora passa um item por vez
        [autoplay.current]
    );

    return (
        <div className="content">
            <section className="hero">
                <div className="title">
                    <h1>23rd FishBase and SeaLifeBase Symposium</h1>
                </div>
                <button className="register-button">
                    <Link to="/register" className="register-link">Inscreva-se Gratuitamente</Link>
                </button>
            </section>
            <div className="hero-footer">
                <div className="fish-image">
                    <img src="/images/peixes/peixe-boi.jpeg" width="350px" height="225px"></img>
                    <p>Peixe Boi - Priscilla Teixeira de Campos</p>
                </div>
                <h2>LINKING NORTH-SOUTH AND EAST-WEST E DO FISHBASE CONSORTIUM ANNUAL MEETING</h2>
            </div>
            
            <section className="schedule">
                <h2>Programação</h2>
                <div className="cards">
                    {scheduleData.map((item) => (
                        <ScheduleCard key={item.id} data={item} />
                    ))}
                </div>
            </section>
            <section className="about-event">
                <h2>Sobre o evento</h2>
                <section className="about-event-content">
                    <div className="map-event">
                        <img src="./images/Mapa fishbase.png" alt="Mapa Mundi" />  
                    </div>
                    <div className="text-event">
                        <p>
                        O FishBase e o SeaLifeBase são bancos de dados globais de informações 
                        sobre peixes e vida marinha...
                        </p>
                        <div className="fish-image">
                            <img src="/images/peixes/niquim-tratado.jpeg" width="350px" height="225px"></img>
                            <h7>Peixe-Diabo - Josafá José do Carmo Reis Júnior</h7>
                        </div>
                    </div>
                </section>  
            </section>
            <div className="footer">
                <div className="footer-contacts">
                    <p>Email: fbbrazilscientificcommittee@gmail.com</p>
                    <a href="https://maps.app.goo.gl/jbZs6hRdx2rpUWhA8">Departamento de Pesca</a>
                    <p>Contato: +0055 79 8156-5745</p>
                    <p>Universidade Federal de Sergipe</p>
                    <p>Av. Marechal Rondon, s/n - Jardim Rosa Elze, São Cristóvão - SE</p>
                </div>
                <div className="footer-logos-organization">
                    <img src="./images/logos/logo-ufs.png" alt="Logo" />
                    <img id="logo-depaq" src="./images/logos/logo-depaq-tratado.png" alt="Logo" />
                </div>
                 <section className="footer-sponsors">   
                    {/* Carrossel corrigido */}
                    <div className="carousel-container" ref={emblaRef}>
                        <div className="carousel-track">
                            <div className="carousel-slide">
                                <img src="./images/logo.png" alt="Logo 1" />
                            </div>
                            <div className="carousel-slide">
                                <img src="./images/logos/SeaLifeBase-logo-solo.png" alt="Logo 2" />
                            </div>
                            <div className="carousel-slide">
                                <img src="./images/logos/AquaMaps-logo-tratada.png" alt="Logo 3" />
                            </div>
                            <div className="carousel-slide">
                                <img src="./images/logos/SeaAroundUs-logo-tratada.png" alt="Logo 4" />
                            </div>
                        </div>
                    </div>
                    <div className="sponsors-container">
                        <p>Um apoio de:</p>
                        <a>CNPQ</a>
                        <a>Universidade Federal de Sergipe</a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
