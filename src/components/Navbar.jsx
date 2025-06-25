import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const navItems = [
  { to: '/', label: 'navbar.home' },
  { to: '/propiedades', label: 'navbar.properties' },
  { to: '/sobre-nosotros', label: 'navbar.about' },
  { to: '/testimonios', label: 'navbar.testimonials' },
  { to: '/blog', label: 'navbar.blog' },
  { to: '/contacto', label: 'navbar.contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cierra menú al navegar
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, [menuOpen]);

  const bgColor = scrolled
    ? 'rgba(45, 35, 32, 0.8)'
    : 'rgba(45, 35, 32, 0.3)';

  const linkColor = '#F2F2F2';
  const linkActive = '#A68365';

  return (
    <header style={{
      width: '100%',
      background: bgColor,
      borderBottom: scrolled ? '1px solid #A68365' : '1px solid transparent',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: scrolled ? '0 2px 8px 0 rgba(45,35,32,0.12)' : 'none',
      transition: 'background 0.3s, border 0.3s, box-shadow 0.3s',
      backdropFilter: 'blur(6px)'
    }}>
      <nav style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem 1rem',
        position: 'relative',
      }}>
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/g2-logo.png" alt="G2 Living logo" style={{ height: 44 }} />
        </NavLink>
        {/* Menú principal */}
        <ul
          className={menuOpen ? 'g2-nav-open' : ''}
          style={{
            display: 'flex',
            gap: '1.2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center',
            position: 'static',
            background: 'none',
            boxShadow: 'none',
            transition: 'all 0.3s',
          }}
        >
          {navItems.map((item, idx) => (
            <li key={item.to}
              className={menuOpen ? 'g2-nav-anim' : ''}
              style={menuOpen ? {
                animation: `g2FadeIn 0.5s cubic-bezier(.4,0,.2,1) forwards`,
                animationDelay: `${0.12 * idx + 0.1}s`,
                opacity: 0
              } : {}}>
              <NavLink
                to={item.to}
                style={({ isActive }) => ({
                  color: isActive ? linkActive : linkColor,
                  fontWeight: isActive ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 16,
                  transition: 'color 0.2s',
                  padding: '0.5rem 0.7rem',
                  borderRadius: 8,
                  display: 'inline-block',
                })}
                onClick={() => setMenuOpen(false)}
              >
                {t(item.label)}
              </NavLink>
            </li>
          ))}
          {/* Selector de idioma premium al lado de contacto */}
          <li style={{ marginLeft: 8 }}>
            <select
              value={i18n.language}
              onChange={e => i18n.changeLanguage(e.target.value)}
              style={{
                borderRadius: 18,
                border: '1.5px solid #B08B5E',
                padding: '6px 18px 6px 12px',
                fontWeight: 700,
                background: 'rgba(255,255,255,0.13)',
                color: '#B08B5E',
                fontSize: 15,
                boxShadow: '0 2px 8px 0 rgba(176,139,94,0.08)',
                outline: 'none',
                cursor: 'pointer',
                transition: 'border 0.2s, box-shadow 0.2s',
                minWidth: 60,
              }}
              aria-label="Seleccionar idioma"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>
        {/* Botón hamburguesa a la derecha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Abrir menú"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              marginLeft: 10,
              zIndex: 120,
            }}
            className="g2-hamburger"
          >
            <span style={{ display: 'block', width: 28, height: 3, background: '#B08B5E', borderRadius: 2, margin: '6px 0' }}></span>
            <span style={{ display: 'block', width: 28, height: 3, background: '#B08B5E', borderRadius: 2, margin: '6px 0' }}></span>
            <span style={{ display: 'block', width: 28, height: 3, background: '#B08B5E', borderRadius: 2, margin: '6px 0' }}></span>
          </button>
        </div>
      </nav>
      {/* CSS Responsive Navbar mejorado */}
      <style>{`
        @media (max-width: 900px) {
          nav { max-width: 100vw !important; }
        }
        @media (max-width: 700px) {
          .g2-hamburger { display: block !important; position: relative; }
          nav > div { order: 2; }
          nav ul {
            display: none !important;
            position: absolute !important;
            top: 60px;
            right: 0;
            background: #2d2320;
            box-shadow: 0 8px 32px #b08b5e22;
            flex-direction: column;
            gap: 0;
            min-width: 180px;
            border-radius: 0 0 16px 16px;
            padding: 0.7rem 0.5rem;
            z-index: 110;
            align-items: flex-start;
          }
          nav ul.g2-nav-open {
            display: flex !important;
          }
          nav ul.g2-nav-open li a {
            color: #fff !important;
            background: #B08B5E;
            font-size: 17px !important;
            padding: 0.7rem 1.2rem !important;
            border-radius: 8px;
            width: 100%;
            display: block;
            margin-bottom: 6px;
            box-shadow: 0 1px 6px #b08b5e22;
            text-align: left;
          }
          nav ul.g2-nav-open li.g2-nav-anim {
            opacity: 0;
          }
          nav ul.g2-nav-open li select {
            width: 100%;
            margin-top: 6px;
            font-size: 16px;
            padding: 8px 12px;
            background: #fffbe6;
            color: #B08B5E;
            border: 1.5px solid #B08B5E;
          }
        }
        @keyframes g2FadeIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </header>
  );
}
