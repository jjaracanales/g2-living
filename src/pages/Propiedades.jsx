import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SeoHelmet from '../components/SeoHelmet';

const mockProperties = [
	{
		id: 1,
		image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&w=800&q=80',
		title: 'Casa Campestre El Retiro',
		location: 'El Retiro, Antioquia',
		price: '$3.200.000.000 COP',
		tag: 'Exclusiva',
		type: 'Casa',
		value: 3200000000,
	},
	{
		id: 2,
		image: 'https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg?auto=compress&w=800&q=80',
		title: 'Penthouse Poblado',
		location: 'El Poblado, Medellín',
		price: '$2.800.000.000 COP',
		tag: 'Nueva',
		type: 'Apartamento',
		value: 2800000000,
	},
	{
		id: 3,
		image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&w=800&q=80',
		title: 'Apartamento Provenza',
		location: 'Provenza, Medellín',
		price: '$1.950.000.000 COP',
		tag: 'Premium',
		type: 'Apartamento',
		value: 1950000000,
	},
	{
		id: 4,
		image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&w=800&q=80',
		title: 'Casa Moderna Envigado',
		location: 'Envigado, Antioquia',
		price: '$2.500.000.000 COP',
		tag: 'Exclusiva',
		type: 'Casa',
		value: 2500000000,
	},
	{
		id: 5,
		image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&w=800&q=80',
		title: 'Villa de Lujo Llanogrande',
		location: 'Llanogrande, Rionegro',
		price: '$4.100.000.000 COP',
		tag: 'Premium',
		type: 'Casa',
		value: 4100000000,
	},
	{
		id: 6,
		image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=800&q=80',
		title: 'Casa Laureles',
		location: 'Laureles, Medellín',
		price: '$2.200.000.000 COP',
		tag: 'Nueva',
		type: 'Casa',
		value: 2200000000,
	},
	{
		id: 7,
		image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&w=800&q=80',
		title: 'Casa Familiar Sabaneta',
		location: 'Sabaneta, Antioquia',
		price: '$1.600.000.000 COP',
		tag: 'Oportunidad',
		type: 'Casa',
		value: 1600000000,
	},
	{
		id: 8,
		image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&w=800&q=80',
		title: 'Apartamento Vista Palmas',
		location: 'Las Palmas, Medellín',
		price: '$1.850.000.000 COP',
		tag: 'Premium',
		type: 'Apartamento',
		value: 1850000000,
	},
	{
		id: 9,
		image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&w=800&q=80',
		title: 'Casa de Lujo El Tesoro',
		location: 'El Tesoro, Medellín',
		price: '$3.800.000.000 COP',
		tag: 'Exclusiva',
		type: 'Casa',
		value: 3800000000,
	},
];

const propertyTypes = ['Todos', 'Casa', 'Apartamento'];
const locations = ['Todas', ...Array.from(new Set(mockProperties.map((p) => p.location)))];
const minValue = Math.min(...mockProperties.map((p) => p.value));
const maxValue = Math.max(...mockProperties.map((p) => p.value));

export default function Propiedades() {
	const { t, i18n } = useTranslation();
	const [type, setType] = useState('Todos');
	const [location, setLocation] = useState('Todas');
	const [valueRange, setValueRange] = useState([minValue, maxValue]);
	const navigate = useNavigate();

	const handleRangeChange = (e) => {
		const [min, max] = e.target.value.split(',').map(Number);
		setValueRange([min, max]);
	};

	const filtered = mockProperties.filter(
		(p) =>
			(type === 'Todos' || p.type === type) &&
			(location === 'Todas' || p.location === location) &&
			p.value >= valueRange[0] &&
			p.value <= valueRange[1]
	);

	return (
		<>
			<SeoHelmet title={t('navbar.properties')} description={t('hero.subtitle')} />
			{/* Hero visual premium */}
			<div
				style={{
					width: '100vw',
					margin: '0 calc(50% - 50vw)',
					minHeight: '60vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/hero2.jpg')`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					padding: '3rem 0 2rem 0',
					textAlign: 'center',
				}}
			>
				<h1
					style={{
						fontSize: '2.1rem',
						fontWeight: 700,
						color: '#fff',
						marginBottom: 10,
						letterSpacing: 1,
						textShadow: '0 2px 12px #7C5A3A',
					}}
				>
					{t('navbar.properties')}
				</h1>
				<p
					style={{
						fontSize: '1.1rem',
						color: '#fff',
						maxWidth: 480,
						margin: '0 auto',
						textShadow: '0 2px 8px #7C5A3A',
					}}
				>
					{t(
						'Encuentra propiedades exclusivas en Medellín y Oriente Antioqueño. Filtra por tipo, ubicación y valor para descubrir tu próxima inversión premium.'
					)}
				</p>
			</div>
			<section
				style={{
					width: '100vw',
					margin: '0 calc(50% - 50vw)',
					minHeight: '100vh',
					background: '#f5f6f8',
					padding: 0,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				{/* Filtros premium */}
				<div
					style={{
						width: '100vw',
						margin: '0 calc(50% - 50vw)',
						minHeight: 220,
						background: 'linear-gradient(120deg, #f7f3ee 60%, #e7dacb 100%)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '2.5rem 0 2rem 0',
						marginBottom: 0,
					}}
				>
					<div
						style={{
							width: '100%',
							maxWidth: 950,
							background: 'rgba(255,255,255,0.97)',
							borderRadius: 28,
							boxShadow: '0 2px 16px 0 rgba(176,139,94,0.10)',
							padding: '2.2rem 2rem',
							display: 'flex',
							flexWrap: 'wrap',
							gap: 32,
							alignItems: 'center',
							justifyContent: 'center',
							border: '2px solid #B08B5E',
						}}
					>
						{/* Tipo */}
						<div style={{ minWidth: 180 }}>
							<label
								style={{
									color: '#7C5A3A',
									fontWeight: 700,
									fontSize: 15,
									marginBottom: 8,
									display: 'block',
									letterSpacing: 0.5,
								}}
							>
								Tipo
							</label>
							<select
								value={type}
								onChange={(e) => setType(e.target.value)}
								style={{
									width: '100%',
									padding: '0.7rem 1.2rem',
									borderRadius: 18,
									border: '1.5px solid #B08B5E',
									background: '#f7f3ee',
									color: '#7C5A3A',
									fontWeight: 600,
									fontSize: 16,
									boxShadow: '0 2px 8px 0 rgba(176,139,94,0.08)',
									outline: 'none',
									cursor: 'pointer',
									transition: 'border 0.18s',
								}}
							>
								{propertyTypes.map((tpe) => (
									<option key={tpe} value={tpe}>
										{i18n.language === 'en'
											? tpe === 'Todos'
												? 'All'
												: tpe === 'Casa'
												? 'House'
												: 'Apartment'
											: tpe}
									</option>
								))}
							</select>
						</div>
						{/* Ubicación */}
						<div style={{ minWidth: 220 }}>
							<label
								style={{
									color: '#7C5A3A',
									fontWeight: 700,
									fontSize: 15,
									marginBottom: 8,
									display: 'block',
									letterSpacing: 0.5,
								}}
							>
								Ubicación
							</label>
							<select
								value={location}
								onChange={(e) => setLocation(e.target.value)}
								style={{
									width: '100%',
									padding: '0.7rem 1.2rem',
									borderRadius: 18,
									border: '1.5px solid #B08B5E',
									background: '#f7f3ee',
									color: '#7C5A3A',
									fontWeight: 600,
									fontSize: 16,
									boxShadow: '0 2px 8px 0 rgba(176,139,94,0.08)',
									outline: 'none',
									cursor: 'pointer',
									transition: 'border 0.18s',
								}}
							>
								{locations.map((loc) => (
									<option key={loc} value={loc}>
										{loc}
									</option>
								))}
							</select>
						</div>
						{/* Rango de valores */}
						<div style={{ minWidth: 220, flex: 1 }}>
							<label
								style={{
									color: '#7C5A3A',
									fontWeight: 700,
									fontSize: 15,
									marginBottom: 8,
									display: 'block',
									letterSpacing: 0.5,
								}}
							>
								Valor (COP)
							</label>
							<div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
								<input
									type="range"
									min={minValue}
									max={maxValue}
									value={valueRange[0]}
									onChange={(e) => setValueRange([Number(e.target.value), valueRange[1]])}
									style={{
										width: '48%',
										accentColor: '#B08B5E',
										background: '#f7f3ee',
										borderRadius: 8,
									}}
								/>
								<input
									type="range"
									min={minValue}
									max={maxValue}
									value={valueRange[1]}
									onChange={(e) => setValueRange([valueRange[0], Number(e.target.value)])}
									style={{
										width: '48%',
										accentColor: '#B08B5E',
										background: '#f7f3ee',
										borderRadius: 8,
									}}
								/>
							</div>
							<div
								style={{
									color: '#B08B5E',
									fontWeight: 600,
									fontSize: 15,
									marginTop: 8,
									letterSpacing: 0.5,
								}}
							>
								${valueRange[0].toLocaleString()} - ${valueRange[1].toLocaleString()}
							</div>
						</div>
					</div>
				</div>
				{/* Listado de propiedades */}
				<div
					style={{
						width: '100vw',
						margin: '0 calc(50% - 50vw)',
						maxWidth: '100vw',
						padding: '2.5rem 0 1.5rem 0',
					}}
				>
					<h2
						style={{
							fontSize: '1.5rem',
							fontWeight: 600,
							color: '#1a1a1a',
							marginBottom: 18,
							maxWidth: 1200,
							marginLeft: 'auto',
							marginRight: 'auto',
							paddingLeft: 18,
							paddingRight: 18,
						}}
					>
						{t('featured.title')}
					</h2>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
							gap: 24,
							alignItems: 'stretch',
							maxWidth: 1200,
							margin: '0 auto',
							width: '100%',
							padding: '0 1.2rem',
						}}
					>
						{filtered.length === 0 ? (
							<div
								style={{
									color: '#888',
									fontSize: 17,
									padding: 32,
									gridColumn: '1/-1',
								}}
							>
								{i18n.language === 'en'
									? 'No properties for this filter.'
									: 'No hay propiedades para este filtro.'}
							</div>
						) : (
							filtered.map((prop) => (
								<PropertyCard
									key={prop.id}
									image={prop.image}
									title={prop.title}
									location={prop.location}
									price={prop.price}
									tag={prop.tag}
									onShowDetails={() => navigate(`/propiedades/${prop.id}`)}
								/>
							))
						)}
					</div>
				</div>
			</section>
		</>
	);
}
