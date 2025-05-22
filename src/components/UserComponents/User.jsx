'use client';
//React
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaMapMarkerAlt, FaLaptop } from 'react-icons/fa';

//For resquest
import axios from 'axios';

import './User.css'


function User() {
  const { texts } = useLanguage();
  const [selected, setSelected] = useState('presencial');
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
        const response = await axios.post(`http://localhost:3000/participants/profile`);
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
    <div className='Perfil'>
      <div className='titulo'>
        <h1>{texts.profile.title}</h1>
      </div>
      <div className='dados pessoais'>
        <div className='subtitulo'>{texts.profile.subtitles.personal}</div>
        <div className='linha'></div>
        <div className='fields'>
          <div className='field_container'>
            <div className='field_name' id='name'>{texts.profile.fields.name}</div>
            <div className='field'></div>
          </div>
          <div className='field_container'>
            <div className='field_name' id='gender'>{texts.register.fields.gender}</div>
            <div className='field'></div>
          </div>
          <div className='field_container'>
            <div className='field_name'>{texts.register.fields.email}</div>
            <div className='field'></div>
          </div>
          <div className='field_container'>
            <div className='field_name'>{texts.register.fields.password}</div>
            <div className='field'></div>
          </div>
        </div>
      </div>

      <div className='dados complementares'>
        <div className='subtitulo'>{texts.profile.subtitles.additional}</div>
        <div className='linha'></div>
        <div className='fields'>
          <div className='field_container'>
            <div className='field_name'>{texts.register.fields.country}</div>
            <div className='field'></div>
          </div>
          <div className='field_container'>
            <div className='field_name'>{texts.register.fields.city}</div>
            <div className='field'></div>
          </div>
          <div className='field_container'>
            <div className='field_name'>{texts.register.fields.state}</div>
            <div className='field'></div>
          </div>
          <div className='field_container'>
            <div className='field_name'>{texts.register.fields.institution}</div>
            <div className='field'></div>
          </div>
          <div className='field_container'>
            <div className='field_name'>{texts.profile.fields.specialNeeds}</div>
            <div className='field'></div>
          </div>
        </div>
        
      </div>
       <div className="mode-switch">
      <label className="field_name">{texts.profile.fields.format}</label>
      <div className="options">
        <button
          className={`option ${selected === 'presencial' ? 'active' : ''}`}
          onClick={() => setSelected('presencial')}
        >
          <FaMapMarkerAlt size={14} />
          {texts.profile.formats.inPerson}
        </button>
        <button
          className={`option ${selected === 'remoto' ? 'active' : ''}`}
          onClick={() => setSelected('remoto')}
        >
          <FaLaptop size={14} />
          {texts.profile.formats.remote}
        </button>
      </div>
    </div>
    </div>
  );
}

export default User;
