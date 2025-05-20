import React from "react";
import "./schedulecard.css"; // Importando o CSS do componente

const ScheduleCard = ({ data }) => {
    const { id, title, speaker, date, startTime, endTime } = data;

    return (
        <div className="schedule-card">
            <header className="schedule-card-header">
                <p>{speaker}</p>
            </header>
            <content className="schedule-card-content">
                <h3>{title}</h3>
                <p> {new Date(endTime).toLocaleTimeString()}</p>
                <footer className="schedule-card-footer">
                    <p>{date}</p>
                    <p id="tag-horario"> {new Date(startTime).toLocaleTimeString()}</p>
            </footer>
            </content>
        </div>
    );
};

export default ScheduleCard;