import React, { useState } from 'react';

export default function LoginPanel({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === 'g2' && pass === 'living') {
      setError('');
      onLogin();
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: `linear-gradient(rgba(0,0,0,0.55), rgba(176,139,94,0.33)), url('/hero.jpg') center/cover no-repeat`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
    }}>
      <form onSubmit={handleSubmit} style={{
        background: 'rgba(255,255,255,0.97)',
        borderRadius: 18,
        boxShadow: '0 4px 32px 0 rgba(124,90,58,0.13)',
        padding: '2.5rem 2rem 2rem 2rem',
        minWidth: 320,
        maxWidth: 350,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#B08B5E', marginBottom: 18 }}>Panel G2 Living</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={e => setUser(e.target.value)}
          style={{
            width: '100%',
            marginBottom: 14,
            padding: '0.7rem 1rem',
            borderRadius: 8,
            border: '1.5px solid #B08B5E',
            fontSize: 16,
            outline: 'none',
            background: '#f7f3ee',
            color: '#7C5A3A',
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={e => setPass(e.target.value)}
          style={{
            width: '100%',
            marginBottom: 18,
            padding: '0.7rem 1rem',
            borderRadius: 8,
            border: '1.5px solid #B08B5E',
            fontSize: 16,
            outline: 'none',
            background: '#f7f3ee',
            color: '#7C5A3A',
          }}
        />
        {error && <div style={{ color: '#c00', marginBottom: 10, fontSize: 14 }}>{error}</div>}
        <button type="submit" style={{
          background: 'linear-gradient(90deg, #B08B5E 0%, #A68365 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '0.7rem 2.2rem',
          fontWeight: 700,
          fontSize: 16,
          cursor: 'pointer',
          boxShadow: '0 2px 8px 0 rgba(176,139,94,0.10)',
          marginTop: 8,
        }}>
          Ingresar
        </button>
      </form>
    </div>
  );
}
