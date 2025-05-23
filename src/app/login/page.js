'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

<<<<<<< HEAD
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password: senha }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save the token (adjust based on your backend response)
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('language', data.language);
      // Redirect to profile page, or wherever
      window.location.href = '/user'; 
    } else {
      alert(data.message || 'Erro ao fazer login');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Erro na conexão');
  }
};


  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <label className="block mb-2">Senha</label>
        <input
          type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          className="w-full p-2 border rounded mb-6"
        />
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: chamada de API de login
  };

  return (
    <main className='flex items-center justify-center h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'
      >
        <h1 className='text-2xl font-bold mb-6'>Login</h1>
        <label className='block mb-2'>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full p-2 border rounded mb-4'
        />
        <label className='block mb-2'>Senha</label>
        <input
          type='password'
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className='w-full p-2 border rounded mb-6'
        />
        <button
          type='submit'
          className='w-full bg-green-700 text-white py-2 rounded hover:bg-green-800'
>>>>>>> us001-realizar-cadastro
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
