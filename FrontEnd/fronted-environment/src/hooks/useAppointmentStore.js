import { fetchAppoinment } from "../Service";
import { AppoinmentStore } from "../StoreGeneral/AppoinmentStore";

export function useAppointmentStore() {
	
	const { addAppoinments, appoinments } = AppoinmentStore();

	const getAppointmentResponse = async () => {
		const adminApiResponse = await fetchAppoinment();
		await addAppoinments(adminApiResponse);
	};

	// const createNewReview = async (newData) => {
	// 	console.log("desde hook : ", newData);
	// 	await createReview(newData);
	// };

	const appointmentForId = (userId, role) => {
		console.log("desde el hook :", appoinments);
		let filtred;
		if (role == "pacient") {
			console.log("entro a paciente");
			filtred = appoinments.filter((date) => date.pacientId == userId);
		} else if (role == "doctor") {
			console.log("entro a doctor");
			filtred = appoinments.filter((date) => date.doctorId == userId);

			console.log("en doctor: ", filtred);
		}
		console.log("antes de ordenar el result :", filtred);
		const finalResponse = filtred.sort((a, b) => a.date > b.date);
		return finalResponse;
	};

	return { getAppointmentResponse, appointmentForId };
}
