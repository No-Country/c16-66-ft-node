/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { CardPacientItem } from "../../components/CardPacientItem";
import { MedicConsult } from "../../components/MedicCosult";
import { MedicConsultModal } from "../../components/MedicCosult/MedicConsultModal";

import { CalendarComponent } from "../../components/CalendarComponent/index";
import { HomeHiglights } from "../../components/homeHiglihts";
//
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";

//

import credencialIcon from "../../assets/svg/contact_emergency.svg";
import { Modal } from "@mui/material";

export function ViewFromLg() {
	const { doctorLogged, doctors } = DoctorStore();
	const { users, userLogged } = UserStore();
	const [selectTypeUser, setSelectTypeUser] = useState({});
	const [credAnim, setCredAnim] = useState(false); //destapa credencial

	const [open, setOpen] = useState(false);
	const handleModalConsult = () => setOpen(!open);

	const handlerSelect = (id) => {
		console.log("el id es :", id);
		let consult;
		doctorLogged
			? (consult = users.filter((pacient) => pacient.pacientId === id))
			: (consult = doctors.filter((doctor) => doctor.doctorId === id));
		setSelectTypeUser(consult[0]);
		console.log("se selecciono a : ", consult);
	};
	useEffect(() => {}, [userLogged]);

	return (
		<>
			{/* header con logo de APP =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
			<div
				style={{ maxWidth: "1440px" }}
				className=' lg:w-4/5 xl:w-6/6 h-12/12 flex-col lg:flex-nowrap lg:pr-12 xl:pr-6 2xl:mr-10 '
			>
				{/* <header
					// style={{ width: "1320px" }}
					className='-ml-28 w-screen h-16 py-2.5 flex justify-center'
				>
					<img
						className='w-2.5/12 h-12 cursor-pointer'
						src={logo}
						alt='Imagen del logo de la empresa'
						onClick={() => navigate("/")}
					/>
				</header> */}

				{/* Seccion de Titulo de la pagina ==-=-=-=-=-=-=-==-=-=-=-=-=-= */}
				<section className='mt-2 mb-2 w-full h-3/12 2xl:h-4/12 flex-col mr-4 '>
					<h2 className='text-xl 2xl:text-3xl font-bold text-black'>
						{" "}
						Bienvenido/a
						<span className=' text-darkBlue'>
							{doctorLogged
								? ` Dr. ${doctorLogged.name}`
								: ` ${userLogged?.name}`}
						</span>
					</h2>
					{doctorLogged ? (
						<p className=' text-md 2xl:text-xl font-normal text-gray'>
							¡Ten un gran día de trabajo, excelentes consultas!
						</p>
					) : (
						<p className=' text-md font-normal text-gray'>
							¡Ten un gran día, y accede a las mejores consultas médicas!
						</p>
					)}
				</section>

				{/* Seccion de  higlights? =-=-=-=-=-=-=-= */}
				<section className='w-full h-1/6 max-h-32 2xl:h-3/6 gap-4 flex rounded-3xl bg-celestBgWrapper justify-around px-2 mb-4 '>
					<HomeHiglights />
				</section>

				{/* Seccion de reenderizado de lista de pacientes y consulta de c/u =-=-=-=-=-=-=*/}
				<section
					style={{ height: "410px" }}
					className='w-full mt-4 xl:mt-2 secction__Principal-doctorHome flex py-2 px-4 items-start gap-6 shrink-0 rounded-3xl overflow-hidden md:overflow-scroll 2xl:h-96 2xl:px-0 '
				>
					<div className=' w-6/12 h-full flex flex-col justify-around'>
						<h2 className=' text-2xl text-black font-medium mb-3'>
							{doctorLogged ? "Lista de pacientes" : "Próximos turnos "}
						</h2>
						<section className='w-full h-72 flex-col overflow-scroll'>
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
					<div className='w-6/12 gap-6 h-full flex flex-col  justify-around'>
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
						style={{ marginTop: "2%", marginLeft: "33%" }}
						className='absolute w-fit h-fit bg-mostLighthBlue rounded-2xl border-2 shadow-2xl p-4 overflow-x-hidden'
					>
						{selectTypeUser?.name != undefined ? (
							<MedicConsultModal user={selectTypeUser} open={open} />
						) : doctorLogged ? (
							<MedicConsultModal user={users[0]} open={open} />
						) : (
							<MedicConsultModal user={doctors[0]} open={open} />
						)}
					</section>
				</Modal>
			</div>
			<section className='-ml-4 xl:ml-0 mb-2 w-5/12 h-2/5 flex-col box-border 2xl:w-2/5 2xl:mt-12'>
				<div
					style={{ height: `calc(100vh - 4rem)` }}
					className='m-auto mt-2 box-border 2xl:ml-2'
				>
					<CalendarComponent />

					<div
						className='ml-1 mt-1 w-9/12 2xl:max-w-80 h-44 pt-1 flex-col items-center bg-mostLighthBlue rounded-xl box-border hover:cursor-pointer relative'
						onClick={() => setCredAnim(!credAnim)}
					>
						<h3 className='ml-4 text-lg font-semibold text-black over'>
							{" "}
							{doctorLogged ? "Mi Matricula" : "Mi Credencial"}
						</h3>

						<article
							className={`w-5/6 h-10/12 m-auto mt-2 border-2 rounded-xl border-lightBlue py-1 px-2 bg-white absolute right-7  ${
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
								<span className='ml-2  text-xs   text-darkBlue'>
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
						<article className='w-5/6 h-10/12 rounded-xl flex  m-auto mt-6 pl-6'>
							<div
								className={`bg-blue flex  ${
									credAnim ? "opacity-0 z-0" : "opacity-100 z-20"
								} `}
							>
								<div className='w-fit h-fit p-1 mt-2 ml-1 rounded-full flex justify-center'>
									<img
										src={credencialIcon}
										className='objet-cover objet-center inline'
										alt='Icono de credencial'
									/>
								</div>
								<div className='w-full pl-1 pt-1 flex-col'>
									<p className=' text-md font-semibold text-black '>
										Accede acá a tu
									</p>
									<strong className='text-md font-bold	 text-black'>
										{doctorLogged ? "Matricula" : "Credencial"} Digital
									</strong>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
		</>
	);
}
