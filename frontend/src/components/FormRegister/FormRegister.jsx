//React
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

//For resquest
import axios from 'axios';
import env from '../../../env';

//Components
import FormSteps from '../FormSteps/FormSteps';

//Contexts
import { useAlert } from '../../Context/AlertProvider/AlertProvider';
import { useLoad } from '../../Context/LoadingProvider/LoadingProvider';

//Style
import './FormRegister.css'

function FormRegister() {

    const apiUrl = env.apiUrl;

    const { notify } = useAlert();
    const { loading } = useLoad();

    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [button, setButton] = useState('Continuar');

    const [form, setForm] = useState({
        name: '',
        firstName: 'firstName',
        lastName: 'LastName',
        institution: '',
        email: '',
        password: '',
        modality: '',
        gender: '',
        // acessibilidade: '',
        country: '',
        state: '',
        city: '',
        // motivo: ''
    });

    const [errorEmail, setErrorEmail] = useState(false);

    useEffect(() => {
        if(step == 1) setButton('Continuar');
        if(step == 2) setButton('Enviar');
        if(step == 3) setButton('Página Inicial');
    }, [step]); 

    const nextStep = () => {
        if(step == 1){
            if(!isEmailValid()){
                setErrorEmail(true);
                return;
            }
            else setErrorEmail(false);

            const [firstName, ...string] =  form.name.trim().split(' ');
            const lastName = string.join(' ');

            if(lastName == ''){
                notify('Adicione um sobrenome para continuar', 'info');
                return;
            }

            setForm(form => ({...form, firstName, lastName}));

        }

        if(step == 2){
            if(!isFormValid()){
                notify('Existem campos inválidos', 'error');
                return;
            }
        
            console.log(form);

            const request = postRegister();
            if(!request) return;
        }

        if(step == 3){
            navigate('/');
            return;
        }

        setStep(x => x + 1);
    }

    const backStep = () => {
        if(step == 1){ 
            navigate('/');
            return;
        }
        if(step == 3) return;
        setStep(x => x - 1);
    }

    const isEmailValid = () => {
        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(form.email);
    }

    const isFormValid = () => {
        return Object.values(form).every(value => value !== '');
    };

    const postRegister = () => {
        loading(true);
        axios.post(`${apiUrl}/participants/register`, form)
        .then(response => {
            notify('Inscrição realizada com sucesso!', 'success');
            loading(false);
            setStep(x => x + 1);
            return 1;
        })
        .catch(error => {
            notify(error.response.data.error.message, 'error');
            loading(false);
            return 0;
        });

    }


  return (
    <div className='FormRegister'>
        <div className='container-register'>
            <div className='header'>
                {(step == 1 || step == 2) ? <h1>Inscrição</h1> : 
                <div className='title-step3'>
                     <h1>Parabêns,</h1>
                     <h3>Sua Inscrição foi enviada!</h3>
                </div>
                }
                <FormSteps step={step}></FormSteps>
            </div>
            {step != 3 && (
                <form>
                    {/* // STEP 1 */}
                    { step == 1 && (
                        <>
                        <div className='formChilder'>
                            <div>
                                <label htmlFor="nome">Nome:</label>
                                <input 
                                    placeholder='Digite seu nome'
                                    type="text" 
                                    name='nome' 
                                    value={form.name} 
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="instituicao">Instituição:</label>
                                <input
                                placeholder='Digite sua instituição'
                                type="text" 
                                name='instituicao' 
                                value={form.institution} 
                                onChange={(e) => setForm({ ...form, institution: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className='formChilder'>
                            <div>
                                <div className='errorContainer'>
                                    {errorEmail && <span className='errorInput'>Email inválido</span>}
                                </div>
                                <label htmlFor="email">Email:</label>
                                <input 
                                    placeholder='Digite um email'
                                    type="email" 
                                    name='email' 
                                    autoComplete="email"
                                    value={form.email} 
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                                </div>
                            <div>
                                <label htmlFor="password">Senha:</label>
                                <input 
                                    placeholder='Digite uma senha'
                                    type="password" 
                                    name='password' 
                                    value={form.password} 
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className='formChilder'>
                            <div>
                                <label htmlFor="modalidade">Modalidade:</label>
                                <select
                                name="modalidade"
                                value={form.modality} 
                                onChange={(e) => setForm({ ...form, modality: e.target.value })}
                                >
                                    <option value="">Selecione uma modalidade</option>
                                    <option value="in-person">Presencial</option>
                                    <option value="remote">Remoto</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="genero">Gênero:</label>
                                <select 
                                name="genero"
                                value={form.gender} 
                                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                                >
                                    <option value="">Selecione um gênero</option>
                                    <option value="female">Feminino</option>
                                    <option value="male">Masculino</option>
                                    <option value="non-binary">Não binário</option>
                                    <option value="transgender">Transgênero</option>
                                    <option value="other">Outro</option>
                                </select>
                            </div>
                            {/* <div>
                                <label htmlFor="acessibilidade">Acessibilidade</label>
                                <select 
                                name="acessibilidade"
                                value={form.acessibilidade} 
                                onChange={(e) => setForm({ ...form, acessibilidade: e.target.value })}
                                >
                                    <option value="">Selecione uma opção</option>
                                    <option value="1">Sim</option>
                                    <option value="0">Não</option>
                                </select>
                            </div> */}
                        </div>
                        </>
                    )}

                    {/* // STEP 2 */}

                    {step == 2 && (
                        <>
                        <div className='formChilder'>
                            <div>
                                <label htmlFor="pais">País de origem:</label>
                                <input 
                                placeholder='Digite o País'
                                name="pais"
                                value={form.country} 
                                onChange={(e) => setForm({ ...form, country: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="Estado">Estado:</label>
                                <input 
                                placeholder='Digite o Estado'
                                name="Estado"
                                value={form.state} 
                                onChange={(e) => setForm({ ...form, state: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="cidade">Cidade:</label>
                                <input 
                                placeholder='Digite a Cidade'
                                name="cidade"  
                                value={form.city} 
                                onChange={(e) => setForm({ ...form, city: e.target.value })}
                                />
                            </div>
                        </div>
                        {/* <div className='select'>
                            <label htmlFor="motivo">Como você soube desse evento?</label>
                            <select 
                            name="motivo"
                            value={form.motivo} 
                            onChange={(e) => setForm({ ...form, motivo: e.target.value })}
                            >
                                <option value="">Selecione</option>
                                <option value="1">for com as opções</option>
                            </select>
                        </div> */}
                        </>
                    )}
                </form>
            )}

            {/* // STEP 3 */}
            {step == 3 && (
                <div className='step3-container'>
                    <div>
                        <div>
                            <h1>Tudo pronto!</h1>
                            <h3>
                                Sua inscrição no FishBase 2025 está garantida. 
                                Agora, verifique as informações importantes abaixo:
                            </h3>
                        </div>
                        <button>
                            Programação
                        </button>
                        <button>
                            Hotéis recomendados
                        </button>
                        <button>
                            Página do participante
                        </button>
                    </div>
                    <div className='imgRegister'>
                        <img src='public/images/imgRegister.png'></img>
                    </div>
                </div>
            )}

        </div>
        <div className='container-buttons-register'>
            <button onClick={backStep}>
                Voltar
            </button>
            <button onClick={nextStep}>
                {button}
            </button>
        </div>
    </div>
  );
}

export default FormRegister;