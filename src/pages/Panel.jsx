import React, { useState } from 'react';
import LoginPanel from '../components/LoginPanel';
import AdminProperties from '../components/AdminProperties';

export default function Panel() {
  const [logged, setLogged] = useState(false);

  if (!logged) {
    return <LoginPanel onLogin={() => setLogged(true)} />;
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #f7f3ee 60%, #e7dacb 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 60 }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#B08B5E', marginBottom: 24 }}>Administrador de Propiedades</h1>
      <p style={{ color: '#7C5A3A', fontSize: 17, marginBottom: 32 }}>Aquí podrás agregar, editar o eliminar propiedades del sitio.</p>
      <AdminProperties />
    </div>
  );
}
