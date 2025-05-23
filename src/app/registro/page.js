'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
const STEPS = [
  'Informações de conta',
  'Dados Complementares',
  'Confirmação'
];

export default function RegistroPage() {
  const { texts } = useLanguage();
  const STEPS = texts.register.steps;
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
        setError(json.error?.message || texts.register.messages.genericError);
        setStep(2);
      }
    } catch {
      setError(texts.register.messages.genericError);
      setStep(2);
    }
  }

  function nextStep() {
    setError('');

    if (step === 0) {
      // valida campos de conta
      if (!form.firstName || !form.lastName || !form.email || !form.password) {
        setError(texts.register.messages.step0Error);
        return;
      }
      setStep(1);

    } else if (step === 1) {
      // valida dados complementares
      const { gender, city, state, country, institution } = form;
      if (!gender || !city || !state || !country || !institution) {
        setError(texts.register.messages.step1Error);
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
          <span className="arrow">◀</span> {texts.register.navBack}
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
              <h1>{texts.register.title}</h1>
              {['firstName','lastName','email','password'].map(field => (
                <div className="form-group" key={field}>
                  <label>
                    {field === 'firstName' ? 'Nome'
                      : field === 'lastName' ? 'Sobrenome'
                      : field === 'email'    ? 'Email'
                      : 'Senha'}
                  </label>
                  <input
                    type={field === 'password' ? 'password' : 'text'}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={texts.register.placeholders[field]}
                  />
                </div>
              ))}
            </>
          )}

          {step === 1 && (
            <>
              <h1>{texts.register.steps[1]}</h1>
              <div className="form-group">
                <label>{texts.register.fields.gender}</label>
                <select name="gender" value={form.gender} onChange={handleChange}>
                  <option value="">{texts.register.genderOptions.select}</option>
                  <option value="female">{texts.register.genderOptions.female}</option>
                  <option value="male">{texts.register.genderOptions.male}</option>
                  <option value="transgender">{texts.register.genderOptions.transgender}</option>
                  <option value="other">{texts.register.genderOptions.other}</option>
                </select>
              </div>

              {['city','state','country','institution'].map(field => (
                <div className="form-group" key={field}>
                  <label>{texts.register.fields[field]}</label>
                  <input
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={texts.register.placeholders[field]}
                  />
                </div>
              ))}

              <div className="form-group">
                <label>{texts.register.fields.modality}</label>
                <select name="modality" value={form.modality} onChange={handleChange}>
                  <option value="in-person">{texts.register.modalityOptions.inPerson}</option>
                  <option value="remote">{texts.register.modalityOptions.remote}</option>
                </select>
              </div>

              <div className="form-group">
                <label>{texts.register.fields.language}</label>
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
                ? <p>{texts.register.messages.success}</p>
                : <p style={{ color: '#FFD700' }}>❌ {error}</p>
              }
            </div>
          )}

          {error && step < 2 && <p className="form-error">{error}</p>}

          <div className="button-container">
            <button type="button" className="btn-back" onClick={prevStep} disabled={step===0}>
              {texts.register.buttons.back}
            </button>
            {step < 2 && (
              <button type="button" className="btn-next" onClick={nextStep}>
                {texts.register.buttons.continue}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
