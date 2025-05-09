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
            <section className="title">
                <h1>23rd FishBase and SeaLifeBase Symposium</h1>
            </section>
            <button className="register-button">
                <Link to="/register" className="register-link">Inscreva-se</Link>
            </button>
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
        </div>
    );
};

export default HomePage;