import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer style={{
      width: '100%',
      background: '#fff',
      borderTop: '1px solid #eee',
      padding: '1.5rem 0 1rem 0',
      textAlign: 'center',
      fontSize: 15,
      color: '#444',
      marginTop: 'auto',
    }}>
      <div style={{ marginBottom: 8 }}>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#1a1a1a', fontSize: 20 }} aria-label="Instagram"><FaInstagram /></a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#1a1a1a', fontSize: 20 }} aria-label="Facebook"><FaFacebookF /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#1a1a1a', fontSize: 20 }} aria-label="LinkedIn"><FaLinkedinIn /></a>
      </div>
      <div style={{ fontSize: 13, color: '#888' }}>
        © {new Date().getFullYear()} G2 Living. {t('footer.rights')}
      </div>
      <button
        onClick={() => window.location.href = '/panel'}
        style={{
          marginTop: 18,
          background: 'linear-gradient(90deg, #B08B5E 0%, #A68365 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '0.7rem 2.2rem',
          fontWeight: 700,
          fontSize: 16,
          cursor: 'pointer',
          boxShadow: '0 2px 8px 0 rgba(176,139,94,0.10)',
        }}
      >
        Ingresar al Panel
      </button>
    </footer>
  );
}
