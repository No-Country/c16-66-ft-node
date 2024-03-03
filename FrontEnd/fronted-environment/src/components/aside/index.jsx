import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Button } from "@mui/base";
import { Avatar } from "@mui/material";
import close from "../../assets/svg/close.svg";
import menu from "../../assets/svg/menu.svg";
// import isotipo from "../../assets/svg/Isotipo.svg";
import group from "../../assets/svg/group.svg";
import person from "../../assets/svg/person.svg";
import calendar from "../../assets/svg/calendar.svg";
import clinicalNotes from "../../assets/svg/clinicalNotes.svg";
import duo from "../../assets/svg/duo.svg";
import book from "../../assets/svg/book.svg";
// import star from "../../assets/svg/star.svg";
import notification from "../../assets/svg/notification.svg";
import notificationUnread from "../../assets/svg/notificationUnread.svg";
import settings from "../../assets/svg/settings.svg";
import suportAgent from "../../assets/svg/suportAgent.svg";
import logOut from "../../assets/svg/logout.svg";
import { BoxIcon } from "./BoxIcon";
import "./index.css";

import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import { Modal, Box } from "@mui/material";

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
		userLogged ? loggOutUser() : loggOutDoctor();
		navigate("/");
	};

	return (
		<aside
			style={{ maxHeight: "1024px" }}
			className={`asideBackground h-screen absolute z-50 flex flex-col justify-evenly p-1 gap-2.5 ${
				openClose
					? " w-1/2 sm:w-2/5 sm:p-4 md:w-1/4 lg:w-2/12"
					: "w-2/12 lg:w-1/12"
			}`}
		>
			<Button className='flex justify-end' onClick={handleAsideOpenClose}>
				{openClose ? (
					<img src={close} />
				) : (
					<img src={menu} className='mx-auto' />
				)}
			</Button>
			<article
				className={`flex mx-auto w-full ${
					openClose ? "justify-start gap-4" : "justify-center"
				}`}
			>
				<figure className={`w-8 h-8 rounded-full overflow-hidden ${openClose}`}>
					{doctorLogged && (
						<Avatar
							sx={{ width: 25, height: 25 }}
							className='objet-cover object-center'
							src={doctorLogged.image}
						/>
					)}
					{userLogged && (
						<Avatar
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
							<p className='font-normal text-sm'>{doctorLogged.specialty}</p>
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
				{userLogged ? (
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
				) : (
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
							text={"Mis pacientes"}
							icon={clinicalNotes}
						/>
					</div>
				)}
				<BoxIcon openClose={openClose} text={"Consulta virtual"} icon={duo} />
				<div
					className={`${
						openClose
							? "mx-inherit w-full"
							: "mx-auto w-2/3 hover:bg-white rounded-xl"
					}`}
					onClick={() => navigate("/")}
				>
					<BoxIcon openClose={openClose} text={"Cartilla médica"} icon={book} />
				</div>
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
							openClose ? "flex cursor-pointer w-2/3 items-center" : "hidden"
						}`}
					>
						<p className='text-sm cursor-pointer'> Notificaciones</p>
						<p className='text-white rounded-full ml-2 flex justify-center h-4 w-4 text-xs items-center bg-red'>
							8
						</p>
					</div>
				</div>
				<BoxIcon openClose={openClose} text={"Configuración"} icon={settings} />
				<BoxIcon
					openClose={openClose}
					text={"Centro de ayuda"}
					icon={suportAgent}
				/>
			</section>
			<div onClick={() => setModal(true)}>
				<BoxIcon openClose={openClose} text={"Cerrar sesión"} icon={logOut} />
			</div>
			{modal && (
				// <div className="fixed top-1/3 left-96 w-1/3 h-1/3 bg-lightBlue rounded-xl">
				// <div className=" bg-whiteOpacity m-10 p'5 rounded-xl">
				// 	<h2 className="text-xl text-center font-semibold text-black">¿Deseas cerrar sesión?</h2>
				// 	<div className="mt-5 flex justify-center">
				// 		<button className="w-fit h-auto p-2 m-1 text-center text-white bg-darkBlue rounded-xl" onClick={()=> logOutFuncion()}>Continuar</button>
				// 		<button className="w-fit h-auto p-2 m-1 text-center bg-lightGreen text-white rounded-xl" onClick={() => setModal(false)}>Regresar</button>
				// 	</div>
				// </div>
				// </div>
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
	);
}
