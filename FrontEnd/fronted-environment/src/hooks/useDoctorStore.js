import {
	fetchDoctors,
	getOneDoctor,
	addDoctor as addDoctorService,
	updateDoctor,
} from "../Service";
import { DoctorStore } from "../StoreGeneral/DoctorsStore";
export function useDoctorStore() {
	const { addDoctor, addDoctorLogged } = DoctorStore();

	const getDoctorApiResponse = async () => {
		const doctorApiResponse = await fetchDoctors();
		await addDoctor(doctorApiResponse);
	};

	const validationDoctorToLogin = async (email) => {
		const userApiResponse = await getOneDoctor(email);

		return userApiResponse[0];
	};
	const addDoctorFromRegister = async (newDoctor) => {
		const userApiResponse = await addDoctorService(newDoctor);
		console.log(userApiResponse);
	};

	const editDoctorWithNewDate = async (newData) => {
		console.log("en user hok");
		console.log(newData);
		await updateDoctor(newData);
		addDoctorLogged(newData);
	};

	return {
		getDoctorApiResponse,
		validationDoctorToLogin,
		addDoctorFromRegister,
		editDoctorWithNewDate,
	};
}
