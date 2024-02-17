import { fetchDoctors } from "../Service";
import { DoctorStore } from "../StoreGeneral/DoctorsStore";
export function useDoctorStore() {
	const { addDoctor } = DoctorStore();

	const getDoctorApiResponse = async () => {
		const doctorApiResponse = await fetchDoctors();
		await addDoctor(doctorApiResponse);
	};

	return { getDoctorApiResponse };
}
