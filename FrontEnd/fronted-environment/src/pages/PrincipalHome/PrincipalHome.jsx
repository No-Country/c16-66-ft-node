import { Header } from "../../components/principalHome/Header";
import { CardBenefit } from "../../components/principalHome/CardBenefit";
import { CardStars } from "../../components/principalHome/CardStars";
import searchBlue from "../../assets/svg/searchBlue.svg";
import archive from "../../assets/svg/archive.svg";
import calendary from "../../assets/svg/calendar.svg";
import imgDr1 from "../../assets/svg/Imgdr1.png";
import imgDr2 from "../../assets/svg/Imgdr2.png";
import imgDr3 from "../../assets/svg/Imgdr3.png";
import imgDr4 from "../../assets/svg/Imgdr4.png";
import { Footer } from "../../components/principalHome/Footer";
import {
	CarouselHome,
	Slide,
} from "../../components/principalHome/CarouselHome";
import "./index.css";
import { ReviewStore } from "../../StoreGeneral/ReviewsStore"; // Zustand store

export default function PrincipalHome() {
	const { reviews } = ReviewStore();
	console.log("Revies en db desde principal home: ", reviews);

	document.addEventListener("DOMContentLoaded", function () {
		// Acceder al carrusel una vez que el DOM haya sido completamente cargado
		const carouselHome = document.getElementById("carouselHome");
		if (carouselHome !== null) {
			carouselHome.style.display = "block";
			// Tu código para trabajar con el carrusel
			console.log(carouselHome, "aca");
		} else {
			console.error(
				'El elemento con ID "carouselHome" no fue encontrado en el DOM.'
			);
		}
	});

	return (
		<div className='w-screen h-screen overflow-y-scroll'>
			<Header />
			<main className='h-fit w-full mx-auto mt-4 xl:mt-8 xl:py-6 xl:px-10'>
				<section className='w-full px-6 mx-auto h-fit p-2'>
					<h2 className='font-bold text-base lg:text-lg xl:text-xl text-black'>
						¿Con qué tipo de especialistas contamos?
					</h2>
					<br />
					<p className='text-base lg:text-lg xl:text-xl mt-1 xl:mt-4'>
						En MedConnect contamos con atención en más de 30 especialidades y
						más de mil médicos estaán a tu servicio como: psicologos,
						dermatólogos, oftalmólogos, urólogos, ortopedistas, pediatras,
						psiquiatras y muchos más.{" "}
					</p>
				</section>
				<section className='mt-4 h-fit xl:mt-8 p-2'>
					<h2 className='font-bold text-base lg:text-lg xl:text-xl text-black pl-6'>
						Beneficios que ofrecemos
					</h2>
					<div className='mt-2 xl:mt-8 w-11/12 p-2 mx-auto flex overflow-x-scroll rounded-md md:w-5/6 lg:border-none lg:pt-0 lg:justify-around h-1/3 lg:w-full lg:h-2/5 xl:h-1/2 lg:overflow-visible xl:justify-evenly'>
						<CardBenefit
							title={"¿Buscas un especialista?"}
							icon={searchBlue}
							text={
								"Contamos con miles de médicos especializados, seguro encontraremos uno que te pueda ayudar. Contactanos."
							}
						/>
						<CardBenefit
							title={"¿Quieres una cita?"}
							icon={calendary}
							text={
								"Nos acoplamos a tus tiempos, escoge el médico que quieras que te atienda dependiendo de la hora y el día que lo necesites."
							}
						/>
						<CardBenefit
							title={" Seguimiento médico"}
							icon={archive}
							text={
								"Gracias al acceso a tu historial médico, nuestros especialistas darán seguimiento a tu estado de salud de manera personalizada."
							}
						/>
					</div>
				</section>
				<section className='mt-4 xl:mt-8 h-fit'>
					<h2 className='font-bold text-base lg:text-lg xl:text-xl text-black pl-6 mt-2'>
						Consulta las reseñas de nuestros clientes
					</h2>
					<p className='text-justify mt-1 xl:mt-4 px-6 text-base lg:text-lg xl:text-xl mb-8'>
						Luego de tener una cita con los especialistas de la salud, los
						usuarios escriben una reseña sobre la atención brindada. Esto brinda
						mayor seguridad y confianza para futuras consultas. La mayoría de
						nuestros especialistas tienen calificaciones promedio de 4.7
						estrellas.
					</p>
					{/* <div className='mx-auto w-10/12 h-fit mt-4 xl:mt-8 flex justify-center flex-wrap lg:flex-nowrap lg:max-w-10/12 xl:max-w-10/12 lg:overflow-x-auto lg:w-11/12 lg:place-content-start xl:w-10/12 xl:flex-nowrap xl:overflow-x-auto'>

                        <CardStars img={imgDr1} nameDr={'Alejandro Samano Orduña'} doctorType={'Médico pediátra'} stars={5} text1={'Te explica con claridad y te genera mucha confianza, muy atento a todos los comentarios que le brindas.'} name1={'Camila García'} text2={'Muy amena la consulta, fue una ventaja tener acceso a mi historial médico porque de esa manera pudo asesorarme mejor.'} name2={'Fely Carnalla'}/>
                        
                        <CardStars img={imgDr2} nameDr={'María Constansa Betancourt '} doctorType={'Médico dermatólogo'} stars={4} text1={'Presenté problemas de la piel y la doctora me ayudó mucho para modificar mi dieta y atender mi problema.'} name1={'Salvador García'} text2={'La consulta fue muy económica, la doctora me ayudó a buscar alternativas sobre medicamentos más baratos y muy eficaces.'} name2={'José Antonio García'}/>

                        <CardStars img={imgDr3} nameDr={'Ricardo Robles Gálvez'} doctorType={'Médico pediatra'} stars={4} text1={'Mi hijo necesitaba revisiones médicas constantes, el doctor Ricardo nos ayudó a atender sus enfermedades de manera atenta.'} name1={'Carmina Flores'} text2={'La atendión del doctor hacia mi hijo ha sido muy profesional, afortunadamente su enfermedad ha sido tratada con éxito.'} name2={'Mario Spencill'}/>

                        <CardStars img={imgDr4} nameDr={'Amanda Ortega'} doctorType={'Médico cardiólogo'} stars={5} text1={'Llevé a mi mamá a una consulta he hizo una amplia exploración para poder atender antecedentes médicos, le brindó un excelente tratamiento y hoy mi mamá tiene mejor salud.'} name1={'Nahuél Lozano'} text2={'Se tomó el tiempo necesario para poder atenderme, priorizando mis enfermedades hereditarias, actualmente mi tratamiento ha mejorado.'} name2={'Mario Salcedo'}/>
                    </div> */}

					{window.location.pathname === "/" && (
						<CarouselHome
							style={{ display: "none" }}
							id='carouselHome'
							controles={true}
							autoplay={true}
							velocity='3000'
							interval='5000'
						>
							<Slide>
								<CardStars
									img={imgDr1}
									nameDr={"Alejandro Samano Orduña"}
									doctorType={"Médico pediátra"}
									stars={5}
									text1={
										"Te explica con claridad y te genera mucha confianza, muy atento a todos los comentarios que le brindas."
									}
									name1={"Camila García"}
									text2={
										"Muy amena la consulta, fue una ventaja tener acceso a mi historial médico porque de esa manera pudo asesorarme mejor."
									}
									name2={"Fely Carnalla"}
								/>
							</Slide>
							<Slide>
								<CardStars
									img={imgDr2}
									nameDr={"María Constansa Betancourt "}
									doctorType={"Médico dermatólogo"}
									stars={4}
									text1={
										"Presenté problemas de la piel y la doctora me ayudó mucho para modificar mi dieta y atender mi problema."
									}
									name1={"Salvador García"}
									text2={
										"La consulta fue muy económica, la doctora me ayudó a buscar alternativas sobre medicamentos más baratos y muy eficaces."
									}
									name2={"José Antonio García"}
								/>
							</Slide>
							<Slide>
								<CardStars
									img={imgDr3}
									nameDr={"Ricardo Robles Gálvez"}
									doctorType={"Médico pediatra"}
									stars={4}
									text1={
										"Mi hijo necesitaba revisiones médicas constantes, el doctor Ricardo nos ayudó a atender sus enfermedades de manera atenta."
									}
									name1={"Carmina Flores"}
									text2={
										"La atendión del doctor hacia mi hijo ha sido muy profesional, afortunadamente su enfermedad ha sido tratada con éxito."
									}
									name2={"Mario Spencill"}
								/>
							</Slide>
							<Slide>
								<CardStars
									img={imgDr4}
									nameDr={"Amanda Ortega"}
									doctorType={"Médico cardiólogo"}
									stars={5}
									text1={
										"Llevé a mi mamá a una consulta he hizo una amplia exploración para poder atender antecedentes médicos, le brindó un excelente tratamiento y hoy mi mamá tiene mejor salud."
									}
									name1={"Nahuél Lozano"}
									text2={
										"Se tomó el tiempo necesario para poder atenderme, priorizando mis enfermedades hereditarias, actualmente mi tratamiento ha mejorado."
									}
									name2={"Mario Salcedo"}
								/>
							</Slide>
						</CarouselHome>
					)}
					<br className='mt-6' />
				</section>
			</main>
			<Footer />
		</div>
	);
}
