/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import { useUserStore } from "../../hooks/userUserStore";
import { useDoctorStore } from "../../hooks/useDoctorStore";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'

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
	// userToEdit.licensenumber = null;
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		formState: { isDirty },
	} = useForm({
		defaultValues: {
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
	console.log("el form data: ", FormData);
	const fullName = userToEdit.name + " " + userToEdit.lastname;

	const onSubmitEdit = (newData) => {
		event.preventDefault();

		newData.name = userToEdit.name;
		newData.lastname = userToEdit.lastname;
		// !doctorLogged
		// 	? (newData = { ...newData, id: userLogged.id })
		// 	: (newData = { ...newData, id: doctorLogged.id });
		!doctorLogged
			? editUserWithNewDate(newData)
			: editDoctorWithNewDate(newData);

		// navigate("/home");
		toast.success(
			'Usuario editado correctamente'	
		)
	};

	return (
		<section style={{ boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.20)', backdropFilter: "blur(12.5px)" }} 
		className='overflow-scroll flex flex-col bg-whiteOpacity border-2 border-transparent rounded-2xl border-gray p-8 xl:p-2 xl:overflow-hidden xl:w-8/12 xl:ml-24'>
			{" "}
			<div className='flex-col mb-1 xl:pl-6'>
				<h3 className='text-sm font-medium text-black'>
					{userLogged ? " Mi Credencial" : "Mi Matrícula"}
				</h3>
			</div>
			{userToEdit ? (
				<form onSubmit={handleSubmit(onSubmitEdit)}>
					<article className='flex flex-col lg:flex-row justify-around gap-2 '>
						<div className='w-11/12 ml-2 pt-2'>
							<label
								htmlFor='name'
								className='ml-2  font-semibold text-xs text-darkBlue '
							>
								Nombre y Apellido
							</label>
							<input
								type='text'
								className='pl-2 w-full py-1 xl:py-0 border border-darkBlue rounded-xl bg-lightGray mt-1'
								value={fullName}
								disabled
							/>
						</div>
					</article>
					<article className='flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12  ml-2 pt-2'>
							<label
								htmlFor='dni'
								className='ml-2  font-semibold text-xs text-darkBlue  '
							>
								DNI
							</label>
							<input
								type='text'
								disabled
								className='pl-2 w-full py-1 xl:py-0 border border-darkBlue rounded-xl bg-lightGray mt-1'
								{...register(
									"dni"
									//  {
									// 	required: {
									// 		value: true,
									// 		message: "Debes completar el campo",
									// 	},
									// 	minLength: {
									// 		value: 8,
									// 		message: "El Dni debe contener al menos 8 caracteres.",
									// 	},
									// 	validate: (value) => {
									// 		const regex = /^[0-9]*$/;
									// 		const onlyNumbers = regex.test(value);

									// 		return onlyNumbers ? true : "El campo solo admite numeros.";
									// 	},
									// }
								)}
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
						<div className='w-11/12  ml-2 pt-2'>
							<label
								htmlFor='cuil'
								className='ml-2  font-semibold text-xs text-darkBlue  '
							>
								Cuil
							</label>
							{userToEdit.cuil != null ? (
								<input
									disabled={true}
									type='text'
									className={` pl-2 w-full py-1 xl:py-0 border border-darkBlue rounded-xl bg-lightGray mt-1`}
									{...register("cuil")}
								/>
							) : (
								<input
									type='text'
									className={`pl-2 w-full py-1 xl:py-0 border border-darkBlue rounded-xl bg-mostLighthBlue mt-1`}
									{...register("cuil", {
										required: {
											value: true,
											message: "Debes completar el campo",
										},
										minLength: {
											value: 12,
											message: " El campo debe tener 12 carateres",
										},
										maxLength: {
											value: 12,
											message: " El campo debe tener 12 carateres",
										},
										validate: (value) => {
											const regex = /^[0-9]*$/;
											const onlyNumbers = regex.test(value);

											return onlyNumbers
												? true
												: "El campo solo admite numeros.";
										},
									})}
								/>
							)}
							{errors.cuil && (
								<span
									className='pl-2 pt-2 flex text-xs font-bold text-red-700'
									style={{ color: "red" }}
								>
									{errors.cuil.message}
								</span>
							)}
						</div>
					</article>
					<article className=' flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12  ml-2 pt-2'>
							{!doctorLogged ? (
								<>
									<label
										htmlFor='password'
										className='ml-2  font-semibold text-xs text-darkBlue '
									>
										Obra Social
									</label>
									<input
										type='text'
										name='socialSecurity'
										className='pl-2 w-full py-1 xl:py-0 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
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
										className='ml-2  font-semibold text-xs text-darkBlue '
									>
										Especializacíon
									</label>
									<input
										type='text'
										name='specialty'
										className='pl-2 w-full py-1 xl:py-0 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
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
						<div className='w-11/12  ml-2 pt-2'>
							{!doctorLogged ? (
								<>
									<label
										htmlFor='plan'
										className='ml-2  font-semibold text-xs text-darkBlue '
									>
										Plan
									</label>
									<input
										type='text'
										name='planSocialSecurity'
										className='pl-2 w-full py-1 xl:py-0 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
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
										className='ml-2  font-semibold text-xs text-darkBlue '
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
										className='pl-2 w-full py-1 xl:py-0 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1 '
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
						<div className='w-11/12  ml-2 pt-2'>
							{!doctorLogged ? (
								<>
									<label
										htmlFor='afliedNumber'
										className='ml-2  font-semibold text-xs text-darkBlue '
									>
										N° de Afiliado
									</label>
									<input
										type='text'
										name='afliedNumber'
										className='pl-2 w-full py-1 xl:py-0 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
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
										className='ml-2  font-semibold text-xs text-darkBlue '
									>
										N° de Matrícula
									</label>
									{userToEdit.licensenumber ? (
										<input
											type='text'
											name='licensenumber'
											className={` ${
												userToEdit.licensenumber ? "flex" : "hidden"
											} pl-2 w-full py-1 xl:py-0 border border-darkBlue rounded-xl bg-lightGray mt-1`}
											disabled
											{...register("licensenumber")}
										/>
									) : (
										<input
											type='text'
											name='licensenumber'
											className={` ${
												!userToEdit.licensenumber ? "flex" : "hidden"
											}pl-2 w-full py-1 xl:py-0 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1`}
											{...register("licensenumber", {
												required: {
													value: true,
													message: "Debes completar el campo",
												},
											})}
										/>
									)}
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
							className={`w-1/3 py-3 xl:w-1/4 xl:m-auto xl:p-1 sm:text-sm sm:font-semibold md:font-bold px-4 border-2 border-darckBlue rounded-xl flex justify-center bg-darkBlue ${
								isDirty ? "hover:bg-green-700" : "hover:bg-green-900"
							} text-white hover:border-darkBlue  hover:text-mostLighthBlue hover:cursor-pointer`}
							disabled={!isDirty}
						>
							{" "}
							{isDirty ? "Guardar" : "Editar"}
						</button>
						<Toaster richColors />
						<button
							type='cancel'
							className={`w-1/3 py-3 xl:w-1/4 xl:m-auto xl:p-1 sm:text-sm sm:font-semibold md:font-bold px-4 border-2 rounded-xl  border-darkBlue flex justify-center bg-white text-darkBlue hover:bg-red ${
								!isDirty
									? "hover:bg-rose-950 hover:text-slate-600"
									: "hover:bg-red"
							} hover:text-white hover:cursor-pointer`}
							disabled={!isDirty}
							onClick={() => reset()}
						>
							{" "}
							Cancelar
						</button>
					</article>
				</form>
			) : (
				<p>Inicia Sesion</p> //solo para renderizar lo previo.
			)}
		</section>
	);
}
