import { Link } from "react-router-dom";
import { UserStore } from "../../StoreGeneral/UsersStore";
import logo from "../../assets/FakeLOGO/Logo 3.png";
import instagram from "../../assets/svg/skill-icons_instagram.svg";
import redX from "../../assets/svg/simple-icons_x.svg";
import youtube from "../../assets/svg/mdi_youtube.svg";
import facebook from "../../assets/svg/logos_facebook.svg";
import linkedin from "../../assets/svg/devicon_linkedin.svg";
import arrowDown from "../../assets/svg/arrowDown.svg";
import suportIcon from "../../assets/svg/support_agent.svg";
// import { Modal, Box, Input } from "@mui/material";
import copyR from "../../assets/svg/ph_copyright-bold.svg";
import vector from "../../assets/svg/Vector.svg";
import RegisterButton from "./RegisterButton";
import Map from "./Map";
import "../../pages/PrincipalHome/index.css";
import { useState } from "react";
import ModalSuport from "./ModalSuport";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";

export function Footer() {
	const { userLogged } = UserStore();
	const { doctorLogged } = DoctorStore();
	const [suport, setSuport] = useState(false);

	const handleSuport = () => {
		setSuport(true);
	};

	return (
		<footer className='footer w-full h-fit'>
			<section className='h-fit  w-ful'>
				<div className='flex flex-col-reverse xl:flex-row xl:justify-around items-center h-fit xl:m-auto'>
					<section className='rounded-xl w-10/12 xl:w-3/12 h-auto p-1 flex-col'>
						<div className='mt-2 mx-auto bg-lightGreen rounded-xl items-center w-11/12 h-auto flex  flex-col'>
							{userLogged && userLogged.province ? (
								<h6 className='text-xs font-semibold'>
									Busque los centros de atención en{" "}
									{userLogged.province.toUpperCase()}
								</h6>
							) : (
								<h6 className='text-xs font-semibold'> Ubicación</h6>
							)}

							{doctorLogged && doctorLogged.province ? (
								<h6 className='text-xs font-semibold'>
									Centros de atención en {doctorLogged.province.toUpperCase()}
								</h6>
							) : (
								<></>
							)}

							<Map />
						</div>
					</section>
					<section className='flex flex-wrap md:-pt-0 pt-4 sm:pt-0 h-fit sm:flex-nowrap justify-between w-1/2 ml-12 sm:w-10/12 xl:w-6/12'>
						<div className='flex flex-col items-starts pb-4 w-fit sm:w-auto sm:pb-0'>
							<h4 className='text-xs mb-2 font-semibold'>Menú</h4>
							<hr className='text-black h-2 w-11/12' />

							<RegisterButton
								text={"Registrate"}
								arrowDown={arrowDown}
								className={`text-xs flex flex-wrap hover:text-darkBlue`}
								className2={`text-xs flex flex-col items-start mb-1`}
								btn={`hover:text-darkBlue`}
							/>

							<Link
								to='/autogestion'
								className='text-xs flex flex-wrap hover:text-darkBlue'
							>
								{" "}
								<img src={vector} className='w-2 pr-1' /> Iniciar sesión{" "}
							</Link>

							<Link
								to='/medical-list'
								className='text-xs flex flex-wrap hover:text-darkBlue'
							>
								{" "}
								<img src={vector} className='w-2 pr-1' /> Cartilla médica{" "}
							</Link>
							{/* <Link to='/' className='text-xs flex flex-wrap'>  <img src={vector} className='pr-1' /> Contacto </Link> */}
						</div>
						<div className='flex flex-col items-starts pb-4 sm:pb-0 w-fit'>
							<h4 className='text-xs mb-2 font-semibold'>Autogestión</h4>
							<hr className='text-black h-2 w-11/12' />
							<Link
								to='/login/pacient'
								className='text-xs flex flex-wrap hover:text-darkBlue'
							>
								{" "}
								<img src={vector} className='w-2 pr-1' /> Paciente{" "}
							</Link>
							<Link
								to='/login/doctor'
								className='text-xs flex flex-wrap hover:text-darkBlue'
							>
								{" "}
								<img src={vector} className='w-2 pr-1' /> Especialista médico{" "}
							</Link>
							<Link
								to='/login/admin'
								className='text-xs flex flex-wrap hover:text-darkBlue'
							>
								{" "}
								<img src={vector} className='w-2 pr-1' /> Administrador{" "}
							</Link>
						</div>
						<div className='flex flex-col items-starts pb-4 sm:pb-0 w-fit'>
							<h4 className='text-xs mb-2 font-semibold'>Información legal</h4>
							<hr className='text-black h-2 w-11/12' />
							<p className='text-xs flex flex-wrap hover:text-darkBlue'>
								{" "}
								<img src={vector} className='pr-1 w-2' /> Aviso legal
							</p>
							<p className='text-xs flex flex-wrap hover:text-darkBlue'>
								{" "}
								<img src={vector} className='pr-1 w-2' /> Políticas de
								privacidad
							</p>
							<p className='text-xs flex flex-wrap hover:text-darkBlue'>
								{" "}
								<img src={vector} className='pr-1 w-2' /> Términos y condiciones
							</p>
						</div>
					</section>
					<button
						onClick={handleSuport}
						id='sendMessageButton'
						className='self-end pb-1'
					>
						<img
							src={suportIcon}
							alt='Suport button'
							className='bg-white rounded-full p-2 h-9'
						/>
					</button>

					{suport && <ModalSuport suport={suport} setSuport={setSuport} />}
					{
						<div className='popup-container' id='popupContainer'>
							<div className='popup' id='popup'>
								<div className='popup-content'>
									<h2 className='text-base text-darkGreen font-semibold'>
										Enviando su comentario
									</h2>
									<div className='loader'></div>
									<p className='text-base text-gray'>
										Espere un momento y nos comunicaremos con usted...
									</p>
								</div>
							</div>
						</div>
					}
				</div>
			</section>
			<section className='footerFinal h-fit md:h-1/6 w-full flex flex-wrap sm:flex-nowrap justify-around items-center p-1'>
				<img
					src={logo}
					alt='logo MedConnect'
					className='w-20 sm:w-30 lg:w-1/12 h-auto'
				/>
				<p className='text-xs font-extralight flex justify-center items-center'>
					<img src={copyR} className='mr-1' /> 2024 creado por{" "}
					<strong className='mx-1'> MedConnet </strong> - información adicional{" "}
				</p>
				<div id='contacto' className='flex justify-center'>
					<Link to='https://github.com/No-Country/c16-66-ft-node'>
						<img src={instagram} className='h-auto w-1/2' />
					</Link>
					<Link to='https://github.com/No-Country/c16-66-ft-node'>
						<img src={redX} className='h-auto w-1/2' />
					</Link>
					<Link to='https://github.com/No-Country/c16-66-ft-node'>
						<img src={youtube} className='h-auto w-1/2' />
					</Link>
					<Link to='https://github.com/No-Country/c16-66-ft-node'>
						<img src={facebook} className='h-auto w-1/2' />
					</Link>
					<Link to='https://github.com/No-Country/c16-66-ft-node'>
						<img src={linkedin} className='h-auto w-1/2' />
					</Link>
				</div>
			</section>
		</footer>
	);
}
