/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import { useUserStore } from "../../hooks/userUserStore";
import { useDoctorStore } from "../../hooks/useDoctorStore";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { Autocomplete, Stack, TextField } from "@mui/material";

// const doctorLogged = {
// 	doctorId: "7e08e02d-bb48-4a37-8fed-0aa99d23eec4",
// 	name: "Juan",
// 	lastname: "García",
// 	adress: "Av. Rivadavia 1234",
// 	birthdate: "1985-06-15T00:00:00.000Z",
// 	dni: 15987321,
// 	cuil: "20159873215",
// 	province: "Buenos Aires",
// 	telephone: "110123456",
// 	SocialSecurity: ["Osde", "Avalian", "Swiss Medical"],
// 	email: "juan.garcia@gmail.com",
// 	password: "s4luD1sMed!",
// 	licensenumber: 987654,
// 	specialty: "General Medicine",
// 	image:
// 		"https://drluisalbertolee.files.wordpress.com/2018/05/foto-carnet1.jpg",
// };
export function CredencialMatriculaForm() {
	// const navigate = useNavigate();
	const { editUserWithNewDate } = useUserStore();
	const { editDoctorWithNewDate } = useDoctorStore();
	const { userLogged } = UserStore();
	const { doctorLogged } = DoctorStore();
	console.log(userLogged);
	// eslint-disable-next-line no-unused-vars
	const [userToEdit, setUserToEdit] = useState(
		userLogged ? userLogged : doctorLogged
	);

	useEffect(() => {}, [userLogged, doctorLogged]);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: userToEdit.name,
			lastname: userToEdit.lastname,
			birthdate: userToEdit.birthdate,
			dni: userToEdit.dni,
			tel: userToEdit.tel,
			telephone: userToEdit.telephone,
			cuil: userToEdit.cuil,
			email: userToEdit.email,
			password: userToEdit.password,
			country: "Argentina",
			province: userToEdit.province,
			adress: userToEdit.adress,
			// town: userToEdit.town,
			specialty: doctorLogged && userToEdit.specialty,
			socialSecurity: userToEdit.socialSecurity, //paciente sin
			licensenumber: doctorLogged && userToEdit.licensenumber,
			SocialSecurity: doctorLogged && userToEdit.SocialSecurity, // Doctor con mayus
			afliedNumber: userLogged && userLogged.afliedNumber,
			planSocialSecurity: userLogged && userLogged.planSocialSecurity,
		},
	});

	const onSubmitEdit = (newData) => {
		event.preventDefault();
		// !doctorLogged
		// 	? (newData = { ...newData, id: userLogged.id })
		// 	: (newData = { ...newData, id: doctorLogged.id });
		!doctorLogged
			? editUserWithNewDate(newData)
			: editDoctorWithNewDate(newData);

		// navigate("/home");
	};

	return (
		<section className='overflow-scroll flex flex-col bg-whiteOpacity border-2 shadow-xl rounded-2xl border-gray p-8 xl:overflow-hidden'>
			{" "}
			<div className='flex-col mb-1'>
				<h3 className='text-lg font-medium lg:text-2xl text-black'>
					{userLogged ? " Mi Credencial" : "Mi Matrícula"}
				</h3>
			</div>
			{userToEdit ? (
				<form onSubmit={handleSubmit(onSubmitEdit)}>
					<article className='flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							<label
								htmlFor='name'
								className='ml-2  font-semibold text-base text-darkBlue '
							>
								Nombre y Apellido <span className='text-red'>*</span>
							</label>
							<input
								type='text'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
								{...register("name")}
								disabled
							/>
						</div>
					</article>
					<article className='flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							<label
								htmlFor='dni'
								className='ml-2  font-semibold text-base text-darkBlue  '
							>
								DNI <span className='text-red'>*</span>
							</label>
							<input
								type='text'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl bg-mostLighthBlue mt-1'
								{...register("dni", {
									required: {
										value: true,
										message: "Debes completar el campo",
									},
									minLength: {
										value: 8,
										message: "El Dni debe contener al menos 8 caracteres.",
									},
									validate: (value) => {
										const regex = /^[0-9]*$/;
										const onlyNumbers = regex.test(value);

										return onlyNumbers ? true : "El campo solo admite numeros.";
									},
								})}
							/>
							{errors.dni && (
								<span
									className='pl-2 pt-2 flex text-xs font-bold text-red-700'
									style={{ color: "red" }}
								>
									{errors.dni.message}
								</span>
							)}
						</div>
					</article>
					<article className=' flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							<label
								htmlFor='cuil'
								className='ml-2  font-semibold text-base text-darkBlue  '
							>
								Cuil <span className='text-red'>*</span>
							</label>
							<input
								type='text'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
								disabled
							/>
						</div>
					</article>
					<article className=' flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							{!doctorLogged ? (
								<>
									<label
										htmlFor='password'
										className='ml-2  font-semibold text-base text-darkBlue '
									>
										Obra Social
									</label>
									<input
										type='text'
										name='socialSecurity'
										className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
										{...register(
											"socialSecurity"
											// , {
											// 	required: {
											// 		value: true,
											// 		message: "Debes completar el campo",
											// 	},
											// }
										)}
									/>
									{errors.socialSecurity && (
										<span
											className='pl-2 pt-2 flex text-xs font-bold text-red-700'
											style={{ color: "red" }}
										>
											{errors.socialSecurity.message}
										</span>
									)}
								</>
							) : (
								<>
									<label
										htmlFor='specialty'
										className='ml-2  font-semibold text-base text-darkBlue '
									>
										Especializacíon
									</label>
									<input
										type='text'
										name='specialty'
										className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
										{...register("specialty", {
											required: {
												value: true,
												message: "Debes completar el campo",
											},
										})}
									/>
									{errors.specialty && (
										<span
											className='pl-2 pt-2 flex text-xs font-bold text-red-700'
											style={{ color: "red" }}
										>
											{errors.specialty.message}
										</span>
									)}
								</>
							)}
						</div>
					</article>
					{/* Plan / obras sociales adheridas */}
					<article className=' flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							{!doctorLogged ? (
								<>
									<label
										htmlFor='plan'
										className='ml-2  font-semibold text-base text-darkBlue '
									>
										Plan
									</label>
									<input
										type='text'
										name='planSocialSecurity'
										className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
										{...register("planSocialSecurity", {
											required: {
												value: true,
												message: "Debes completar el campo",
											},
										})}
									/>
									{errors.planSocialSecurity && (
										<span
											className='pl-2 pt-2 flex text-xs font-bold text-red-700'
											style={{ color: "red" }}
										>
											{errors.planSocialSecurity.message}
										</span>
									)}
								</>
							) : (
								<>
									<label
										htmlFor='specialty'
										className='ml-2  font-semibold text-base text-darkBlue '
									>
										Obras Sociales Adheridas
									</label>

									{/* <Autocomplete
										id='free-solo-demo'
										value='Ver obras Sociales'
										options={doctorLogged.SocialSecurity?.map(
											(option) => option
										)}
										renderInput={(socialSecurity) => (
											<TextField {...socialSecurity} />
										)}
									/> */}

									<select
										id='dropdown'
										className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1 '
										value='Ver obas sociales'
									>
										{doctorLogged.SocialSecurity?.map((add, i) => {
											return <option key={i}>{add}</option>;
										})}
									</select>

									{errors.SocialSecurity && (
										<span
											className='pl-2 pt-2 flex text-xs font-bold text-red-700'
											style={{ color: "red" }}
										>
											{errors.SocialSecurity.message}
										</span>
									)}
								</>
							)}
						</div>
					</article>
					{/* Numero de matricula / numero de afiliado */}
					<article className=' flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							{!doctorLogged ? (
								<>
									<label
										htmlFor='afliedNumber'
										className='ml-2  font-semibold text-base text-darkBlue '
									>
										N° de Afiliado
									</label>
									<input
										type='text'
										name='afliedNumber'
										className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
										{...register("afliedNumber", {
											required: {
												value: true,
												message: "Debes completar el campo",
											},
										})}
									/>
									{errors.afliedNumber && (
										<span
											className='pl-2 pt-2 flex text-xs font-bold text-red-700'
											style={{ color: "red" }}
										>
											{errors.afliedNumber.message}
										</span>
									)}
								</>
							) : (
								<>
									<label
										htmlFor='licensenumber'
										className='ml-2  font-semibold text-base text-darkBlue '
									>
										N° de Matrícula
									</label>
									<input
										type='text'
										name='licensenumber'
										className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
										{...register("licensenumber", {
											required: {
												value: true,
												message: "Debes completar el campo",
											},
										})}
									/>
									{errors.licensenumber && (
										<span
											className='pl-2 pt-2 flex text-xs font-bold text-red-700'
											style={{ color: "red" }}
										>
											{errors.licensenumber.message}
										</span>
									)}
								</>
							)}
						</div>
					</article>
					{/* botones */}
					<article className='flex justify-around lg:justify-center lg:gap-20 mt-4'>
						<button
							type='submit'
							className='w-1/3 md:w-1/3 py-3 sm:text-sm md:text-lg sm:font-semibold md:font-bold px-4 border-2 border-darckBlue rounded-xl flex justify-center bg-darkBlue hover:bg-green-800 text-white hover:border-darkBlue  hover:text-mostLighthBlue hover:cursor-pointer'
						>
							Editar
						</button>

						<button
							type='cancel'
							className='w-1/3 md:w-1/3 py-3 sm:text-sm md:text-lg sm:font-semibold md:font-bold px-4 border-2 rounded-xl  border-red flex justify-center bg-white text-red hover:bg-red hover:text-white	 hover:cursor-pointer'
							onClick={() => reset()}
						>
							{" "}
							Cancelar
						</button>
					</article>
				</form>
			) : (
				<p>Inicia Secion</p>
			)}
		</section>
	);
}
