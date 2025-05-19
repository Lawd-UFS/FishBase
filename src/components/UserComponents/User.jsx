//React
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

//For resquest
import axios from 'axios';
import env from '../../../env';

import './User.css'

function User() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    enrollmentType: '',
    institution: ''
  });

  const [selectedSection, setSelectedSection] = useState('dados'); // default selected

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(`${env.apiUrl}/participants/profile`);
        if (response.data.success) {
          const data = response.data.data;
          setUserData({
            name: data.name || '',
            email: data.email || '',
            enrollmentType: data.enrollmentType || '',
            institution: data.institution || ''
          });
        } else {
          console.error('Error fetching user data:', response.data.message);
          setUserData({
            name: "",
            email: "",
            enrollmentType: "",
            institution: ""
          });
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserData();
  }, []);
  
  return (
    <div className='Container'>
      <div className='Navegacao'>
        <div className='TituloContainer'>
          <div className='titulo'>Área do participante</div>
        </div>
        <div className='buttonsContainer'>
          <button
            className={`Subtitulo ${selectedSection === 'dados' ? 'SelectedSubtitulo' : ''}`}
            onClick={() => setSelectedSection('dados')}
            >
            Dados do participante
          </button>
          <button
            className={`Subtitulo ${selectedSection === 'hospedagem' ? 'SelectedSubtitulo' : ''}`}
            onClick={() => setSelectedSection('hospedagem')}
            >
            Saiba onde se hospedar
          </button>
          <button
            className={`Subtitulo ${selectedSection === 'viagem' ? 'SelectedSubtitulo' : ''}`}
            onClick={() => setSelectedSection('viagem')}
            >
            Faça um plano de viagem
          </button>
        </div>
      </div>

      <div className='Display_De_Dados'>
        {selectedSection === 'dados' && (
          <>
            <div className='Row'> 
                {/*<div className='Foto GridElement'></div>*/}
                <div className='Name GridElement'>
                    <p>Nome</p>
                    <div className='FormContainer'>
                        <input className='Uninteractable' type="text" placeholder={userData.name} />
                    </div>
                </div>
            </div>
            <div className='Row'>
                <div className='Email GridElement'>
                    <p>Email</p>
                    <div className='FormContainer'>
                        <input className='Uninteractable' type="text" placeholder={userData.email} />
                    </div>
                </div>
            </div>
            <div className='Row'>
              <div className='Modalidade GridElement'>
                  <p>Modalidade</p>
                  <div className='FormContainer'>
                      <input className='Uninteractable' type="text" placeholder={userData.enrollmentType} />
                  </div>
              </div>
            </div>
            <div className='Row'>
              <div className='Instituicao GridElement'>
                <p>Instituição</p>
                <div className='FormContainer'>
                  <input className='Uninteractable' type="text" placeholder={userData.institution} />
                </div>
              </div>
            </div>
              {/* 
            <div className='Row ButtonRow'>
              <div className='Buttn Descartar'>Descartar</div>
              <div className='Buttn Salvar'>Salvar</div>
            </div>
            */}
          </>
        )}

        {selectedSection === 'viagem' && (
          <div className='Agencias'>
            <div className="HotelCard">
              <h2>Nozes Turismo</h2>
              <div className="ContactRow">
                <div className="IconCircle">📞</div>
                <span>0055 79 9 9972-7314</span>
              </div>
              <div className="ContactRow">
                <div className="IconCircle">🔗</div>
                <a href='https://linkme.bio/nozestur?fbclid=PAZXh0bgNhZW0CMTEAAadis6MLJbvqK6ZoH9xdbqpQd76h_bNyMRYLm0hMglpOrwrKtVDX63_UPDq0iQ_aem_afur7dzhXpeWQrmbDe8eyA'>Links úteis</a>
              </div>
              <div className="ContactRow">
                <div className="IconCircle">📍</div>
                <a href="https://maps.app.goo.gl/pZh3EamHtYmYLZT88" target="_blank" rel="noopener noreferrer">
                  Av. Santos Dumont, 1550 - Coroa do Meio, Aracaju - SE, 49037-475
                </a>
              </div>
              <div className="ContactRow">
                <div className="IconCircle">📸</div>
                <a href="https://www.instagram.com/nozes.turismo" target="_blank" rel="noopener noreferrer">
                  @nozes.turismo
                </a>
              </div>
            </div>

            <div className="HotelCard">
              <h2>Aracaju Turismo</h2>
              <div className="ContactRow">
                <div className="IconCircle">📞</div>
                <span>0055 79 9 9950-1524</span>
              </div>
              <div className="ContactRow">
                <div className="IconCircle">🔗</div>
                <a href='https://linktr.ee/aracajuturismo?fbclid=PAZXh0bgNhZW0CMTEAAafpZSW-N0YRGUeqrl4dGrV9U06MDWI4Skc7LPv4OPg66usm-0yq-brL5utMNA_aem_3jz3fjw9u-VoJpmP-2YsfQ'>Links úteis</a>
              </div>
              <div className="ContactRow">
                <div className="IconCircle">📍</div>
                <a href="https://maps.app.goo.gl/W2kzH8SfZeqAGkDH7" target="_blank" rel="noopener noreferrer">
                  Av. Santos Dumont, 1550 - Coroa do Meio, Aracaju - SE, 49037-475
                </a>
              </div>
              <div className="ContactRow">
                <div className="IconCircle">📸</div>
                <a href="https://www.instagram.com/aracaju_turismo/" target="_blank" rel="noopener noreferrer">
                  @aracaju_turismo
                </a>
              </div>
            </div>
          </div>
        )}

        {selectedSection === 'hospedagem' && (
          <div className='Hoteis'>
            
            <div className="HotelCard">
              <div className="HotelHeader">
                <h2>VIDAM</h2>
                <div className="HotelImagePlaceholder">
                  <img className="FotoHotel" src="/images/Hoteis/vidam.jpg" alt="Foto do Hotel Vidam" />
                </div>
              </div>
              
              <div className="HotelContent">
                <div className="HotelLinks">
                  <a href="https://www.instagram.com/vidamhotel/" target="_blank" rel="noopener noreferrer">instagram</a>
                  <a href="https://maps.app.goo.gl/XSUTPunrWNfMM8Hp6" target="_blank" rel="noopener noreferrer">endereço</a>
                </div>
                <div className="HotelContacts">
                  <div>(79) 9 9863 1002</div>
                  <div>(79) 33040700</div>
                </div>
              </div>
            </div>

            <div className="HotelCard">
              <div className="HotelHeader">
                <h2>AQUARIOS</h2>
                <div className="HotelImagePlaceholder">
                  <img className="FotoHotel" src="/images/Hoteis/Aquarios.jpg" alt="Foto do Hotel Aquarios" />
                </div>
              </div>
              
              <div className="HotelContent">
                <div className="HotelLinks">
                  <a href="https://www.instagram.com/aquariospraiahotel/" target="_blank" rel="noopener noreferrer">instagram</a>
                  <a href="https://maps.app.goo.gl/xrGwWzMzVJ43Vf826" target="_blank" rel="noopener noreferrer">endereço</a>
                </div>
                <div className="HotelContacts">
                  <div>(79) 99191-5800</div>
                  <div>(79) 2107-5209</div>
                </div>
              </div>
            </div>

            <div className="HotelCard">
              <div className="HotelHeader">
                <h2>REAL CLASSIC</h2>
                <div className="HotelImagePlaceholder">
                  <img className="FotoHotel" src="/images/Hoteis/realclassic.jpg" alt="Foto do Hotel Real Classic" />
                </div>
              </div>
              
              <div className="HotelContent">
                <div className="HotelLinks">
                  <a href="https://www.instagram.com/realclassicaracaju/" target="_blank" rel="noopener noreferrer">instagram</a>
                  <a href="https://maps.app.goo.gl/KfmXSD9fgbwSBDf4A" target="_blank" rel="noopener noreferrer">endereço</a>
                </div>
                <div className="HotelContacts">
                  <div>(79) 2106-7020/7023</div>
                  <div>(79) 9 9812-2145</div>
                </div>
              </div>
            </div>

          </div>

        )}
      </div>
    </div>
  );
}

export default User;
