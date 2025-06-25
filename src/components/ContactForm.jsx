import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('');
    if (!form.nombre || !form.email || !form.mensaje) {
      setStatus(t('contact.error'));
      return;
    }
    setLoading(true);
    // Simulación de envío a endpoint
    await new Promise(res => setTimeout(res, 1200));
    setLoading(false);
    setStatus(t('contact.success'));
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: '0 auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>{t('contact.title')}</h2>
      <input
        type="text"
        name="nombre"
        placeholder={t('contact.name')}
        value={form.nombre}
        onChange={handleChange}
        style={{ padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16 }}
        required
      />
      <input
        type="email"
        name="email"
        placeholder={t('contact.email')}
        value={form.email}
        onChange={handleChange}
        style={{ padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16 }}
        required
      />
      <textarea
        name="mensaje"
        placeholder={t('contact.message')}
        value={form.mensaje}
        onChange={handleChange}
        rows={4}
        style={{ padding: '0.7rem 1rem', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16, resize: 'vertical' }}
        required
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          background: '#A68365',
          color: '#fff',
          border: 'none',
          borderRadius: 24,
          padding: '0.8rem 2rem',
          fontWeight: 600,
          fontSize: 16,
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background 0.18s',
          boxShadow: '0 2px 8px 0 rgba(124,90,58,0.08)',
        }}
        onMouseOver={e => { if (!loading) e.currentTarget.style.background = '#7C5A3A'; }}
        onMouseOut={e => { if (!loading) e.currentTarget.style.background = '#A68365'; }}
      >
        {loading ? t('contact.sending') : t('contact.send')}
      </button>
      {status && <div style={{ color: status.startsWith('¡') || status.startsWith('M') ? '#0a6d5a' : '#d32f2f', fontWeight: 500, marginTop: 6 }}>{status}</div>}
    </form>
  );
}
