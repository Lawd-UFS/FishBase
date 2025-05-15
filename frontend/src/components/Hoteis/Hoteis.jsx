//React
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

//For resquest
import axios from 'axios';
import env from '../../../env';

import './Hoteis.css'

function Hoteis() {

  return (
    <div className='_Body'>
        <div className='_Header'>
            <p className='Titulo'>Seja bem vindo ao simpósio anual FishBase and SeaLijeBase</p>
        </div>
        <div className='Cards'>
            <div className='Col'>
                <p className='Titulo'>Saiba onde se hospedar</p>
                <div className='hotel Card'>
                    <div className='Col'>
                        <p className='NomeHotel'>Hotem num 1</p>
                        <div className='_Links'>
                            <a href="">instagram</a>
                            <a href="">Endereço</a>
                        </div>
                    </div>
                    <div className='Col'>
                        <div className='_Imagem'></div>
                        <p className='Contato'>432423423</p>
                        <p className='Contato'>23423423</p>
                    </div>
                </div>
                <div className='hotel Card'>
                    <div className='Col'></div>
                    <div className='Col'></div>
                </div>
                <div className='hotel Card'>
                    <div className='Col'></div>
                    <div className='Col'></div>
                </div>
            </div>
            <div className='Col'>
                <p className='Titulo'>Faça um plano de viagem!</p>
                <div className='agencia Card'>
                    <div className='Col'></div>
                    <div className='Col'></div>
                </div>
                <div className='agencia Card'>
                    <div className='Col'></div>
                    <div className='Col'></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hoteis;