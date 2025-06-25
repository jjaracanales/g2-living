import TestimoniosHero from '../components/TestimoniosHero';

export default function Testimonios() {
  return (
    <div
      style={{
        width: '100vw',
        margin: '0 calc(50% - 50vw)',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(45,35,32,0.55), rgba(176,139,94,0.18)), url('/hero5.webp')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '3.5rem 0 2.5rem 0',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2.2rem',
          fontWeight: 800,
          color: '#fff',
          marginBottom: 14,
          letterSpacing: 1,
          textShadow: '0 2px 12px #7C5A3A',
        }}
      >
        Testimonios
      </h1>
      <p
        style={{
          fontSize: '1.15rem',
          color: '#fff',
          maxWidth: 540,
          margin: '0 auto 32px auto',
          textShadow: '0 2px 8px #7C5A3A',
          fontWeight: 400,
        }}
      >
        Descubre la experiencia de nuestros clientes en G2 Living. Servicio premium, atención personalizada y resultados de lujo.
      </p>
      <TestimoniosHero />
    </div>
  );
}
