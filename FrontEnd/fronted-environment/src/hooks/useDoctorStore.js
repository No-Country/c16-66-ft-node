import {
	fetchDoctors,
	getOneDoctor,
	updateDoctor,
	addDoctorService,
} from "../Service"; //,
import { DoctorStore } from "../StoreGeneral/DoctorsStore";
export function useDoctorStore() {
	const { addDoctor, addDoctorLogged, doctorLogged } = DoctorStore();

	const getDoctorApiResponse = async () => {
		const doctorApiResponse = await fetchDoctors();
		console.log("recibe el hook de login doctor, esto :", doctorApiResponse);
		(await doctorApiResponse) != undefined && addDoctor(doctorApiResponse);
		return doctorApiResponse;
	};

	const validationDoctorToLogin = async (doctorToLogin) => {
		const doctorApiResponse = await getOneDoctor(doctorToLogin);
		return doctorApiResponse;
	};
	const addDoctorFromRegister = async (newDoctor) => {
		await addDoctorService(newDoctor);
		// CHEQUEAR SI ANDA
	};

	const editDoctorWithNewDate = async (newData) => {
		//poner async
		let img;
		const {
			name,
			dni,
			cuil,
			licensenumber,
			SocialSecurity,
			lastname,
			birthdate,
			telephone,
			email,
			password,
			country,
			province,
			adress,
			specialty,
			town,
		} = newData;

		let updatedData = {
			...doctorLogged,
			name,
			dni,
			cuil,
			licensenumber,
			SocialSecurity,
			lastname,
			birthdate,
			telephone,
			email,
			password,
			country,
			province,
			adress,
			specialty,
			town,
		};
		if (newData.image) {
			img = newData.image;
			updatedData = {
				...doctorLogged,
				image: img,
			};
		}

		updateDoctor(updatedData); // Cuando tenga como editar en el service, habilitar
		addDoctorLogged(updatedData);
	};

	return {
		getDoctorApiResponse,
		validationDoctorToLogin,
		addDoctorFromRegister,
		editDoctorWithNewDate,
	};
}
