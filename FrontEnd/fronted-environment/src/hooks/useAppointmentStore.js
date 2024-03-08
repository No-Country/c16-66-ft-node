/* eslint-disable no-mixed-spaces-and-tabs */
import {
	fetchAppoinment,
	addApoinment as addApoinmentFromService,
} from "../Service";
import { AppoinmentStore } from "../StoreGeneral/AppoinmentStore";
import { DoctorStore } from "../StoreGeneral/DoctorsStore";
import { UserStore } from "../StoreGeneral/UsersStore";

export function useAppointmentStore() {
	const { doctors } = DoctorStore();
	const { users } = UserStore();
	const { addAppoinments, appoinments } = AppoinmentStore();

	const getAppointmentResponse = async () => {
		const adminApiResponse = await fetchAppoinment();
		await addAppoinments(adminApiResponse);
	};
	const addNewApoinment = async (newAppoinment) => {
		// impactar la Api
		await addApoinmentFromService(newAppoinment);
		// para impactar el store ---- mirar si anda
		await addAppoinments(newAppoinment);

		// CHEQUEAR SI ANDA
	};

	// const createNewReview = async (newData) => {
	// 	console.log("desde hook : ", newData);
	// 	await createReview(newData);
	// };

	const appointmentForId = (user, role) => {
		let filtred;
		if (role == "pacient" && user) {
			user.pacientId != undefined &&
				(filtred = appoinments.filter(
					(date) => date.pacientId == user.pacientId
				));
			user.id &&
				(filtred = appoinments.filter((date) => date.pacientId == user.id));
		} else if (role == "doctor" && user) {
			user.doctorId != undefined &&
				(filtred = appoinments.filter(
					(date) => date.doctorId == user.doctorId
				));
			user.id &&
				(filtred = appoinments.filter((date) => date.doctorId == user.id));
		}
		let appointsForDate = [];

		if (filtred) {
			appointsForDate = filtred.sort((a, b) => a.date > b.date);
		}

		let finalResponse = [];

		if (role == "pacient") {
			for (let i = 0; i < appointsForDate.length; i++) {
				let objetforResponse = { ...appointsForDate[i] };
				let Info = doctors.filter(
					(doc) => doc.doctorId === appointsForDate[i].doctorId
				);
				objetforResponse = { ...objetforResponse, relationInfo: Info[0] };

				finalResponse = [...finalResponse, objetforResponse];
			}
		} else if (role == "doctor") {
			for (let i = 0; i < appointsForDate.length; i++) {
				let objetforResponse = { ...appointsForDate[i] };
				let Info = users.filter(
					(pacient) => pacient.id === appointsForDate[i].id // ver sino anda, con pacientID
				);
				objetforResponse = { ...objetforResponse, relationInfo: Info[0] };
				finalResponse = [...finalResponse, objetforResponse];
			}
		}
		return finalResponse;
	};

	return { getAppointmentResponse, appointmentForId, addNewApoinment };
}
