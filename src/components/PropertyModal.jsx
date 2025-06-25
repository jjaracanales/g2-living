import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Mock de imágenes adicionales por propiedad
const propertyImages = {
  'Casa Campestre El Retiro': [
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&w=800&q=80',
  ],
  'Penthouse Poblado': [
    'https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=800&q=80',
  ],
  'Apartamento Provenza': [
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&w=800&q=80',
  ],
  'Casa Moderna Envigado': [
    'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&w=800&q=80',
  ],
  'Villa de Lujo Llanogrande': [
    'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=800&q=80',
  ],
  'Casa Laureles': [
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&w=800&q=80',
  ],
  'Casa Familiar Sabaneta': [
    'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&w=800&q=80',
  ],
  'Apartamento Vista Palmas': [
    'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg?auto=compress&w=800&q=80',
  ],
  'Casa de Lujo El Tesoro': [
    'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=800&q=80',
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&w=800&q=80',
  ],
};

const descriptions = {
  'Casa Campestre El Retiro': 'Disfruta de la tranquilidad y el lujo en esta casa campestre rodeada de naturaleza, con amplios jardines y acabados premium en El Retiro.',
  'Penthouse Poblado': 'Vive en las alturas con vistas panorámicas de Medellín, acabados modernos y espacios abiertos en el corazón de El Poblado.',
  'Apartamento Provenza': 'Ubicado en la zona más exclusiva de Provenza, este apartamento combina diseño contemporáneo y comodidad absoluta.',
  'Casa Moderna Envigado': 'Arquitectura moderna, espacios luminosos y una ubicación privilegiada en Envigado. Ideal para familias que buscan exclusividad.',
  'Villa de Lujo Llanogrande': 'Villa de lujo con piscina privada, jardines extensos y seguridad en Llanogrande. Perfecta para quienes buscan privacidad y confort.',
  'Casa Laureles': 'Casa familiar en Laureles con diseño elegante, patio interior y acceso a las mejores zonas de la ciudad.',
  'Casa Familiar Sabaneta': 'Espaciosa y acogedora, esta casa en Sabaneta es ideal para familias que buscan tranquilidad y cercanía a servicios.',
  'Apartamento Vista Palmas': 'Apartamento con vista privilegiada a las montañas, acabados de lujo y excelente ubicación en Las Palmas.',
  'Casa de Lujo El Tesoro': 'Residencia exclusiva en El Tesoro, con amplios espacios, terraza panorámica y acabados de la más alta calidad.',
};

function getMapUrl(location) {
  // Simplemente usa el nombre para Google Maps Embed
  const query = encodeURIComponent(location + ', Antioquia, Colombia');
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export default function PropertyModal({ open, onClose, property }) {
  if (!open || !property) return null;
  const images = propertyImages[property.title] || [property.image];
  const description = descriptions[property.title] || 'Propiedad exclusiva con todas las comodidades y detalles de lujo.';
  const mapUrl = getMapUrl(property.location);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(45,35,32,0.85)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: '#fff',
              borderRadius: 32,
              maxWidth: 900,
              width: '96vw',
              boxShadow: '0 12px 48px 0 rgba(45,35,32,0.22)',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'auto',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 540,
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Carrusel de imágenes con flechas personalizadas */}
            <div style={{ width: '100%', height: 340, background: '#eee', position: 'relative' }}>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  nextEl: '.custom-swiper-next',
                  prevEl: '.custom-swiper-prev',
                }}
                modules={[Navigation]}
                style={{ width: '100%', height: '100%' }}
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt={property.title} style={{ width: '100%', height: 340, objectFit: 'cover' }} />
                  </SwiperSlide>
                ))}
                {/* Flechas personalizadas */}
                <div className="custom-swiper-prev" style={{
                  position: 'absolute',
                  top: '50%',
                  left: 18,
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  background: 'rgba(45,35,32,0.75)',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px 0 rgba(45,35,32,0.10)',
                  color: '#fff',
                  fontSize: 22,
                  transition: 'background 0.2s',
                  border: '2px solid #A68365',
                }}>
                  <span style={{ display: 'block', fontWeight: 700 }}>&#8592;</span>
                </div>
                <div className="custom-swiper-next" style={{
                  position: 'absolute',
                  top: '50%',
                  right: 18,
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  background: 'rgba(45,35,32,0.75)',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px 0 rgba(45,35,32,0.10)',
                  color: '#fff',
                  fontSize: 22,
                  transition: 'background 0.2s',
                  border: '2px solid #A68365',
                }}>
                  <span style={{ display: 'block', fontWeight: 700 }}>&#8594;</span>
                </div>
              </Swiper>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 32, padding: '2rem 2rem 1.5rem 2rem', flex: 1 }}>
              <div style={{ flex: 2, minWidth: 0 }}>
                <h2 style={{ fontSize: 30, fontWeight: 700, color: '#2d2320', marginBottom: 8 }}>{property.title}</h2>
                <div style={{ color: '#A68365', fontWeight: 600, fontSize: 19, marginBottom: 8 }}>{property.location}</div>
                <div style={{ color: '#59493B', fontWeight: 700, fontSize: 22, marginBottom: 18 }}>{property.price}</div>
                <p style={{ color: '#59493B', fontSize: 17, marginBottom: 18 }}>{description}</p>
                <button onClick={onClose} style={{
                  background: '#A68365',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 24,
                  padding: '0.7rem 2.2rem',
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px 0 rgba(89,73,59,0.10)',
                  transition: 'background 0.2s',
                  marginTop: 8,
                }}>
                  Cerrar
                </button>
              </div>
              <div style={{ flex: 1, minWidth: 220, maxWidth: 320, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '100%', height: 180, borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 12px 0 rgba(45,35,32,0.10)', marginBottom: 12 }}>
                  <iframe
                    title="Mapa ubicación"
                    src={mapUrl}
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <span style={{ color: '#59493B', fontWeight: 600, fontSize: 15, textAlign: 'center' }}>Ubicación aproximada</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
