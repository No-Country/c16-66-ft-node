import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Button } from "@mui/base";
import { Avatar } from "@mui/material";
import close from "../../assets/svg/close.svg";
import menu from "../../assets/svg/menu.svg";
import arrowBack from "../../assets/svg/arrow_back.png";
import group from "../../assets/svg/group.svg";
import person from "../../assets/svg/person.svg";
import calendar from "../../assets/svg/calendar.svg";
import clinicalNotes from "../../assets/svg/clinicalNotes.svg";
import duo from "../../assets/svg/duo.svg";
import book from "../../assets/svg/book.svg";
// import star from "../../assets/svg/star.svg";
import notification from "../../assets/svg/notification.svg";
import notificationUnread from "../../assets/svg/notificationUnread.svg";
import suportAgent from "../../assets/svg/suportAgent.svg";
import logOut from "../../assets/svg/logout.svg";
import { BoxIcon } from "./BoxIcon";
import "./index.css";

import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import { Modal, Box } from "@mui/material";
import ModalSuport from "../principalHome/ModalSuport";
import { Toaster, toast } from "sonner";
import { loggoutFromDb } from "../../Service";
export function AsideComponent() {
	const navigate = useNavigate();
	const { loggOutUser, userLogged } = UserStore();
	const { loggOutDoctor, doctorLogged } = DoctorStore();
	const [openClose, setOpenClose] = useState(false);
	const handleAsideOpenClose = () => {
		setOpenClose(!openClose);
	};
	const [modal, setModal] = useState(false);

	const logOutFuncion = () => {
		toast.success("Cerraste sesiòn");
		userLogged != null ? loggOutUser() : loggOutDoctor();
		loggoutFromDb(); //borra al que este logeado en la base de datos
		navigate("/");
	};

	const [suport, setSuport] = useState(false);

	const handleSuport = () => {
		setSuport(true);
	};

	// para que antes de 640px no se muestre el aside
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// funcion q maneja el cambio en el tamano de pantalla
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 640);
		};

		// listener para el evento resize
		window.addEventListener("resize", handleResize);

		// Llamar a handleResize una vez al inicio para establecer el estado inicial
		handleResize();

		// Remover el event listener cuando el componente se desmonte
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{isMobile ? (
				<aside
					style={{ maxHeight: "1024px" }}
					className={`absolute z-50 flex flex-col justify-evenly p-2 gap-2 ${
						openClose ? "w-38 h-screen asideBackground" : "w-16 h-16"
					}`}
				>
					<button
						className='w-fit h-fit mt-2 flex justify-between'
						onClick={handleAsideOpenClose}
					>
						{openClose ? (
							<img src={close} className='h-4 -mt-16 ml-36' />
						) : (
							<img src={menu} className='ml-2 mt-1 h-4' />
						)}
					</button>
					<Toaster richColors />
					<article
						className={`-mt-16 flex w-full ${
							openClose ? "justify-start gap-4" : "hidden"
						}`}
					>
						<figure
							className={`w-11 h-auto  rounded-full overflow-hidden ${openClose}`}
						>
							{doctorLogged && (
								<Avatar
									sx={{ width: 25, height: 25, margin:'auto' }}
									className='objet-cover object-center'
									src={doctorLogged.image}
								/>
							)}
							{userLogged && (
								<Avatar
									sx={{ width: 25, height: 25, margin:'auto' }}
									className='objet-cover object-center'
									src={userLogged.image}
								/>
							)}
						</figure>
						<div
							style={{ display: openClose ? "block" : "none" }}
							className=' textHiddenAside'
						>
							{doctorLogged && (
								<>
									<p className='font-medium text-sm'>{doctorLogged.name}</p>
									<p className='font-normal text-sm'>
										{doctorLogged.specialty}
									</p>
								</>
							)}
							{userLogged && (
								<p className='font-medium text-sm'>{userLogged.name}</p>
							)}
						</div>
					</article>
					<section className={`flex flex-col justify-center items-start h-fit`}>
						<article
							onClick={() => navigate("/home")}
							className={`flex cursor-pointer hover:bg-white p-2 rounded-xl mx-auto ${
								openClose ? "w-full justify-start gap-4" : "hidden"
							}`}
						>
							<img src={group} className='max-w-none' title='Home' />
							<p
								style={{ display: openClose ? "block" : "none" }}
								className='text-sm'
							>
								Home
							</p>
						</article>
						<div
							className={`${openClose ? "mx-inherit w-full" : "hidden"}`}
							onClick={() => navigate("/perfil")}
						>
							<BoxIcon openClose={openClose} text={"Mi perfil"} icon={person} />
						</div>
						<div
							className={`${openClose ? "mx-inherit w-full" : "hidden"}`}
							onClick={() => navigate("/my-agenda")}
						>
							<BoxIcon openClose={openClose} text={"Agenda"} icon={calendar} />
						</div>
						{userLogged && (
							<div
								className={`${openClose ? "mx-inherit w-full" : "hidden"}`}
								onClick={() => navigate("/my-list")}
							>
								<BoxIcon
									openClose={openClose}
									text={"Mis especialistas"}
									icon={clinicalNotes}
								/>
							</div>
						) 
						// : (
						// 	<div
						// 		className={`${openClose ? "mx-inherit w-full" : "hidden"}`}
						// 		onClick={() => navigate("/my-list")}
						// 	>
						// 		<BoxIcon
						// 			openClose={openClose}
						// 			text={"Mis pacientes"}
						// 			icon={clinicalNotes}
						// 		/>
						// 	</div>
						// )
						}
						<div
							className={`${openClose ? "mx-inherit w-full" : "hidden"}`}
							onClick={() => navigate("/video-llamada")}
						>
							<BoxIcon
								openClose={openClose}
								text={"Consulta virtual"}
								icon={duo}
							/>
						</div>

						{userLogged && (
							<div
								className={`${openClose ? "mx-inherit w-full" : "hidden"}`}
								onClick={() => navigate("/cartilla-medica")}
							>
								<BoxIcon
									openClose={openClose}
									text={"Cartilla médica"}
									icon={book}
								/>
							</div>
						)}
					</section>
					<br />
					<section
						className={`flex flex-col justify-center ${
							openClose ? "h-1/5" : "hidden"
						}`}
					>
						<div
							className={`flex hover:bg-white p-2 rounded-xl mx-auto ${
								openClose ? "w-full justify-start gap-4" : "hidden"
							}`}
						>
							{openClose ? (
								<img
									src={notification}
									className='max-w-none cursor-pointer'
									title='Notificaciones'
								/>
							) : (
								<>
									<img
										src={notificationUnread}
										className='max-w-none cursor-pointer'
										title='Notificaciones'
									/>
									<Badge className='w-0.5 h-0.5 bg-red p-1 rounded-md absolute badge' />
								</>
							)}
							<div
								className={`${
									openClose
										? "flex cursor-pointer w-2/3 items-center"
										: "hidden"
								}`}
							>
								<p className='text-sm cursor-pointer'> Notificaciones</p>
								<p className='text-white rounded-full ml-2 flex justify-center h-3 w-7 text-xs items-center bg-red'>
									3
								</p>
							</div>
						</div>
						<div
							className={`${openClose ? "mx-inherit w-full" : "hidden"}`}
							onClick={handleSuport}
						>
							<BoxIcon
								openClose={openClose}
								text={"Centro de ayuda"}
								icon={suportAgent}
							/>
						</div>

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
					</section>
					<div
							className={`${
								openClose
									? "mx-inherit w-full"
									: "hidden"
							}`}
							onClick={() => navigate("/")}
						>
							<div className={`flex cursor-pointer hover:bg-white p-2 rounded-xl mx-auto ${openClose ? 'w-full justify-start gap-4' : 'w-2/3 h-auto justify-center'}`}>
							<img src={arrowBack} className="max-w-none w-5" title={"Inicio"}/>
							<p style={{display: openClose ? 'block': 'none'}} className='text-sm'>{"Inicio"}</p>
							</div>
						</div>
					<div
						className={`${openClose ? "mx-inherit w-full -mb-8" : "hidden"}`}
						onClick={() => setModal(true)}
					>
						<BoxIcon
							openClose={openClose}
							text={"Cerrar sesión"}
							icon={logOut}
						/>
					</div>
					{modal && (
						<Modal
							open={modal === true}
							aria-labelledby='modal-modal-title'
							aria-describedby='modal-modal-description'
						>
							<Box
								sx={{
									position: "absolute",
									top: "50%",
									left: "50%",
									zIndex: "10",
									transform: "translate(-50%, -50%)",
									width: 400,
									bgcolor: "background.paper",
									border: "2px solid #000",
									boxShadow: 24,
									p: 4,
									borderRadius: "8px",
								}}
							>
								<div className='flex flex-col gap-4'>
									<h2 className='text-center font-semibold text-base text-black'>
										¿Deseas cerrar sesión?
									</h2>
									<div className='mt-5 flex justify-center'>
										<button
											onClick={() => logOutFuncion()}
											className=' border bg-mostLighthBlue w-1/2 mx-auto text-darkBlue  rounded-md border-darkBlue hover:bg-red hover:text-mostLighthBlue mr-2'
										>
											Continuar
										</button>
										<button
											onClick={() => setModal(false)}
											className=' border bg-mostLighthBlue w-1/2 mx-auto text-darkBlue  rounded-md border-darkBlue hover:bg-green-700 hover:text-mostLighthBlue'
										>
											Regresar
										</button>
									</div>
								</div>
							</Box>
						</Modal>
					)}
				</aside>
			) : (
				<aside
					style={{ maxHeight: "1024px" }}
					className={`asideBackground h-screen absolute z-50 flex flex-col justify-between p-2 gap-2 ${
						openClose ? "w-38" : "w-16"
					}`}
				>
					<Button
						className='flex justify-end w-full py-1 mt-2'
						onClick={handleAsideOpenClose}
					>
						{openClose ? (
							<img src={close} className='mr-2 h-4 mt-1' />
						) : (
							<img src={menu} className='mx-auto h-4 mt-1' />
						)}
					</Button>
					<Toaster richColors />
					<article
						className={`flex w-full ${
							openClose ? "justify-start gap-4" : "justify-center"
						}`}
					>
						<figure
							className={`w-11 h-auto rounded-full overflow-hidden ${openClose}`}
						>
							{doctorLogged && (
								<Avatar
									sx={{ width: 25, height: 25, margin:'auto' }}
									className='objet-cover object-center'
									src={doctorLogged.image}
								/>
							)}
							{userLogged && (
								<Avatar
									sx={{ width: 25, height: 25, margin:'auto' }}
									className='objet-cover object-center'
									src={userLogged.image}
								/>
							)}
						</figure>
						<div
							style={{ display: openClose ? "block" : "none" }}
							className=' textHiddenAside'
						>
							{doctorLogged && (
								<>
									<p className='font-medium text-sm'>{doctorLogged.name}</p>
									<p className='font-normal text-sm'>
										{doctorLogged.specialty}
									</p>
								</>
							)}
							{userLogged && (
								<p className='font-medium text-sm'>{userLogged.name}</p>
							)}
						</div>
					</article>

					<section className={`flex flex-col justify-center items-start h-fit`}>
						<article
							onClick={() => navigate("/home")}
							className={`flex cursor-pointer hover:bg-white p-2 rounded-xl mx-auto ${
								openClose
									? "w-full justify-start gap-4"
									: "w-2/3 h-auto justify-center"
							}`}
						>
							<img src={group} className='max-w-none' title='Home' />
							<p
								style={{ display: openClose ? "block" : "none" }}
								className='text-sm'
							>
								Home
							</p>
						</article>
						<div
							className={`${
								openClose
									? "mx-inherit w-full"
									: "mx-auto w-2/3 hover:bg-white rounded-xl"
							}`}
							onClick={() => navigate("/perfil")}
						>
							<BoxIcon openClose={openClose} text={"Mi perfil"} icon={person} />
						</div>
						<div
							className={`${
								openClose
									? "mx-inherit w-full"
									: "mx-auto w-2/3 hover:bg-white rounded-xl"
							}`}
							onClick={() => navigate("/my-agenda")}
						>
							<BoxIcon openClose={openClose} text={"Agenda"} icon={calendar} />
						</div>
						{userLogged && (
							<div
								className={`${
									openClose
										? "mx-inherit w-full"
										: "mx-auto w-2/3 hover:bg-white rounded-xl"
								}`}
								onClick={() => navigate("/my-list")}
							>
								<BoxIcon
									openClose={openClose}
									text={"Mis especialistas"}
									icon={clinicalNotes}
								/>
							</div>
						) 
						// : (
						// 	<div
						// 		className={`${
						// 			openClose
						// 				? "mx-inherit w-full"
						// 				: "mx-auto w-2/3 hover:bg-white rounded-xl"
						// 		}`}
						// 		onClick={() => navigate("/my-list")}
						// 	>
						// 		<BoxIcon
						// 			openClose={openClose}
						// 			text={"Mis pacientes"}
						// 			icon={clinicalNotes}
						// 		/>
						// 	</div>
						// )
						}
						<div
							className={`${
								openClose
									? "mx-inherit w-full"
									: "mx-auto w-2/3 hover:bg-white rounded-xl"
							}`}
							onClick={() => navigate("/video-llamada")}
						>
							<BoxIcon
								openClose={openClose}
								text={"Consulta virtual"}
								icon={duo}
							/>
						</div>

						{userLogged && (
							<div
								className={`${
									openClose
										? "mx-inherit w-full"
										: "mx-auto w-2/3 hover:bg-white rounded-xl"
								}`}
								onClick={() => navigate("/cartilla-medica")}
							>
								<BoxIcon
									openClose={openClose}
									text={"Cartilla médica"}
									icon={book}
								/>
							</div>
						)}
						{/* <BoxIcon openClose={openClose} text={"Mi billetera"} icon={star} 
				/> */}
					</section>
					<br />
					<section
						className={`flex flex-col justify-center ${
							openClose ? "h-1/5" : "h-1/5"
						}`}
					>
						<div
							className={`flex hover:bg-white p-2 rounded-xl mx-auto ${
								openClose
									? "w-full justify-start gap-4"
									: "w-2/3 h-auto relative justify-center"
							}`}
						>
							{openClose ? (
								<img
									src={notification}
									className='max-w-none cursor-pointer'
									title='Notificaciones'
								/>
							) : (
								<>
									<img
										src={notificationUnread}
										className='max-w-none cursor-pointer'
										title='Notificaciones'
									/>
									<Badge className='w-0.5 h-0.5 bg-red p-1 rounded-md absolute badge' />
								</>
							)}
							<div
								className={`${
									openClose
										? "flex cursor-pointer w-2/3 items-center"
										: "hidden"
								}`}
							>
								<p className='text-sm cursor-pointer'> Notificaciones</p>
								<p className='text-white rounded-full ml-2 flex justify-center h-3 w-7 text-xs items-center bg-red'>
									3
								</p>
							</div>
						</div>
						<div
							className={`${
								openClose
									? "mx-inherit w-full"
									: "mx-auto w-2/3 hover:bg-white rounded-xl"
							}`}
							onClick={handleSuport}
						>
							<BoxIcon
								openClose={openClose}
								text={"Centro de ayuda"}
								icon={suportAgent}
							/>
						</div>
						<div
							className={`${
								openClose
									? "mx-inherit w-full"
									: "mx-auto w-2/3 hover:bg-white rounded-xl"
							}`}
							onClick={() => navigate("/")}
						>
							<div className={`flex cursor-pointer hover:bg-white p-2 rounded-xl mx-auto ${openClose ? 'w-full justify-start gap-4' : 'w-2/3 h-auto justify-center'}`}>
							<img src={arrowBack} className="max-w-none w-5" title={"Inicio"}/>
							<p style={{display: openClose ? 'block': 'none'}} className='text-sm'>{"Inicio"}</p>
							</div>
						</div>

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
					</section>
					<div className='' onClick={() => setModal(true)}>
						<BoxIcon
							openClose={openClose}
							text={"Cerrar sesión"}
							icon={logOut}
						/>
					</div>
					{modal && (
						<Modal
							open={modal === true}
							// onClose={() => handleModalImg}
							aria-labelledby='modal-modal-title'
							aria-describedby='modal-modal-description'
						>
							<Box
								sx={{
									position: "absolute",
									top: "50%",
									left: "50%",
									zIndex: "10",
									transform: "translate(-50%, -50%)",
									width: 400,
									bgcolor: "background.paper",
									border: "2px solid #000",
									boxShadow: 24,
									p: 4,
									borderRadius: "8px",
								}}
							>
								<div className='flex flex-col gap-4'>
									<h2 className='text-center font-semibold text-base text-black'>
										¿Deseas cerrar sesión?
									</h2>
									<div className='mt-5 flex justify-center'>
										<button
											onClick={() => logOutFuncion()}
											className=' border bg-mostLighthBlue w-1/2 mx-auto text-darkBlue  rounded-md border-darkBlue hover:bg-red hover:text-mostLighthBlue mr-2'
										>
											Continuar
										</button>
										<button
											onClick={() => setModal(false)}
											className=' border bg-mostLighthBlue w-1/2 mx-auto text-darkBlue  rounded-md border-darkBlue hover:bg-green-700 hover:text-mostLighthBlue'
										>
											Regresar
										</button>
									</div>
								</div>
							</Box>
						</Modal>
					)}
				</aside>
			)}
		</>
	);
}
