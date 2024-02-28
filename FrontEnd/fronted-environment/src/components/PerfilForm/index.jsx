/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import { useUserStore } from "../../hooks/userUserStore";
import { useDoctorStore } from "../../hooks/useDoctorStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export function PerfilForm() {
	const navigate = useNavigate();
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
	const nameArray = userToEdit.name.split(" ");
	const lastNameDb = nameArray[nameArray.length - 1];
	nameArray.pop();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: nameArray,
			lastName: lastNameDb,
			birthdate: userToEdit.birthdate,
			dni: userToEdit.dni,
			tel: userToEdit.tel,
			cuil: userToEdit.cuil,
			email: userToEdit.email,
			password: userToEdit.password,
			country: "Argentina",
			province: userToEdit.province,
			address: userToEdit.address,
			town: userToEdit.town,
		},
	});

	const onSubmitEdit = async (newData) => {
		event.preventDefault();
		const fullName = [...nameArray] + " " + lastNameDb;

		newData = { ...newData, name: fullName };

		!doctorLogged
			? (newData = { ...newData, id: userLogged.id })
			: (newData = { ...newData, id: doctorLogged.id });
		!doctorLogged
			? await editUserWithNewDate(newData)
			: await editDoctorWithNewDate(newData);

		navigate("/home");
	};

	return (
		<section
			style={{ maxWidth: "720px", maxHeight: "700px" }}
			className='overflow-scroll flex flex-col bg-whiteOpacity border-2 shadow-xl rounded-2xl border-gray p-8'
		>
			{" "}
			<div className='flex-col mb-1'>
				<h3 className='text-lg font-medium lg:text-2xl text-black'>
					Mis Datos Personales
				</h3>
				<p className='text-gray text-lg font-normal'>
					<span className='text-red'>*</span> Campo obligatorio
				</p>
			</div>
			{userToEdit ? (
				<form onSubmit={handleSubmit(onSubmitEdit)}>
					<article className='flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							<label
								htmlFor='name'
								className='ml-2  font-semibold text-base text-darkBlue '
							>
								Nombre <span className='text-red'>*</span>
							</label>
							<input
								type='text'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
								{...register("name")}
								disabled
							/>
						</div>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							<label
								htmlFor='lastName'
								className='ml-2  font-semibold text-base text-darkBlue  '
							>
								Apellidos <span className='text-red'>*</span>
							</label>
							<input
								type='text'
								className=' pl-2 w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
								{...register("lastName")}
								disabled
							/>
						</div>
					</article>
					<article className='flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							<label
								htmlFor='birthdate'
								className='ml-2  font-semibold text-base text-darkBlue '
							>
								Fecha de nacimiento <span className='text-red'>*</span>
							</label>
							<input
								type='date'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl bg-mostLighthBlue mt-1'
							/>
						</div>
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
								htmlFor='telefono'
								className='ml-2  font-semibold text-base text-darkBlue '
							>
								Teléfono <span className='text-red'>*</span>
							</label>
							<input
								type='text'
								name='tel'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
								{...register("tel", {
									required: {
										value: true,
										message: "Debes completar el campo",
									},
									minLength: {
										value: 12,
										message:
											"El telefono debe contener al menos 6 caracteres, numero de area y País",
									},
									// type: {
									// 	value: Number,
									// 	message: "Este campo solo recibe numeros",
									// }, HACER FUNCIONAR
								})}
							/>
							{errors.tel && (
								<span
									className='pl-2 pt-2 flex text-xs font-bold text-red-700'
									style={{ color: "red" }}
								>
									{errors.tel.message}
								</span>
							)}
						</div>
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
							<label
								htmlFor='email'
								className='ml-2  font-semibold text-base text-darkBlue '
							>
								Email
							</label>
							<input
								type='text'
								name='email'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
								{...register("email", {
									required: {
										value: true,
										message: "Debes escribir tu correo electronico",
									},
									validate: (value) => {
										const net = value.includes(".net");
										!net ? true : 'La app no hacepta el dominion ".net';
									},
									pattern: {
										value: /\S+@\S+\.\S+/,
										message: "El email debe ser valido",
									},
								})}
							/>
							{errors.email && (
								<span
									className='pl-2 pt-2 flex text-xs font-bold text-red-700'
									style={{ color: "red" }}
								>
									{errors.email.message}
								</span>
							)}
						</div>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							<label
								htmlFor='password'
								className='ml-2  font-semibold text-base text-darkBlue '
							>
								Contraseña
							</label>
							<input
								type='password'
								name='password'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
								{...register("password", {
									required: {
										value: true,
										message: "Debes completar el campo",
									},
									minLength: {
										value: 6,
										message:
											"La contraseña debe contener al menos 6 caracteres",
									},
								})}
							/>
							{errors.password && (
								<span
									className='pl-2 pt-2 flex text-xs font-bold text-red-700'
									style={{ color: "red" }}
								>
									{errors.password.message}
								</span>
							)}
						</div>
					</article>
					<div className='flex-col mt-3'>
						<h3 className=' font-medium text-2xl text-black'>Direccíon</h3>
						<p className='text-gray text-lg font-normal'>
							<span className='text-red'>*</span> Campo obligatorio
						</p>
					</div>
					<article className=' flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							<label
								htmlFor='pais'
								className='ml-2  font-semibold text-base text-darkBlue '
							>
								País <span className='text-red'>*</span>
							</label>
							<input
								type='text'
								name='country'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
								{...register("country", {
									required: {
										value: true,
										message: "Debes completar el campo",
									},
								})}
							/>
							{errors.country && (
								<span
									className='pl-2 pt-2 flex text-xs font-bold text-red-700'
									style={{ color: "red" }}
								>
									{errors.country.message}
								</span>
							)}
						</div>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							<label
								htmlFor='province'
								className='ml-2  font-semibold text-base text-darkBlue  '
							>
								Provincia <span className='text-red'>*</span>
							</label>
							<input
								type='text'
								name='province'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
								{...register("province", {
									required: {
										value: true,
										message: "Debes completar el campo",
									},
								})}
							/>
							{errors.province && (
								<span
									className='pl-2 pt-2 flex text-xs font-bold text-red-700'
									style={{ color: "red" }}
								>
									{errors.province.message}
								</span>
							)}
						</div>
					</article>
					<article className=' flex flex-col lg:flex-row justify-around gap-2'>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							<label
								htmlFor='adress'
								className='ml-2  font-semibold text-base text-darkBlue '
							>
								Dirección <span className='text-red'>*</span>
							</label>
							<input
								type='text'
								name='address'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
								{...register("address", {
									required: {
										value: true,
										message: "Debes completar el campo",
									},
								})}
							/>
							{errors.address && (
								<span
									className='pl-2 pt-2 flex text-xs font-bold text-red-700'
									style={{ color: "red" }}
								>
									{errors.address.message}
								</span>
							)}
						</div>
						<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
							<label
								htmlFor='lastaAme'
								className='ml-2  font-semibold text-base text-darkBlue  '
							>
								Localidad y Código Postal <span className='text-red'>*</span>
							</label>
							<input
								type='text'
								name='town'
								className='pl-2 w-full py-1 border border-darkBlue rounded-xl  bg-mostLighthBlue mt-1'
								{...register("town", {
									required: {
										value: true,
										message: "Debes completar el campo",
									},
								})}
							/>
							{errors.town && (
								<span
									className='pl-2 pt-2 flex text-xs font-bold text-red-700'
									style={{ color: "red" }}
								>
									{errors.town.message}
								</span>
							)}
						</div>
					</article>
					<article className='flex justify-around lg:justify-center lg:gap-20 mt-4'>
						<button
							type='submit'
							className='w-1/3 md:w-1/3 py-3 sm:text-sm md:text-lg sm:font-semibold md:font-bold px-4 border-2 border-darckBlue rounded-xl flex justify-center bg-darkBlue hover:bg-green-800 text-white hover:border-darkBlue  hover:text-mostLighthBlue hover:cursor-pointer'
						>
							Editar
						</button>

						<div
							type='cancel'
							className='w-1/3 md:w-1/3 py-3 sm:text-sm md:text-lg sm:font-semibold md:font-bold px-4 border-2 rounded-xl  border-red flex justify-center bg-white text-red hover:bg-red hover:text-white	 hover:cursor-pointer'
							onClick={() => reset()}
						>
							{" "}
							Cancelar
						</div>
					</article>
				</form>
			) : (
				<p>Inicia Secion</p>
			)}
		</section>
	);
}
