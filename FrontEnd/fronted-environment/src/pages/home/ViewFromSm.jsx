/* eslint-disable react/prop-types */
import { useState } from "react";

import { CardPacientItem } from "../../components/CardPacientItem";
import { MedicConsult } from "../../components/MedicCosult";
// import { AsideComponent } from "../../components/AsideComponent/index";
import { CalendarComponent } from "../../components/CalendarComponent/index";
import { HomeHiglights } from "../../components/homeHiglihts";
//
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";

//
import FakePacient1 from "../../assets/imgFakePacient/FakePacient1.png";
import logo from "../../assets/FakeLOGO/Logo 3.png";
import calendarIcon from "../../assets/svg/calendar.svg";
import editIcon from "../../assets/svg/mode_edit_24px.svg";
import credencialIcon from "../../assets/svg/contact_emergency.svg";
import { Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function ViewFromSm() {
	const { doctorLogged } = DoctorStore();

	const { users, userLogged } = UserStore();
	const { doctors } = DoctorStore();
	const [selectTypeUser, setSelectTypeUser] = useState({});
	const [credAnim, setCredAnim] = useState(false);

	const [open, setOpen] = useState(false);
	const handleModalConsult = () => setOpen(!open);
	const [openCalendar, setOpenCalendar] = useState(false);
	const handleModalCalendar = () => setOpenCalendar(!openCalendar);

	const navigate = useNavigate()

	const handlerSelect = (id) => {
		let consult;
		doctorLogged
			? (consult = users.filter((user) => user.id === id))
			: (consult = doctors.filter((user) => user.id === id));
		setSelectTypeUser(...consult);
	};

	return (
		<>
			{/* header con logo de APP =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
			<div
				style={{ maxHeight: "1024px" }}
				className=' w-11/12 h-12/12 flex-col lg:flex-nowrap overflow-y-scroll'
			>
				<header
					// style={{ width: "1320px" }}
					className='-ml-28 w-screen h-16 py-2.5 flex justify-center'
				>
					<img
						className='w-2.5/12 h-12 cursor-pointer'
						src={logo}
						alt='Imagen del logo de la empresa'
						onClick={()=>navigate('/')}
					/>
				</header>

				{/* Seccion de Titulo de la pagina ==-=-=-=-=-=-=-==-=-=-=-=-=-= */}
				<section className=' mt-2 mb-1 h-3/12 flex-col sticky top-0 z-40 bg-white'>
					<h2 className='text-2xl font-bold text-black'>
						{" "}
						Bienvenido/a
						<span className=' text-darkBlue'>
							{doctorLogged
								? ` Dr. ${doctorLogged.name}`
								: ` ${userLogged?.name}`}
						</span>
					</h2>
					{doctorLogged ? (
						<p className=' text-base font-normal text-gray'>
							¡Ten un gran día de trabajo, excelentes consultas!
						</p>
					) : (
						<p className=' text-lg font-normal text-gray'>
							¿Estas listo/a para tu próxima cita?
						</p>
					)}
				</section>

				{/* Seccion de  higlights? =-=-=-=-=-=-=-= */}
				<section className='w-12/12 m-auto h-1/6 max-h-32 gap-2 flex rounded-3xl bg-celestBgWrapper justify-around px-2'>
					<HomeHiglights />
				</section>

				{/* Seccion calendario y Card de matricula o credencial        */}
				<section className='mt-2 mb-2 h-2/6  p-1 pr-4 ml-4 flex flex-row box-border'>
					<article className='w-1/2 mr-4 p-2 h-full rounded-xl bg-mostLighthBlue'>
						<section>
							<h2 className='pl-1 font-semibold'> Calendario </h2>
							<div className='flex justify-between px-2'>
								<p>Viernes 16, julio</p>
								<img src={editIcon} alt='Icono de edicion' className='pr-2' />
							</div>
						</section>
						<div className='mt-6 md:mt-1 flex justify-between md:justify-around  bg-mostLighthBlue	'>
							<h3 className='pl-1 font-semibold'> Próximo turno :</h3>
							<span
								className='text-darkBlue mr-4 hover:cursor-pointer'
								onClick={handleModalCalendar}
							>
								Ver mas..
							</span>
						</div>
						<div className='flex justify-between md:justify-around items-center mt-6 md:mt-1 bg-white p-1 mx-1 rounded-xl'>
							<img
								src={FakePacient1}
								alt='Imagen de perfil'
								className='w-12 h-12 '
							/>
							<div className='w-full ml-2 md:ml-7 flex-col'>
								<h4 className=' text-sm font-bold text-black'>
									Nombre de Usuario
								</h4>
								<p className=' text-xs font-normal text-gray'>
									Fecha del turno y horario
								</p>
							</div>
							<img
								src={calendarIcon}
								alt='Icono de calendario'
								className='hidden mr-3 md:flex'
							/>
						</div>

						<Modal
							sx={{ top: "15%", left: "35%" }}
							open={openCalendar}
							onClose={handleModalCalendar}
							aria-labelledby='modal-modal-title'
							aria-describedby='modal-modal-description'
						>
							<CalendarComponent />
						</Modal>
					</article>
					<div
						//el div tiene el click para destapar la caja del credencial o matricula
						className='
						w-1/2 p-2 h-full flex-col items-center bg-mostLighthBlue rounded-xl box-border hover:cursor-pointer relative  '
						onClick={() => setCredAnim(!credAnim)}
					>
						<h3 className='ml-4 text-lg font-semibold text-black over'>
							{" "}
							{doctorLogged ? "Mi Matricula" : "Mi Credencial"}
						</h3>

						<article
							className={`w-5/6 h-11/12  mt-3 md:mt-0 border-2 rounded-xl border-lightBlue py-1 px-2 bg-white absolute right-5 md:right-7  ${
								credAnim ? "animate-rotate-x" : "blurCard opacity-80 "
							} `}
						>
							<div>
								Nombre y Apellido:{" "}
								<span className=' ml-2 text-xs  text-darkBlue '>
									{doctorLogged ? doctorLogged.name : userLogged?.name}
								</span>
							</div>
							<div>
								{doctorLogged ? "Email:" : "DNI:"}
								<span className='ml-1  text-xs   text-darkBlue'>
									{doctorLogged ? doctorLogged.email : userLogged?.dni}
								</span>
							</div>
							<div>
								{doctorLogged ? "Specialty :" : "Cuil:"}
								<span className=' ml-2 text-xs   text-darkBlue'>
									{doctorLogged
										? doctorLogged.specialty
										: `20-${userLogged?.dni}-09`}
								</span>
							</div>
							<div>
								{doctorLogged ? "Matricula N°:" : "N° Afiliado:"}
								<span className='ml-2  text-xs   text-darkBlue'>
									{doctorLogged
										? doctorLogged.licensenumber
										: userLogged?.id}
								</span>
							</div>
						</article>
						<article className='w-5/6 md:w-4/6 h-10/12 rounded-xl flex justify-center absolute right-5 top-16 md:top-16 md:right-12 '>
							<div
								className={` flex sm:flex-col md:flex-row   ${
									credAnim ? "opacity-0 z-0" : "opacity-100 z-20"
								} `}
							>
								<div className='w-fit h-fit p-1 pl-0 md:mt-2 md:-ml-6 md:mr-4 rounded-full flex justify-center'>
									<img
										src={credencialIcon}
										className='objet-cover objet-center inline ml-12'
										alt='Icono de credencial'
									/>
								</div>
								<div className='w-full md:pl-1 md:pt-1 flex-col '>
									<p className=' text-md font-semibold text-black '>
										Accede acá a tu
									</p>
									<strong className='text-md font-bold text-black'>
										{doctorLogged ? "Matricula" : "Credencial"} Digital
									</strong>
								</div>
							</div>
						</article>
					</div>
				</section>

				{/* Seccion de reenderizado de lista de pacientes y consulta de c/u =-=-=-=-=-=-=*/}
				<section className='w-12/12 mt-3 secction__Principal-doctorHome flex flex-col-reverse py-2 px-2 gap-4 shrink-0 rounded-3xl overflow-hidden'>
					<div className=' w-10/12 mx-auto flex-col '>
						<h2 className=' text-2xl text-black font-medium mb-3'>
							{doctorLogged ? "Lista de pacientes" : "Próximos turnos "}
						</h2>
						<section className='w-full h-64 xl:h-72 flex-col overflow-scroll pl-4 md:pl-6'>
							{doctorLogged ? (
								<div className='w-full'>
									{users?.map((user) => {
										return (
											<CardPacientItem
												key={user.id}
												user={user}
												handlerSelect={handlerSelect}
											/>
										);
									})}
								</div>
							) : (
								<div className='ml-2'>
									{doctors?.map((doctor) => {
										return (
											<CardPacientItem
												key={doctor.id}
												user={doctor}
												handlerSelect={handlerSelect}
											/>
										);
									})}
								</div>
							)}
						</section>
					</div>
					{/* -=-=segundo bloque de la seccion - Turno/ doctor info --=-=-=- */}
					<div className='w-11/12 mx-auto h-full flex-col gap-6 '>
						<h3>Próximo turno :</h3>
						<div className='w-11/12 h-32 mx-auto mt-2 pt-2 xs:flex justify-center items-center  rounded-lg box-border overflow-scroll'>
							{selectTypeUser?.name != undefined ? (
								<CardPacientItem user={selectTypeUser} />
							) : (
								<CardPacientItem user={doctors[0]} />
							)}
						</div>

						<div className='flex justify-between'>
							<h2 className=' font-medium text-xl text-black'>
								Consulta Médica
							</h2>
							<button
								className='text-darkBlue mr-2 hover:cursor-pointer'
								onClick={handleModalConsult}
							>
								{" "}
								Ver más..{" "}
							</button>
						</div>
						{selectTypeUser?.name != undefined ? (
							<MedicConsult user={selectTypeUser} />
						) : userLogged ? (
							<MedicConsult user={doctors[0]} />
						) : (
							<MedicConsult user={users[0]} />
						)}
					</div>
				</section>
				{/* Modal de Ver Mas =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
				<Modal
					open={open}
					onClose={handleModalConsult}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<section
						style={{ top: "5%", left: "25%" }}
						className='absolute  w-96 bg-mostLighthBlue rounded-2xl border-2 shadow-2xl p-4'
					>
						{selectTypeUser?.name != undefined ? (
							<MedicConsult user={selectTypeUser} />
						) : doctorLogged ? (
							<MedicConsult user={users[0]} />
						) : (
							<MedicConsult user={doctors[0]} />
						)}
					</section>
				</Modal>
			</div>
		</>
	);
}
