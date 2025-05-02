import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import AlertCustom from '../AlertCustom/AlertCustom';


import './FormLogin.css'

function FormLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //AlertCustom
    const [message, setMessage] = useState('');
    const [action, setAction] = useState('');
    const [visible, setVisible] = useState(false);

    const toAuth = async (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);

        setMessage('error');
        setAction('info');
        setVisible(true)
        setTimeout(() => setVisible(false), 2000);
    }

    const authByGoogle = (event) => {
        event.preventDefault();
    }

    const authByLinkedIn = (event) => {
        event.preventDefault();
    }


  return (
    <div className='FormLogin'>
        <form className='container'>
            <img src='public/images/logo.png' className='logo'></img>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name='email' 
                    value={email} 
                    autoComplete="current-password"
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input 
                    type="password" 
                    name='password' 
                    value={password} 
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <Link to={"/novasenha"} className='link'>Esqueci minha senha</Link>
            <button onClick={toAuth}>Login</button>
            <hr></hr>
            <div className='container-buttons'>
                <button onClick={authByGoogle}>
                    <img src='public/images/google_icon.png'></img>
                    Google
                </button>
                <button onClick={authByLinkedIn}>
                    <img src='public/images/LinkedIn.png'></img>
                    LinkedIn
                </button>
            </div>
        </form>
        <AlertCustom 
            message={message} 
            action={action} 
            visible={visible}
        ></AlertCustom>
    </div>
  );
}

export default FormLogin;