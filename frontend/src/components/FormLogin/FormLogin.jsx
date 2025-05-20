//React
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// contexts
import { useAlert } from '../../Context/AlertProvider/AlertProvider';


import './FormLogin.css'

function FormLogin() {

    const { notify } = useAlert();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toAuth = async (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        notify('teste', 'info');
    }

    const authByGoogle = (event) => {
        event.preventDefault();
    }

    const authByLinkedIn = (event) => {
        event.preventDefault();
    }


  return (
    <div className='FormLogin'>
        <img src='public/images/logo.png' className='fishbase'></img>
        <form className='container'>
            <img src='public/images/imgLogin.png' className='logo'></img>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name='email' 
                    value={email} 
                    autoComplete="email"
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
            <div className="buttonLogin">
                <button onClick={toAuth}>Login</button>
            </div>
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
    </div>
  );
}

export default FormLogin;