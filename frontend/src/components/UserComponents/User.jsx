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
        }else {
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
        <div className='Row'>
            <div className='Foto GridElement'></div>
            <div className='Name GridElement'>
                <p>Nome</p>
                <div className='FormContainer'>
                     <input type="text" placeholder={userData.name} />
                </div>
            </div>
        </div>
        <div className='Row'>
            <div className='Email GridElement'>
                <p>Email</p>
                <div className='FormContainer'>
                    <input type="text" placeholder={userData.email} />
                </div>
            </div>
      </div>
      <div className='Row'>
        <div className='Modalidade GridElement'>
            <p>Modalidade</p>
            <div className='FormContainer'>
                <input type="text" placeholder={userData.enrollmentType} />
            </div>
        </div>
        <div className='Instituicao GridElement'>
            <p>Instituição</p>
            <div className='FormContainer'>
                <input type="text" placeholder={userData.institution} />
            </div>
        </div>
        </div>
        <div className='Row ButtonRow'>
            <div className='Buttn Descartar'>Descartar</div>
            <div className='Buttn Salvar'>Salvar</div>
        </div>
    </div>
  );
}

export default User;