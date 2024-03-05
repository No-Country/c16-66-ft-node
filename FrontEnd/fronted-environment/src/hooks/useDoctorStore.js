import {
	fetchDoctors,
	getOneDoctor,
	updateDoctor,
	addDoctorService,
} from "../Service"; //,
import { DoctorStore } from "../StoreGeneral/DoctorsStore";
export function useDoctorStore() {
	const { addDoctor, addDoctorLogged, doctorLogged, doctors } = DoctorStore();

	console.log("hoo original doc.", doctorLogged);
	const getDoctorApiResponse = async () => {
		if (!doctors) {
			const doctorApiResponse = await fetchDoctors();
			await addDoctor(doctorApiResponse);
		}
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
		console.log("lo qie hania ", doctorLogged);
		console.log("lo qie vino ", newData);
		console.log("edited doctor :", updatedData);
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
