import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import axios from 'axios';
import ScheduleCard from '../../components/scheduleCard/schedulecard';

const HomePage = () => {
    const [scheduleData, setScheduleData] = useState([]); // Estado para armazenar os dados da API

    useEffect(() => {
        axios.get('https://fishbase-backend.onrender.com/programming')
            .then((response) => {
                if (response.data.success) {
                    setScheduleData(response.data.data); // Atualiza o estado com os dados do array `data`
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
                <h2>LINKING NORTH-SOUTH AND EAST-WEST E DO FISHBASE CONSORTIUM ANNUAL MEETING</h2>
            </div>
            
            <section className="schedule">
                <h2>Programação</h2>
                <div className="cards">
                     {/* Renderiza uma lista de ScheduleCard */}
                    {scheduleData.map((item) => (
                        <ScheduleCard key={item.id} data={item} />
                    ))}
                </div>
            </section>
            <section className="about-event">
                <h2>Sobre o evento</h2>
                <section className="about-event-content">
                    <div className="map-event">
                        <img src="./images/mapa-mundi.png" alt="Mapa Mundi" />  
                    </div>
                    <p>
                        O FishBase e o SeaLifeBase são bancos de dados globais de informações sobre peixes e vida marinha, respectivamente. Eles são amplamente utilizados por pesquisadores, conservacionistas e gestores de recursos marinhos em todo o mundo. O FishBase é um banco de dados abrangente que contém informações sobre mais de 34.000 espécies de peixes, incluindo dados sobre sua biologia, ecologia, distribuição geográfica e status de conservação. O SeaLifeBase é um banco de dados semelhante, mas abrange uma gama mais ampla de organismos marinhos, incluindo invertebrados e plantas marinhas.
                    </p>
                </section>  
            </section>
        </div>
    );
};

export default HomePage;