import { create } from "zustand";

export const DoctorStore = create((set, get) => ({
	doctors: [],
	addDoctor: (newDoctor) => {
		// traigo el users que hay en el state
		const { doctors } = get();
		let doctorsCopy;
		const isArray = Array.isArray(newDoctor);
		// Dependiendo si renderiza por primera vez recibe [] o solo agrega un doctor, recibe {}
		isArray
			? (doctorsCopy = [...doctors, newDoctor])
			: (doctorsCopy = [newDoctor]);
		set(() => ({ doctors: doctorsCopy }));

		set(() => ({ doctors: newDoctor }));
	},
	resetDoctor: () => set(() => ({ doctors: [] })),
}));
