import { create } from "zustand";
import { persist } from "zustand/middleware";

//

export const DoctorStore = create(
	persist(
		(set, get) => ({
			doctors: [],
			doctorLogged: null,
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
			addDoctorLogged: (doctor) => {
				set(() => ({ doctorLogged: doctor }));
			},
			resetDoctor: () => set(() => ({ doctors: [] })),
		}),
		{ name: "medConnectDoctorInfo" }
	)
);
