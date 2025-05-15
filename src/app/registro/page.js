'use client';

import { useState } from 'react';
import Link from 'next/link';

const STEPS = [
  'Informações de conta',
  'Dados Complementares',
  'Confirmação'
];

export default function RegistroPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName:   '',
    lastName:    '',
    gender:      '',
    city:        '',
    state:       '',
    country:     '',
    institution: '',
    email:       '',
    password:    '',
    modality:    'in-person',  // ← agora conforme a spec
    language:    'pt'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(cur => ({ ...cur, [name]: value }));
  }

  async function submitRegistration() {
    setError('');
    try {
      // Payload exatamente como no curl de referência
      const payload = {
        firstName:   form.firstName,
        lastName:    form.lastName,
        gender:      form.gender,
        city:        form.city,
        state:       form.state,
        country:     form.country,
        institution: form.institution,
        email:       form.email,
        password:    form.password,
        modality:    form.modality,
        language:    form.language
      };
      console.log('Enviando payload:', payload);

      const res = await fetch(
        'https://fishbase-backend.onrender.com/participants/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      const json = await res.json();
      if (res.ok) {
        setSuccess(true);
        setStep(2);
      } else {
        setError(json.error?.message || 'Erro desconhecido');
        setStep(2);
      }
    } catch {
      setError('Erro de rede, tente novamente.');
      setStep(2);
    }
  }

  function nextStep() {
    setError('');

    if (step === 0) {
      // valida campos de conta
      if (!form.firstName || !form.lastName || !form.email || !form.password) {
        setError('Preencha nome, sobrenome, email e senha.');
        return;
      }
      setStep(1);

    } else if (step === 1) {
      // valida dados complementares
      const { gender, city, state, country, institution } = form;
      if (!gender || !city || !state || !country || !institution) {
        setError('Preencha todos os dados complementares.');
        return;
      }
      submitRegistration();
    }
  }

  function prevStep() {
    setError('');
    if (step > 0) setStep(step - 1);
  }

  return (
    <div className="container">
      <div className="registration-nav">
        <Link href="/">
          <span className="arrow">◀</span> Voltar
        </Link>
      </div>

      <div className="registration-section">
        <aside>
          <ul className="stepper">
            {STEPS.map((label, idx) => (
              <li key={idx} className={idx === step ? 'current' : ''}>
                {label}
              </li>
            ))}
          </ul>
        </aside>

        <div className="form-section">
          {step === 0 && (
            <>
              <h1>Inscrição</h1>
              {['firstName','lastName','email','password'].map(field => (
                <div className="form-group" key={field}>
                  <label>
                    {field === 'firstName' ? 'Nome'
                      : field === 'lastName' ? 'Sobrenome'
                      : field === 'email'    ? 'Email'
                      : 'Senha'}
                  </label>
                  <input
                    type={field==='password'?'password':'text'}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={
                      field==='firstName'?'João'
                      :field==='lastName'?'Silva'
                      :field==='email'   ?'joao@exemplo.com'
                      :'••••••••'
                    }
                  />
                </div>
              ))}
            </>
          )}

          {step === 1 && (
            <>
              <h1>Dados Complementares</h1>
              <div className="form-group">
                <label>Gênero</label>
                <select name="gender" value={form.gender} onChange={handleChange}>
                  <option value="">Selecione</option>
                  <option value="female">Feminino</option>
                  <option value="male">Masculino</option>
                  <option value="transgender">Transgênero</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              {['city','state','country','institution'].map(field => (
                <div className="form-group" key={field}>
                  <label>
                    {field==='city'?'Cidade'
                      :field==='state'?'Estado'
                      :field==='country'?'País'
                      :'Instituição'}
                  </label>
                  <input
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={
                      field==='city'?'Aracaju'
                      :field==='state'?'Sergipe'
                      :field==='country'?'Brasil'
                      :'Universidade Federal de Sergipe'
                    }
                  />
                </div>
              ))}

              <div className="form-group">
                <label>Modalidade</label>
                <select name="modality" value={form.modality} onChange={handleChange}>
                  <option value="in-person">Presencial</option>
                  <option value="remote">Remoto</option>
                </select>
              </div>

              <div className="form-group">
                <label>Idioma</label>
                <select name="language" value={form.language} onChange={handleChange}>
                  <option value="pt">Português</option>
                  <option value="en">Inglês</option>
                </select>
              </div>
            </>
          )}

          {step === 2 && (
            <div className="confirmation">
              {success
                ? <p>🎉 Inscrição realizada com sucesso! Verifique seu email para confirmação.</p>
                : <p style={{ color: '#FFD700' }}>❌ {error}</p>
              }
            </div>
          )}

          {error && step < 2 && <p className="form-error">{error}</p>}

          <div className="button-container">
            <button type="button" className="btn-back" onClick={prevStep} disabled={step===0}>
              ◀ Voltar
            </button>
            {step < 2 && (
              <button type="button" className="btn-next" onClick={nextStep}>
                Continuar ▶
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
