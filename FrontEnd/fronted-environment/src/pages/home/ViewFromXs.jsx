/* eslint-disable react/prop-types */
import { useState } from "react";

import { CardPacientItem } from "../../components/CardPacientItem";
import { MedicConsult } from "../../components/MedicCosult";
import { MedicConsultModal } from "../../components/MedicCosult/MedicConsultModal";
import { CalendarComponent } from "../../components/CalendarComponent/index";
import { HomeHiglights } from "../../components/homeHiglihts";
//
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";

//

import editIcon from "../../assets/svg/mode_edit_24px.svg";
import credencialIcon from "../../assets/svg/contact_emergency.svg";
import { Modal } from "@mui/material";

export function ViewFromXs() {
	const { doctorLogged, doctors } = DoctorStore();

	const { users, userLogged } = UserStore();

	const [selectTypeUser, setSelectTypeUser] = useState({});
	const [credAnim, setCredAnim] = useState(false); // descubre credencial
	const [open, setOpen] = useState(false);
	const handleModalConsult = () => setOpen(!open);
	const [openCalendar, setOpenCalendar] = useState(false);
	const handleModalCalendar = () => setOpenCalendar(!openCalendar);

	// const navigate = useNavigate();

	const handlerSelect = (id) => {
		let consult;
		doctorLogged
			? (consult = users.filter((pacient) => pacient.pacientId === id))
			: (consult = doctors.filter((doctor) => doctor.doctorId === id));
		setSelectTypeUser(consult[0]);
		setSelectTypeUser(...consult);
	};

	return (
		<>
			{/* header con logo de APP =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
			<div
				style={{ maxHeight: "1024px" }}
				className='p-2 w-full h-12/12 flex-col lg:flex-nowrap overflow-y-scroll overflow-x-visible'
			>
				{/* Seccion de Titulo de la pagina ==-=-=-=-=-=-=-==-=-=-=-=-=-= */}
				<section className=' mt-2 mb-1 h-3/12 flex-col sticky top-0 z-40 bg-white'>
					<h2 className='text-xl font-bold text-black'>
						{" "}
						Bienvenido/a
						<span className=' text-darkBlue'>
							{doctorLogged
								? ` Dr. ${doctorLogged.name}`
								: ` ${userLogged?.name}`}
						</span>
					</h2>
					{doctorLogged ? (
						<p className=' text-md font-normal text-gray'>
							¡Ten un gran día de trabajo, excelentes consultas!
						</p>
					) : (
						<p className=' text-md font-normal text-gray'>
							¿Estas listo/a para tu próxima cita?
						</p>
					)}
				</section>

				{/* Seccion de  higlights? =-=-=-=-=-=-=-= */}
				<section className='w-full m-auto h-fit py-2 gap-1 flex flex-col rounded-3xl justify-around px-2 '>
					<HomeHiglights />
				</section>

				{/* Seccion calendario y Card de matricula o credencial        */}
				<section className=' mt-2 h-80'>
					<article className='w-full m-auto p-2  rounded-xl bg-mostLighthBlue'>
						<section>
							<h2 className='pl-1 font-semibold'> Calendario </h2>
							<div className='flex justify-between px-2'>
								<p>Viernes 16, julio</p>
								<img src={editIcon} alt='Icono de edicion' className='pr-2' />
							</div>
						</section>
						<div className=' flex justify-between bg-mostLighthBlue	'>
							<h3 className='pl-1 font-semibold'> Próximo turno :</h3>
							<span
								className='text-darkBlue mr-4 hover:cursor-pointer'
								onClick={handleModalCalendar}
							>
								Ver mas..
							</span>
						</div>

						<Modal
							sx={{ top: "15%", left: "35%" }}
							open={openCalendar}
							onClose={handleModalCalendar}
						>
							<CalendarComponent />
						</Modal>
					</article>
					<section className='mt-3 mb-2 h-56 bg-mostLighthBlue rounded-2xl'>
						<div
							//el div tiene el click para destapar la caja del credencial o matricula
							className='w-full p-2 flex-col items-center bg-mostLighthBlue rounded-xl box-border hover:cursor-pointer relative  '
							onClick={() => setCredAnim(!credAnim)}
						>
							<h3 className='ml-4 text-lg font-semibold text-black over'>
								{" "}
								{doctorLogged ? "Mi Matricula" : "Mi Credencial"}
							</h3>

							<article
								className={`w-5/6 h-11/12 border-2 rounded-xl border-lightBlue py-1 px-2 bg-white absolute right-5 top-16  ${
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
										{doctorLogged ? doctorLogged.licensenumber : userLogged?.id}
									</span>
								</div>
							</article>

							<article className='w-5/6 rounded-xl flex justify-center absolute right-10  top-24  '>
								<div
									className={` flex sm:flex-col md:flex-row   ${
										credAnim ? "opacity-0 z-0" : "opacity-100 z-20"
									} `}
								>
									<div className='w-fit h-fit p-1 mr-4  rounded-full flex justify-center'>
										<img
											src={credencialIcon}
											className='objet-cover objet-center inline ml-12'
											alt='Icono de credencial'
										/>
									</div>
									<div className='w-full flex-col '>
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
				</section>

				{/* Seccion de reenderizado de lista de pacientes y consulta de c/u =-=-=-=-=-=-=*/}
				<section className='w-12/12 mt-3 secction__Principal-doctorHome flex flex-col-reverse py-2 px-2 gap-4 shrink-0 rounded-3xl overflow-hidden'>
					<div className=' w-full mx-auto flex-col '>
						<h2 className=' text-2xl text-black font-medium mb-3'>
							{doctorLogged ? "Lista de pacientes" : "Próximos turnos "}
						</h2>
						<section className='w-full h-64 xl:h-72 flex-col overflow-scroll  '>
							{doctorLogged ? (
								<div className='w-full'>
									{users?.map((user) => {
										return (
											<CardPacientItem
												key={user.pacientId}
												user={user}
												handlerSelect={() => handlerSelect(user.pacientId)}
											/>
										);
									})}
								</div>
							) : (
								<div className='ml-2'>
									{doctors?.map((doctor) => {
										return (
											<CardPacientItem
												key={doctor.doctorId}
												user={doctor}
												handlerSelect={() => handlerSelect(doctor.doctorId)}
											/>
										);
									})}
								</div>
							)}
						</section>
					</div>
					{/* -=-=segundo bloque de la seccion - Turno/ doctor info --=-=-=- */}
					<div className='w-full mx-auto h-full flex-col gap-6 '>
						<h3>Mis próximos turnos :</h3>
						<div className='w-full h-32 mx-auto mt-2  xs:flex justify-center items-center rounded-lg box-border overflow-scroll'>
							{selectTypeUser?.name != undefined ? (
								<CardPacientItem
									key={
										selectTypeUser.doctorId
											? selectTypeUser.doctorId
											: selectTypeUser.pacientId
									}
									user={selectTypeUser}
								/>
							) : userLogged ? (
								<CardPacientItem key={doctors[0].doctorId} user={doctors[0]} />
							) : (
								<CardPacientItem key={users[0].pacientIdId} user={users[0]} />
							)}
						</div>

						<div className='flex justify-between'>
							<h2 className=' font-medium text-xl text-black'>
								{userLogged ? " Conoce a Tu Médico" : "Consulta Medica"}
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
						style={{ top: "10%", left: "3%" }}
						className='absolute w-96 p-x4 h-fit	 bg-mostLighthBlue rounded-2xl border-2 shadow-2xl p-4 overflow-x-hidden'
					>
						{selectTypeUser?.name != undefined ? (
							<MedicConsultModal user={selectTypeUser} />
						) : doctorLogged ? (
							<MedicConsultModal user={users[0]} />
						) : (
							<MedicConsultModal user={doctors[0]} />
						)}
					</section>
				</Modal>
			</div>
		</>
	);
}
