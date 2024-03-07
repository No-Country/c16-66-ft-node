import { fetchAppoinment,addApoinment as addApoinmentFromService } from "../Service";
import { AppoinmentStore } from "../StoreGeneral/AppoinmentStore";


export function useAppointmentStore() {
	
	const { addAppoinments, appoinments } = AppoinmentStore();

	const getAppointmentResponse = async () => {
		const adminApiResponse = await fetchAppoinment();
		await addAppoinments(adminApiResponse);
	};
	const addNewApoinment = async (newAppoinment) => {
		// impactar la Api
		await addApoinmentFromService(newAppoinment);
		// para impactar el store ---- mirar si anda
		await addAppoinments(newAppoinment)
		
		// CHEQUEAR SI ANDA
	};

	// const createNewReview = async (newData) => {
	// 	console.log("desde hook : ", newData);
	// 	await createReview(newData);
	// };

	const appointmentForId = (userId, role) => {
		//console.log("desde el hook :", appoinments);
		let filtred;
		if (role == "pacient") {
		
			filtred = appoinments.filter((date) => date.pacientId == userId);
		} else if (role == "doctor") {
		
			filtred = appoinments.filter((date) => date.doctorId == userId)||[];

			console.log("en doctor: ", filtred);
		}
		let finalResponse = [];

		if(filtred){	
		finalResponse = filtred.sort((a, b) => a.date > b.date);
		}
	

		return finalResponse;
	};


	return { getAppointmentResponse, appointmentForId,addNewApoinment };
}
