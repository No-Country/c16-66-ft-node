import {
	fetchDoctors,
	getOneDoctor,
	addDoctor as addDoctorService,
} from "../Service";
import { DoctorStore } from "../StoreGeneral/DoctorsStore";
export function useDoctorStore() {
	const { addDoctor } = DoctorStore();

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

	return {
		getDoctorApiResponse,
		validationDoctorToLogin,
		addDoctorFromRegister,
	};
}
