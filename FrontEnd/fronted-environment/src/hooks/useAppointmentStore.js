import { fetchAppoinment } from "../Service";
import { AppoinmentStore } from "../StoreGeneral/AppoinmentStore";

export function useAppointmentStore() {
	const { addAppoinments } = AppoinmentStore();
	const getAppointmentResponse = async () => {
		const adminApiResponse = await fetchAppoinment();
		await addAppoinments(adminApiResponse);
	};

	// const createNewReview = async (newData) => {
	// 	console.log("desde hook : ", newData);
	// 	await createReview(newData);
	// };

	return { getAppointmentResponse };
}
