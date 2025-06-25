import React from 'react';
import { motion } from 'framer-motion';

export default function PropertyCard({ image, title, location, price, tag, onShowDetails, horizontal }) {
  if (horizontal) {
    // Card horizontal tipo banner
    return (
      <motion.div
        whileHover={{
          scale: 1.015,
          boxShadow: '0 8px 32px 0 rgba(166,131,101,0.18)',
          borderColor: '#A68365',
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        style={{
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.06)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          minWidth: 0,
          width: '100%',
          minHeight: 260,
          border: '2px solid transparent',
          cursor: 'pointer',
          alignItems: 'stretch',
        }}
      >
        <div style={{ width: 380, minWidth: 220, height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', background: '#eee' }}>
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: '2rem 2.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: 10 }}>
            <h3 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: '#1a1a1a', marginBottom: 8 }}>{title}</h3>
            <div style={{ color: 'var(--color-secondary)', fontWeight: 500, fontSize: 17, marginBottom: 10 }}>{location}</div>
            {tag && (
              <span style={{
                background: 'var(--color-secondary)',
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 12,
                padding: '4px 16px',
                letterSpacing: 1,
                boxShadow: '0 2px 8px 0 rgba(79,64,52,0.08)',
                marginRight: 10,
              }}>{tag}</span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 8 }}>
            <span
              style={{ fontWeight: 700, fontSize: 22, color: '#222', cursor: 'pointer' }}
              onClick={onShowDetails}
              title="Ver detalles de la propiedad"
            >
              {price}
            </span>
            <button
              onClick={onShowDetails}
              style={{
                background: 'var(--color-secondary)',
                color: '#fff',
                border: 'none',
                borderRadius: 24,
                padding: '10px 32px',
                fontWeight: 700,
                fontSize: 17,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              Ver detalle
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Card vertical (default)
  return (
    <motion.div
      whileHover={{
        scale: 1.045,
        boxShadow: '0 10px 36px 0 rgba(166,131,101,0.22)',
        borderColor: '#B08B5E',
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{
        background: '#222',
        borderRadius: 22,
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.06)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        maxWidth: 390,
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        border: '2.5px solid #B08B5E',
        cursor: 'pointer',
        transition: 'box-shadow 0.25s, border-color 0.25s',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: 220, overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.25s', }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(0, 0, 0, 0.10) 60%, rgba(3, 3, 3, 0.60) 100%)',
          zIndex: 1,
        }} />
        {tag && (
          <span style={{
            position: 'absolute',
            top: 16,
            left: 16,
            background: '#B08B5E',
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
            borderRadius: 14,
            padding: '5px 16px',
            letterSpacing: 1,
            boxShadow: '0 2px 8px 0 rgba(79, 64, 52, 0.98)',
            zIndex: 2,
          }}>{tag}</span>
        )}
      </div>
      <div style={{ padding: '1.5rem 1.3rem 1.1rem 1.3rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'transparent', zIndex: 2 }}>
        <div>
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0, color: '#fff', marginBottom: 8, letterSpacing: 0.2 }}>{title}</h3>
          <div style={{ color: '#E2C9A0', fontWeight: 600, fontSize: 16, marginBottom: 10 }}>{location}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
          <span
            style={{ fontWeight: 700, fontSize: 18, color: '#fff', cursor: 'pointer', letterSpacing: 0.1 }}
            onClick={onShowDetails}
            title="Ver detalles de la propiedad"
          >
            {price}
          </span>
          <button
            onClick={onShowDetails}
            style={{
              background: '#B08B5E',
              color: '#fff',
              border: 'none',
              borderRadius: 26,
              padding: '9px 24px',
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              transition: 'background 0.2s',
              marginLeft: 10,
            }}
          >
            Ver detalle
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          div[style*='padding: 1.5rem'] {
            padding: 1.1rem 0.7rem 0.9rem 0.7rem !important;
          }
          h3 {
            font-size: 1.08rem !important;
          }
          span[title='Ver detalles de la propiedad'] {
            font-size: 1rem !important;
          }
          button {
            font-size: 0.98rem !important;
            padding: 8px 16px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
