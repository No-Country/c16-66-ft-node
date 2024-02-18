import { create } from "zustand";

export const DoctorStore = create((set, get) => ({
	doctors: [],
	addDoctor: (newDoctor) => {
		// traigo el users que hay en el state
		const { doctors } = get();
		let doctorsCopy = [...doctors];
		const isArray = Array.isArray(newDoctor);
		// Dependiendo si renderiza por primera vez recibe [] o solo agrega un doctor, recibe {}
		isArray
			? (doctorsCopy = doctorsCopy[doctorsCopy.length] = newDoctor)
			: (doctorsCopy = [newDoctor]);
		set(() => ({ doctors: doctorsCopy }));
	},
	resetDoctor: () => set(() => ({ doctors: [] })),
}));
