import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contacto() {
  return (
    <div
      style={{
        width: '100vw',
        margin: '0 calc(50% - 50vw)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(45,35,32,0.55), rgba(176,139,94,0.18)), url('/hero2.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '3rem 1.5rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1100,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 48,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: 1, minWidth: 320, maxWidth: 520, color: '#fff', paddingRight: 12 }}>
          <h1 style={{ fontSize: '2.1rem', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: 1, textShadow: '0 2px 12px #7C5A3A' }}>
            Contáctanos
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#fff', maxWidth: 420, textShadow: '0 2px 8px #7C5A3A' }}>
            ¿Listo para dar el siguiente paso? Nuestro equipo premium te acompaña en todo el proceso de compra, venta o inversión inmobiliaria.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 320, maxWidth: 420, background: 'rgba(255,255,255,0.97)', borderRadius: 18, boxShadow: '0 2px 16px 0 rgba(176,139,94,0.13)', padding: '2.2rem 1.5rem', margin: '0 auto' }}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
