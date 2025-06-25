import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const mockTestimonials = [
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

export default function TestimoniosSection() {
	const { t } = useTranslation();
	return (
		<section
			style={{
				width: '100vw',
				margin: '0 calc(50% - 50vw)',
				background: 'linear-gradient(120deg, #1a1410 0%, #3a2a1a 100%)',
				backgroundImage: `linear-gradient(120deg, #1a1410 0%, #3a2a1a 100%), url('/bg-texture.png')`,
				backgroundBlendMode: 'overlay',
				backgroundSize: 'cover',
				padding: '4.2rem 0 3.2rem 0',
				marginTop: 36,
				boxShadow: '0 8px 36px 0 rgba(176,139,94,0.10)',
			}}
		>
			<div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
				<h2
					style={{
						fontSize: '2.1rem',
						fontWeight: 900,
						color: '#F6E7C1',
						marginBottom: 44,
						textAlign: 'center',
						letterSpacing: 1.3,
						textShadow: '0 2px 24px rgba(176,139,94,0.18)',
					}}
				>
					{t('testimonials.title')}
				</h2>
				<Swiper
					modules={[Autoplay]}
					spaceBetween={36}
					slidesPerView={1}
					speed={14000}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
						reverseDirection: false,
						pauseOnMouseEnter: true,
					}}
					loop
					allowTouchMove={false}
					style={{ maxWidth: 1200, margin: '0 auto', paddingBottom: 36 }}
					breakpoints={{
						500: { slidesPerView: 2 },
						900: { slidesPerView: 4 },
					}}
				>
					{mockTestimonials.map((tst, i) => (
						<SwiperSlide key={i}>
							<blockquote
								style={{
									background: 'rgba(255,245,225,0.82)',
									backdropFilter: 'blur(6px)',
									borderRadius: 26,
									boxShadow: '0 8px 32px 0 rgba(224,201,160,0.18), 0 0 0 2.5px #E2C9A0',
									padding: '2rem 1.5rem',
									fontStyle: 'italic',
									color: '#7C5A3A',
									minHeight: 150,
									height: 150,
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									textAlign: 'center',
									maxWidth: 320,
									margin: '0 auto',
									boxSizing: 'border-box',
									transition: 'box-shadow 0.25s',
								}}
								className="testimonial-card-premium"
							>
								<span
									style={{
										fontSize: 17,
										lineHeight: 1.7,
										marginBottom: 16,
										color: '#59493B',
										textShadow: '0 2px 8px rgba(246,231,193,0.10)',
									}}
								>
									&ldquo;{tst.text}&rdquo;
								</span>
								<footer
									style={{
										marginTop: 6,
										fontWeight: 800,
										color: '#B08B5E',
										fontSize: 15,
										letterSpacing: 0.8,
										textShadow: '0 2px 8px rgba(176,139,94,0.10)',
									}}
								>
									{tst.name}{' '}
									<span
										style={{
											color: '#59493B',
											fontWeight: 500,
											fontSize: 13,
											marginLeft: 2,
											textShadow: '0 2px 8px rgba(176,139,94,0.10)',
										}}
									>
										• {tst.location}
									</span>
								</footer>
							</blockquote>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<style>{`
			@media (max-width: 900px) {
				h2 { font-size: 1.18rem !important; }
			}
			@media (max-width: 700px) {
				section {
					padding: 2.2rem 0 1.2rem 0 !important;
				}
				.testimonial-card-premium {
					padding: 1.1rem 0.7rem !important;
					font-size: 0.98rem !important;
					min-height: 110px !important;
					height: 110px !important;
					border-radius: 16px !important;
					background: rgba(255,245,225,0.93) !important;
				}
			}
			`}</style>
		</section>
	);
}
