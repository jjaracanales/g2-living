import './App.css';
import './styles/globals.css';
import AppRouter from './routes/AppRouter';
import './i18n';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  useEffect(() => {
    const handleLinkClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    // Animación: mostrar mensaje cada 25-40s, visible 4s
    let timeout1, timeout2;
    function loop() {
      const next = Math.random() * 15000 + 25000; // entre 25 y 40s
      timeout1 = setTimeout(() => {
        setShowMsg(true);
        timeout2 = setTimeout(() => {
          setShowMsg(false);
          loop();
        }, 4000);
      }, next);
    }
    loop();
    return () => { clearTimeout(timeout1); clearTimeout(timeout2); };
  }, []);

  return (
    <HelmetProvider>
      <AppRouter />
      {/* Mensaje animado tipo WhatsApp */}
      <div style={{
        position: 'fixed',
        right: 110,
        bottom: 90,
        zIndex: 2100,
        pointerEvents: 'none',
        display: showMsg ? 'block' : 'none',
        animation: showMsg ? 'whatsappPop 0.5s cubic-bezier(.68,-0.55,.27,1.55)' : 'none',
      }}>
        <div style={{
          background: '#fff',
          color: '#128C7E',
          borderRadius: 18,
          boxShadow: '0 4px 24px 0 #25d36655',
          padding: '0.9rem 1.4rem',
          fontWeight: 700,
          fontSize: 17,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          border: '1.5px solid #25D366',
          minWidth: 180,
          maxWidth: 320,
          pointerEvents: 'auto',
        }}>
          <FaWhatsapp style={{ fontSize: 22, color: '#25D366' }} />
          ¿Necesitas ayuda?
        </div>
      </div>
      {/* Botón flotante solo icono WhatsApp con animación */}
      <a
        href="https://wa.me/573001234567"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 2000,
          background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
          color: '#fff',
          borderRadius: '50%',
          boxShadow: '0 4px 24px 0 #25d36655',
          width: 60,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 34,
          textDecoration: 'none',
          border: 'none',
          transition: 'box-shadow 0.2s, background 0.2s',
          animation: 'whatsappPulse 1.5s infinite alternate',
        }}
        aria-label="WhatsApp G2 Living"
      >
        <FaWhatsapp />
      </a>
      {/* Animaciones CSS */}
      <style>{`
        @keyframes whatsappPop {
          0% { opacity: 0; transform: translateY(30px) scale(0.7); }
          80% { opacity: 1; transform: translateY(-8px) scale(1.08); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes whatsappPulse {
          0% { box-shadow: 0 4px 24px 0 #25d36655, 0 0 0 0 #25d36633; }
          100% { box-shadow: 0 4px 24px 0 #25d36699, 0 0 0 12px #25d36622; }
        }
      `}</style>
    </HelmetProvider>
  );
}

export default App;
