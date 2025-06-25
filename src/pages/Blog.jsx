import React from 'react';
import { useTranslation } from 'react-i18next';
import SeoHelmet from '../components/SeoHelmet';

const mockPosts = [
	{
		id: 1,
		title: 'Tendencias de lujo inmobiliario en Medellín 2025',
		excerpt: 'Descubre las zonas y proyectos más exclusivos que están marcando el mercado premium en la ciudad.',
		date: '2025-06-10',
		image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
	},
	{
		id: 2,
		title: '¿Por qué invertir en casas campestres en el Oriente?',
		excerpt: 'Ventajas, plusvalía y calidad de vida en una de las regiones más cotizadas de Antioquia.',
		date: '2025-05-28',
		image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
	},
	{
		id: 3,
		title: 'Guía para compradores internacionales',
		excerpt: 'Recomendaciones legales y financieras para extranjeros que buscan propiedades premium en Colombia.',
		date: '2025-05-15',
		image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
	},
];

export default function Blog() {
	const { t, i18n } = useTranslation();
	return (
		<>
			<SeoHelmet
				title="Blog G2 Living"
				description={
					i18n.language === 'en'
						? 'Premium real estate blog: trends, tips and guides for exclusive properties in Medellín and Colombia.'
						: 'Blog inmobiliario premium: tendencias, tips y guías para propiedades exclusivas en Medellín y Colombia.'
				}
			/>
			{/* Hero visual premium estilo Home */}
			<div
				style={{
					width: '100vw',
					margin: '0 calc(50% - 50vw)',
					minHeight: '60vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/hero6.jpg')`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					padding: '3rem 0 2rem 0',
					textAlign: 'center',
				}}
			>
				<h1
					style={{
						fontSize: '2.2rem',
						fontWeight: 700,
						color: '#f2f2f2',
						marginBottom: 12,
						letterSpacing: 1,
					}}
				>
					Blog G2 Living
				</h1>
				<p
					style={{
						fontSize: '1.1rem',
						color: '#f2f2f2',
						maxWidth: 420,
						margin: '0 auto 1.5rem auto',
					}}
				>
					{i18n.language === 'en'
						? 'Trends, tips and guides for exclusive real estate in Medellín and Colombia.'
						: 'Tendencias, tips y guías para propiedades exclusivas en Medellín y Colombia.'}
				</p>
			</div>
			{/* Cards de blog premium */}
			<section
				style={{
					minHeight: '70vh',
					width: '100vw',
					margin: '0 calc(50% - 50vw)',
					background: 'linear-gradient(120deg, #f7f3ee 60%, #e7dacb 100%)',
					padding: '3.5rem 0 2.5rem 0',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 32,
						justifyContent: 'center',
						maxWidth: 1200,
						margin: '0 auto',
						width: '100%',
						padding: '0 1.2rem',
					}}
				>
					{mockPosts.map((post) => (
						<article
							key={post.id}
							style={{
								background: 'rgba(255,255,255,0.97)',
								borderRadius: 18,
								boxShadow: '0 2px 16px 0 rgba(124,90,58,0.08)',
								padding: '0 0 1.5rem 0',
								border: '2px solid #B08B5E',
								minWidth: 290,
								maxWidth: 340,
								flex: '1 1 320px',
								transition: 'transform 0.18s, box-shadow 0.18s',
								cursor: 'pointer',
								position: 'relative',
								overflow: 'hidden',
								display: 'flex',
								flexDirection: 'column',
							}}
							onMouseOver={(e) => {
								e.currentTarget.style.transform = 'translateY(-6px) scale(1.025)';
								e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(176,139,94,0.13)';
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.transform = 'none';
								e.currentTarget.style.boxShadow = '0 2px 16px 0 rgba(124,90,58,0.08)';
							}}
						>
							{post.image && (
								<img
									src={post.image}
									alt={post.title}
									style={{
										width: '100%',
										height: 170,
										objectFit: 'cover',
										borderTopLeftRadius: 16,
										borderTopRightRadius: 16,
										marginBottom: 0,
									}}
								/>
							)}
							<div
								style={{
									padding: '1.2rem 1.5rem 0 1.5rem',
									flex: 1,
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<div
									style={{
										color: '#B08B5E',
										fontWeight: 600,
										fontSize: 14,
										marginBottom: 6,
									}}
								>
									{new Date(post.date).toLocaleDateString(
										i18n.language === 'en' ? 'en-US' : 'es-CO',
										{ year: 'numeric', month: 'long', day: 'numeric' }
									)}
								</div>
								<h2
									style={{
										fontSize: 20,
										fontWeight: 700,
										margin: 0,
										color: '#7C5A3A',
										marginBottom: 8,
										letterSpacing: 0.5,
									}}
								>
									{i18n.language === 'en'
										? post.title
												.replace(
													'Tendencias de lujo inmobiliario en Medellín 2025',
													'Luxury Real Estate Trends in Medellín 2025'
												)
												.replace(
													'¿Por qué invertir en casas campestres en el Oriente?',
													'Why Invest in Country Houses in the East?'
												)
												.replace(
													'Guía para compradores internacionales',
													'Guide for International Buyers'
												)
										: post.title}
								</h2>
								<p
									style={{
										color: '#7C5A3A',
										fontSize: 16,
										marginBottom: 18,
									}}
								>
									{i18n.language === 'en'
										? post.excerpt
												.replace(
													'Descubre las zonas y proyectos más exclusivos que están marcando el mercado premium en la ciudad.',
													'Discover the most exclusive areas and projects setting the premium market in the city.'
												)
												.replace(
													'Ventajas, plusvalía y calidad de vida en una de las regiones más cotizadas de Antioquia.',
													'Advantages, appreciation, and quality of life in one of the most sought-after regions of Antioquia.'
												)
												.replace(
													'Recomendaciones legales y financieras para extranjeros que buscan propiedades premium en Colombia.',
													'Legal and financial recommendations for foreigners seeking premium properties in Colombia.'
												)
										: post.excerpt}
								</p>
								<a
									href="#"
									style={{
										color: '#B08B5E',
										fontWeight: 700,
										fontSize: 15,
										textDecoration: 'none',
										borderBottom: '1.5px solid #B08B5E',
										paddingBottom: 2,
										transition: 'color 0.15s',
									}}
									onMouseOver={(e) => (e.currentTarget.style.color = '#7C5A3A')}
									onMouseOut={(e) => (e.currentTarget.style.color = '#B08B5E')}
								>
									{i18n.language === 'en' ? 'Read more' : 'Leer más'}
								</a>
							</div>
							<div
								style={{
									position: 'absolute',
									right: 0,
									bottom: 0,
									width: 60,
									height: 60,
									background:
										'radial-gradient(circle at 80% 80%, #f7f3ee 60%, #e7dacb 100%)',
									opacity: 0.5,
									zIndex: 0,
									borderBottomRightRadius: 18,
								}}
							/>
						</article>
					))}
				</div>
			</section>
		</>
	);
}
