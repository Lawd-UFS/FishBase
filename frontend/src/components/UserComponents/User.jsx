//React
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './User.css'

function User() {

  return (
    <div className='Container'>
        <div className='Row'>
            <div className='Foto GridElement'></div>
            <div className='Name GridElement'>
                <p>Nome</p>
                <div className='FormContainer'></div>
            </div>
        </div>
        <div className='Row'>
            <div className='Email GridElement'>
                <p>Email</p>
                <div className='FormContainer'></div>
            </div>
        </div>
        <div className='Row'>
            <div className='Modalidade GridElement'>
                <p>Modalidade</p>
                <div className='FormContainer'>
                    <input type="Text" />
                </div>
            </div>
            <div className='Instituicao GridElement'>
                <p>Instituição</p>
                <div className='FormContainer'></div>
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