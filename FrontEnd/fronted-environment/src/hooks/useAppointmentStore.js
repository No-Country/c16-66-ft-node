import { fetchAppoinment } from "../Service";
import { AppoinmentStore } from "../StoreGeneral/AppoinmentStore";

export function useAppointmentStore() {
	const { addAppoinments, appoinments } = AppoinmentStore();
	const getAppointmentResponse = async () => {
		if (appoinments.length != 0) {
			const adminApiResponse = await fetchAppoinment();
			await addAppoinments(adminApiResponse);
		}
	};

	// const createNewReview = async (newData) => {
	// 	console.log("desde hook : ", newData);
	// 	await createReview(newData);
	// };

	const appointmentForId = (userId, role) => {
		console.log("llega :", userId, "y", role);
		console.log("los turnos son :", appoinments);
		let resutl;
		if (role == "Pacient") {
			resutl = appoinments.filter((date) => date.pacientId == userId);
		} else {
			role == "Doctor" &&
				(resutl = appoinments.filter((date) => date.doctorId == userId));
		}
		console.log("antes de ordenar el result :", resutl);
		const finalArray = resutl.sort((a, b) => a.date > b.date);
		return finalArray;
	};

	return { getAppointmentResponse, appointmentForId };
}
