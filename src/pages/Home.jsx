import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { useNavigate } from 'react-router-dom';
import TestimoniosSection from '../components/TestimoniosSection';
import { useTranslation } from 'react-i18next';
import SeoHelmet from '../components/SeoHelmet';
import { AnimatePresence, motion } from 'framer-motion';
import PropertyModal from '../components/PropertyModal';

const mockProperties = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&w=800&q=80',
    title: 'Casa Campestre El Retiro',
    location: 'El Retiro, Antioquia',
    price: '$3.200.000.000 COP',
    tag: 'Exclusiva',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg?auto=compress&w=800&q=80',
    title: 'Penthouse Poblado',
    location: 'El Poblado, Medellín',
    price: '$2.800.000.000 COP',
    tag: 'Nueva',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&w=800&q=80',
    title: 'Apartamento Provenza',
    location: 'Provenza, Medellín',
    price: '$1.950.000.000 COP',
    tag: 'Premium',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&w=800&q=80',
    title: 'Casa Moderna Envigado',
    location: 'Envigado, Antioquia',
    price: '$2.500.000.000 COP',
    tag: 'Exclusiva',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&w=800&q=80',
    title: 'Villa de Lujo Llanogrande',
    location: 'Llanogrande, Rionegro',
    price: '$4.100.000.000 COP',
    tag: 'Premium',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=800&q=80',
    title: 'Casa Laureles',
    location: 'Laureles, Medellín',
    price: '$2.200.000.000 COP',
    tag: 'Nueva',
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&w=800&q=80',
    title: 'Casa Familiar Sabaneta',
    location: 'Sabaneta, Antioquia',
    price: '$1.600.000.000 COP',
    tag: 'Oportunidad',
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&w=800&q=80',
    title: 'Apartamento Vista Palmas',
    location: 'Las Palmas, Medellín',
    price: '$1.850.000.000 COP',
    tag: 'Premium',
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&w=800&q=80',
    title: 'Casa de Lujo El Tesoro',
    location: 'El Tesoro, Medellín',
    price: '$3.800.000.000 COP',
    tag: 'Exclusiva',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedProperty, setSelectedProperty] = React.useState(null);

  const handleShowDetails = (property) => {
    setSelectedProperty(property);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <>
      <SeoHelmet title={t('navbar.home')} description={t('hero.subtitle')} />
      <PropertyModal open={modalOpen} onClose={handleCloseModal} property={selectedProperty} />
      <section style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', background: 'transparent', padding: 0 }}>
        {/* Hero Section */}
        <div style={{
          width: '100vw',
          margin: '0 calc(50% - 50vw)',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/hero.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '4.5rem 0 2.5rem 0',
          textAlign: 'center',
        }}>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#f2f2f2', marginBottom: 18, letterSpacing: 1.2, textShadow: '0 2px 16px rgba(0,0,0,0.18)' }}>
            {t('hero.title')}
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#f2f2f2', maxWidth: 480, margin: '0 auto 2.2rem auto', textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
            {t('hero.subtitle')}
          </p>
          {/* Buscador elegante */}
          <form style={{
            display: 'flex',
            gap: 14,
            background: 'rgba(45,35,32,0.85)',
            borderRadius: 32,
            padding: '0.7rem 1.2rem',
            boxShadow: '0 2px 12px 0 rgba(45,35,32,0.10)',
            margin: '2rem auto 0 auto',
            maxWidth: 480,
            width: '100%',
            alignItems: 'center',
          }}
            onSubmit={e => { e.preventDefault(); }}
          >
            <input
              type="text"
              placeholder={t('Buscar propiedad, zona o código...')}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                color: '#F2F2F2',
                fontSize: 17,
                padding: '0.7rem 0.5rem',
                fontFamily: 'inherit',
              }}
            />
            <button type="submit" style={{
              background: '#A68365',
              color: '#fff',
              border: 'none',
              borderRadius: 24,
              padding: '0.7rem 1.7rem',
              fontWeight: 700,
              fontSize: 17,
              cursor: 'pointer',
              transition: 'background 0.2s',
              fontFamily: 'inherit',
            }}>
              {t('Buscar')}
            </button>
          </form>
        </div>

        {/* Propiedades Destacadas */}
        <div id="propiedades" style={{ width: '100vw', margin: '0 calc(50% - 50vw)', padding: '3.5rem 0 2.2rem 0', background: 'linear-gradient(120deg, #f7f3ee 60%, #e7dacb 100%)', boxShadow: '0 2px 24px 0 rgba(45,35,32,0.10)' }}>
          <h2 className="featured-title" style={{ fontSize: '1.7rem', fontWeight: 700, color: '#7C5A3A', marginBottom: 28, maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', paddingLeft: 18, paddingRight: 18, letterSpacing: 0.5 }}>{t('featured.title')}</h2>
          <AnimatePresence>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 32,
              alignItems: 'stretch',
              maxWidth: 1200,
              margin: '0 auto',
              width: '100%',
              padding: '0 1.2rem',
            }}>
              {mockProperties.map((prop) => (
                <motion.div key={prop.id} layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.5 }}>
                  <PropertyCard
                    image={prop.image}
                    title={prop.title}
                    location={prop.location}
                    price={prop.price}
                    tag={prop.tag}
                    onShowDetails={() => handleShowDetails(prop)}
                  />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>

        {/* Frase sutil y elegante */}
        <div style={{
          width: '100vw',
          margin: '4.5rem calc(50% - 50vw)',
          padding: '2.2rem 0',
          background: 'transparent',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{
            display: 'inline-block',
            color: '#B08B5E',
            fontSize: '1.7rem',
            fontWeight: 400,
            fontFamily: 'serif',
            letterSpacing: 1.2,
            textShadow: '0 2px 18px rgba(176,139,94,0.10)',
            borderBottom: '1.5px solid #E2C9A0',
            padding: '0.5rem 2.2rem',
            borderRadius: 0,
            background: 'rgba(255,255,255,0.10)',
            backdropFilter: 'blur(2px)',
            boxShadow: '0 2px 12px 0 rgba(224,201,160,0.07)',
          }}>
            "Transformamos sueños en realidad."
          </span>
        </div>

        {/* Testimonios */}
        {/* <TestimoniosSection /> */}
      </section>

    </>
  );
}
