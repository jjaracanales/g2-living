import React from 'react';

const testimonios = [
  {
    name: 'María G.',
    text: 'La experiencia con G2 Living fue impecable. Encontré la casa de mis sueños y el acompañamiento fue de primer nivel.',
    location: 'El Retiro',
  },
  {
    name: 'Carlos P.',
    text: 'Propiedades realmente exclusivas y un trato muy profesional. Recomiendo G2 Living a quienes buscan lujo y confianza.',
    location: 'Medellín',
  },
  {
    name: 'Ana S.',
    text: 'El equipo entendió exactamente lo que buscaba. El proceso fue ágil y seguro.',
    location: 'Envigado',
  },
  {
    name: 'Julián R.',
    text: 'Excelente atención y asesoría personalizada. Muy satisfecho con mi inversión.',
    location: 'Laureles',
  },
  {
    name: 'Laura T.',
    text: 'Un servicio de lujo, atención personalizada y propiedades únicas.',
    location: 'El Poblado',
  },
  {
    name: 'Santiago V.',
    text: 'Me sentí acompañado en todo el proceso. ¡Recomendados!',
    location: 'Rionegro',
  },
];

export default function TestimoniosHero() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      justifyContent: 'center',
      alignItems: 'stretch',
      width: '100%',
      maxWidth: 1200,
      margin: '0 auto',
      marginTop: 24,
    }}>
      {testimonios.map((t, i) => (
        <div
          key={i}
          style={{
            background: 'rgba(6, 6, 6, 0.22)',
            borderRadius: 22,
            boxShadow: '0 4px 24px 0 rgba(24, 24, 23, 0.1)',
            border: '2px solidrgba(176, 139, 94, 0)',
            padding: '2.1rem 1.5rem 1.5rem 1.5rem',
            minWidth: 260,
            maxWidth: 340,
            flex: '1 1 320px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginBottom: 12,
            transition: 'transform 0.18s, box-shadow 0.18s',
          }}
        >
          <span style={{ fontSize: 38, color: '#B08B5E', position: 'absolute', top: 18, left: 24, opacity: 0.18 }}>&ldquo;</span>
          <p style={{ color: '#fff', fontSize: 17, fontStyle: 'italic', marginBottom: 18, marginTop: 0, textAlign: 'center', fontWeight: 500, lineHeight: 1.6, textShadow: '0 2px 8pxrgba(255, 255, 255, 0.33)' }}>
            {t.text}
          </p>
          <div style={{ color: '#B08B5E', fontWeight: 700, fontSize: 15, letterSpacing: 0.5, marginBottom: 2, textShadow: '0 1px 4px #fff8' }}>{t.name}</div>
          <div style={{ color: '#e7dacb', fontWeight: 500, fontSize: 13, letterSpacing: 0.2 }}>{t.location}</div>
        </div>
      ))}
    </div>
  );
}
