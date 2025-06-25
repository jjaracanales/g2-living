import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function SeoHelmet({ title, description }) {
  const { i18n } = useTranslation();
  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{title ? `${title} | G2 Living` : 'G2 Living'}</title>
      <meta name="description" content={description || 'Casas campestres y apartamentos premium en Medellín y Oriente Antioqueño. Inmobiliaria boutique para clientes exclusivos.'} />
      <meta property="og:title" content={title ? `${title} | G2 Living` : 'G2 Living'} />
      <meta property="og:description" content={description || 'Casas campestres y apartamentos premium en Medellín y Oriente Antioqueño. Inmobiliaria boutique para clientes exclusivos.'} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={i18n.language === 'en' ? 'en_US' : 'es_CO'} />
    </Helmet>
  );
}
