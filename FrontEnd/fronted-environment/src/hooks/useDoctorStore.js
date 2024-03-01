import {
	fetchDoctors,
	getOneDoctor,
	updateDoctor,
	addDoctorService,
} from "../Service"; //,
import { DoctorStore } from "../StoreGeneral/DoctorsStore";
export function useDoctorStore() {
	const { addDoctor, addDoctorLogged, doctorLogged } = DoctorStore();

	console.log("hoo original doc.", doctorLogged);
	const getDoctorApiResponse = async () => {
		const doctorApiResponse = await fetchDoctors();
		await addDoctor(doctorApiResponse);
	};

	const validationDoctorToLogin = async (doctorToLogin) => {
		const userApiResponse = await getOneDoctor(doctorToLogin);
		return userApiResponse;
	};
	const addDoctorFromRegister = async (newDoctor) => {
		await addDoctorService(newDoctor);
		// CHEQUEAR SI ANDA
	};

	const editDoctorWithNewDate = async (newData) => {
		//poner async
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
		} = newData;

		const updatedData = {
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
		};
		console.log("edited doc :", updatedData);

		console.log("lo qie vino ", newData);
		await updateDoctor(updatedData); // Cuando tenga como editar en el service, habilitar
		addDoctorLogged(updatedData);
	};

	return {
		getDoctorApiResponse,
		validationDoctorToLogin,
		addDoctorFromRegister,
		editDoctorWithNewDate,
	};
}
