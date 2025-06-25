import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';
import SeoHelmet from '../components/SeoHelmet';

const mockProperties = [
	{
		id: '1',
		images: [
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80',
		],
		title: 'Casa Campestre El Retiro',
		location: 'El Retiro, Antioquia',
		price: '$3.200.000.000 COP',
		tag: 'Exclusiva',
		description:
			'Casa campestre de lujo con amplias zonas verdes, piscina y acabados premium.',
		features: [
			'4 habitaciones',
			'5 baños',
			'Piscina privada',
			'Parqueadero para 4 autos',
			'Lote de 2.500 m²',
		],
		coords: [6.057, -75.441],
		whatsapp: '573001234567',
	},
	{
		id: '2',
		images: [
			'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
		],
		title: 'Penthouse Poblado',
		location: 'El Poblado, Medellín',
		price: '$2.800.000.000 COP',
		tag: 'Nueva',
		description:
			'Penthouse con vista panorámica, terraza y acabados de lujo.',
		features: [
			'3 habitaciones',
			'4 baños',
			'Terraza privada',
			'2 parqueaderos',
			'Área 320 m²',
		],
		coords: [6.208, -75.565],
		whatsapp: '573001234567',
	},
	{
		id: '3',
		images: [
			'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
		],
		title: 'Apartamento Provenza',
		location: 'Provenza, Medellín',
		price: '$1.950.000.000 COP',
		tag: 'Premium',
		description:
			'Apartamento moderno en la mejor zona de Provenza, cerca de restaurantes y vida nocturna.',
		features: [
			'2 habitaciones',
			'3 baños',
			'Balcón con vista',
			'1 parqueadero',
			'Área 140 m²',
		],
		coords: [6.209, -75.567],
		whatsapp: '573001234567',
	},
];

export default function DetallePropiedad() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();
	const property = mockProperties.find((p) => p.id === id);

	if (!property)
		return (
			<div style={{ padding: 32 }}>
				{ i18n.language === 'en' ? 'Property not found.' : 'Propiedad no encontrada.' }
			</div>
		);

	return (
		<>
			<SeoHelmet title={property.title} description={property.description} />
			<section
				style={{
					maxWidth: 1100,
					margin: '0 auto',
					padding: '2rem 1rem 2rem 1rem',
				}}
			>
				<button
					onClick={() => navigate(-1)}
					style={{
						background: 'none',
						border: 'none',
						color: '#0a6d5a',
						fontWeight: 600,
						fontSize: 15,
						marginBottom: 18,
						cursor: 'pointer',
					}}
				>
					{ i18n.language === 'en' ? '← Back' : '← Volver' }
				</button>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 32,
					}}
				>
					{/* Galería de imágenes */}
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: 18,
							flexWrap: 'wrap',
							justifyContent: 'center',
						}}
					>
						{property.images.map((img, idx) => (
							<img
								key={idx}
								src={img}
								alt={property.title}
								style={{
									width: 320,
									height: 210,
									objectFit: 'cover',
									borderRadius: 14,
								}}
							/>
						))}
					</div>
					{/* Info principal */}
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 10,
						}}
					>
						<h1
							style={{
								fontSize: 28,
								fontWeight: 700,
								color: '#1a1a1a',
								margin: 0,
							}}
						>
							{property.title}
						</h1>
						<div
							style={{
								color: '#0a6d5a',
								fontWeight: 500,
								fontSize: 17,
							}}
						>
							{property.location}
						</div>
						<div
							style={{
								fontWeight: 600,
								fontSize: 20,
								color: '#222',
							}}
						>
							{property.price}
						</div>
						<span
							style={{
								background: '#0a6d5a',
								color: '#fff',
								fontSize: 13,
								fontWeight: 600,
								borderRadius: 12,
								padding: '4px 14px',
								display: 'inline-block',
								marginTop: 6,
							}}
						>
							{property.tag}
						</span>
					</div>
					{/* Descripción y ficha técnica */}
					<div
						style={{
							background: '#f5f6f8',
							borderRadius: 14,
							padding: 18,
						}}
					>
						<h2
							style={{
								fontSize: 18,
								fontWeight: 600,
								marginBottom: 8,
							}}
						>
							{ i18n.language === 'en' ? 'Description' : 'Descripción' }
						</h2>
						<p
							style={{
								color: '#444',
								marginBottom: 12,
							}}
						>
							{property.description}
						</p>
						<h3
							style={{
								fontSize: 16,
								fontWeight: 600,
								marginBottom: 6,
							}}
						>
							{ i18n.language === 'en' ? 'Features' : 'Ficha técnica' }
						</h3>
						<ul
							style={{
								color: '#555',
								fontSize: 15,
								margin: 0,
								paddingLeft: 18,
							}}
						>
							{property.features.map((f, i) => (
								<li key={i}>{f}</li>
							))}
						</ul>
					</div>
					{/* Mapa */}
					<div
						style={{
							width: '100%',
							height: 320,
							borderRadius: 14,
							overflow: 'hidden',
						}}
					>
						<MapContainer
							center={property.coords}
							zoom={14}
							style={{ width: '100%', height: '100%' }}
							scrollWheelZoom={false}
						>
							<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
							<Marker position={property.coords} />
						</MapContainer>
					</div>
					{/* Botón WhatsApp */}
					<a
						href={`https://wa.me/${property.whatsapp}?text=${encodeURIComponent(
							i18n.language === 'en'
								? `Hello, I want more information about the property ${property.title}`
								: `Hola, quiero más información sobre la propiedad ${property.title}`
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: 8,
							background: '#25D366',
							color: '#fff',
							padding: '0.8rem 2.2rem',
							borderRadius: 32,
							fontWeight: 600,
							fontSize: 17,
							letterSpacing: 1,
							textDecoration: 'none',
							boxShadow: '0 2px 8px 0 rgba(10,109,90,0.08)',
							transition: 'background 0.2s',
							marginTop: 12,
							width: 'fit-content',
						}}
					>
						<FaWhatsapp style={{ fontSize: 22 }} /> { i18n.language === 'en' ? 'Contact via WhatsApp' : 'Consultar por WhatsApp' }
					</a>
				</div>
			</section>
		</>
	);
}
