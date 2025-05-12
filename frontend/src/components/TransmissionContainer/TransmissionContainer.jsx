//React
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// contexts
import { useAlert } from '../../Context/AlertProvider/AlertProvider';

//For resquest
import axios from 'axios';
import env from '../../../env';


import './TransmissionContainer.css'

function TransmissionContainer() {

    const { notify } = useAlert();
    const apiUrl = env.apiUrl; //trocar a variável para o http correto

    const [code, setCode] = useState('');

    const sendCode = () => {
        console.log(code);

        //enviar a resquest para o back
        notify('Carregando...', 'info');

        axios.post(`${apiUrl}/query?`, code)
        .then(response => {
            notify('Código enviado com sucesso!', 'success');
            setStep(x => x + 1);
            return 1;
        })
        .catch(error => {
            notify(error.response.data.error.message, 'error');
            return 0;
        })
    }

  return (
    <div className='TransmissionContainer'>
       <iframe 
        src="https://www.youtube.com/embed/QGJGM_ynYFk" 
        title="FishBase2025"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        >
        </iframe>
        <p>
            Digite o código de presença aqui: 
            <span>Só poderá obter o certificado com 75% de presença!</span>
        </p>
        <div className='codeContainer'>
            <input 
                type="text" 
                name='code' 
                value={code} 
                autoComplete="code"
                onChange={(e) => setCode(e.target.value)} 
            />
            <button onClick={sendCode}>
                <img src='public/images/arrow.png'></img>
            </button>
        </div>
        <div>

        </div>
    </div>
  );
}

export default TransmissionContainer;