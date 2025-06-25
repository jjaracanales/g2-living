import React from 'react';
import { useTranslation } from 'react-i18next';
import SeoHelmet from '../components/SeoHelmet';

export default function SobreNosotros() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <SeoHelmet
        title={i18n.language === 'en' ? 'About G2 Living' : 'Sobre G2 Living'}
        description={i18n.language === 'en'
          ? 'Boutique real estate firm specializing in exclusive properties in Medellín and Eastern Antioquia.'
          : 'Firma boutique inmobiliaria especializada en propiedades exclusivas en Medellín y Oriente Antioqueño.'}
      />
      {/* Hero visual premium */}
      <div
        style={{
          width: '100vw',
          margin: '0 calc(50% - 50vw)',
          minHeight: '48vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `linear-gradient(rgba(45,35,32,0.55), rgba(176,139,94,0.18)), url('/hero3.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '3.5rem 0 2.5rem 0',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: 14, letterSpacing: 1, textShadow: '0 2px 12px #7C5A3A' }}>
          {i18n.language === 'en' ? 'About G2 Living' : 'Sobre G2 Living'}
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#fff', maxWidth: 540, margin: '0 auto', textShadow: '0 2px 8px #7C5A3A', fontWeight: 400 }}>
          {i18n.language === 'en'
            ? 'Boutique real estate firm specializing in exclusive properties in Medellín and Eastern Antioquia.'
            : 'Firma boutique inmobiliaria especializada en propiedades exclusivas en Medellín y Oriente Antioqueño.'}
        </p>
      </div>
      {/* Bloque de contenido premium */}
      <section
        style={{
          width: '100vw',
          margin: '0 calc(50% - 50vw)',
          background: 'linear-gradient(120deg, #f7f3ee 60%, #e7dacb 100%)',
          padding: '0',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{
          width: '100%',
          maxWidth: 1100,
          margin: '3rem auto',
          background: 'rgba(255,255,255,0.98)',
          borderRadius: 32,
          boxShadow: '0 4px 32px 0 rgba(124,90,58,0.10)',
          display: 'flex',
          flexDirection: 'row',
          gap: 0,
          overflow: 'hidden',
          minHeight: 420,
        }}>
          {/* Imagen lateral */}
          <div style={{
            flex: 1.1,
            background: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=800&q=80) center/cover no-repeat',
            minHeight: 420,
            display: window.innerWidth >= 700 ? 'block' : 'none',
          }} />
          {/* Contenido */}
          <div style={{ flex: 1.6, padding: '2.5rem 2.5rem 2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#7C5A3A', marginBottom: 18, letterSpacing: 1 }}>{i18n.language === 'en' ? 'Our Essence' : 'Nuestra Esencia'}</h2>
            <p style={{ color: '#59493B', fontSize: 18, marginBottom: 18, fontWeight: 500, lineHeight: 1.6 }}>
              {i18n.language === 'en'
                ? 'We are a boutique real estate firm specializing in exclusive properties in Medellín and Eastern Antioquia. Our focus is to offer personalized, confidential, and high-level service for clients seeking the best in country houses and premium apartments.'
                : 'Somos una firma boutique inmobiliaria especializada en propiedades exclusivas en Medellín y el Oriente Antioqueño. Nuestro enfoque es ofrecer un servicio personalizado, confidencial y de alto nivel para clientes que buscan lo mejor en casas campestres y apartamentos premium.'}
            </p>
            <ul style={{ color: '#7C5A3A', fontWeight: 600, fontSize: 17, marginBottom: 22, paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 22, color: '#B08B5E' }}>★</span>
                {i18n.language === 'en' ? '+10 years of experience in the luxury sector' : '+10 años de experiencia en el sector lujo'}
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 22, color: '#B08B5E' }}>★</span>
                {i18n.language === 'en' ? 'Curated portfolio of unique properties' : 'Portafolio curado de propiedades únicas'}
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 22, color: '#B08B5E' }}>★</span>
                {i18n.language === 'en' ? 'Comprehensive advice and legal support' : 'Asesoría integral y acompañamiento legal'}
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 22, color: '#B08B5E' }}>★</span>
                {i18n.language === 'en' ? 'Network of strategic partners' : 'Red de aliados estratégicos'}
              </li>
            </ul>
            <p style={{ color: '#7C5A3A', fontSize: 17, fontWeight: 500, lineHeight: 1.5 }}>
              {i18n.language === 'en'
                ? 'At G2 Living, every client is unique. Our mission is to help you find the perfect property, with total confidence and discretion.'
                : 'En G2 Living, cada cliente es único. Nuestra misión es ayudarte a encontrar la propiedad perfecta, con total confianza y discreción.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
