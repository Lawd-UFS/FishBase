'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaMapMarkerAlt, FaLaptop } from 'react-icons/fa';
import './User.css';

import Header from '../Header';

//For resquest
import { getUserProfile } from '@/lib/api';

import './User.css';
import { useAuth } from '@/contexts/AuthContext';

function User() {
  const { token } = useAuth();

  const { texts } = useLanguage();
  const [selected, setSelected] = useState('presencial');
  const [userData, setUserData] = useState({
    name: '',
    gender: '',
    city: '',
    state: '',
    country: '',
    institution: '',
    email: '',
    enrollmentType: '',
    frequencyPercentage: 0,
    language: '',
  });

  useEffect(() => {
    if (!token) return;

    const fetchUserData = async () => {
      try {
        const response = await getUserProfile(token);

        if (response.success) {
          const { data } = response;
          setUserData({
            name: data.name || '',
            gender: data.gender || '',
            city: data.city || '',
            state: data.state || '',
            country: data.country || '',
            institution: data.institution || '',
            email: data.email || '',
            enrollmentType: data.enrollmentType || '',
            frequencyPercentage: data.frequencyPercentage || 0,
            language: data.language || '',
          });

          // Set mode toggle state based on enrollmentType
          if (data.enrollmentType === 'remote') {
            setSelected('remoto');
          } else {
            setSelected('presencial');
          }
        } else {
          console.error('Error fetching user data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserData();
  }, [token]);

  return (
    <div className='main'>
      <div className='pageContent'>
        <div className='sidebar'></div>
        <div className='Perfil'>
          <div className='titulo'>
            <h1>{texts.profile.title}</h1>
          </div>

          <div className='dados pessoais'>
            <div className='subtitulo'>{texts.profile.subtitles.personal}</div>
            <div className='linha'></div>
            <div className='fields'>
              <div className='field_container'>
                <div className='field_name'>{texts.profile.fields.name}</div>
                <div className='field'>{userData.name}</div>
              </div>
              <div className='field_container'>
                <div className='field_name'>{texts.register.fields.gender}</div>
                <div className='field'>{userData.gender}</div>
              </div>
              <div className='field_container'>
                <div className='field_name'>{texts.register.fields.email}</div>
                <div className='field'>{userData.email}</div>
              </div>
              <div className='field_container'>
                <div className='field_name'>
                  {texts.register.fields.password}
                </div>
                <div className='field'>••••••••</div>
              </div>
            </div>
          </div>

          <div className='dados complementares'>
            <div className='subtitulo'>
              {texts.profile.subtitles.additional}
            </div>
            <div className='linha'></div>
            <div className='fields'>
              <div className='field_container'>
                <div className='field_name'>
                  {texts.register.fields.country}
                </div>
                <div className='field'>{userData.country}</div>
              </div>
              <div className='field_container'>
                <div className='field_name'>{texts.register.fields.city}</div>
                <div className='field'>{userData.city}</div>
              </div>
              <div className='field_container'>
                <div className='field_name'>{texts.register.fields.state}</div>
                <div className='field'>{userData.state}</div>
              </div>
              <div className='field_container'>
                <div className='field_name'>
                  {texts.register.fields.institution}
                </div>
                <div className='field'>{userData.institution}</div>
              </div>
              <div className='field_container'>
                <div className='field_name'>
                  {texts.profile.fields.specialNeeds}
                </div>
                <div className='field'>—</div> {/* Placeholder */}
              </div>
            </div>
          </div>

          <div className='mode-switch'>
            <label className='field_name'>{texts.profile.fields.format}</label>
            <div className='options'>
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
      </div>
    </div>
  );
}

export default User;
