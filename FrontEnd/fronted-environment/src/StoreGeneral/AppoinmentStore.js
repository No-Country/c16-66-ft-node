import { create } from "zustand";
import { persist } from "zustand/middleware";

export const AppoinmentStore = create(
	persist(
		(set, get) => ({
			appoinments: [],
			addAppoinments: (newAppoinments) => {
				// traigo el users que hay en el state
				const { appoinments } = get();
				let appoinmentsCopy = [...appoinments];
				const isArray = Array.isArray(newAppoinments);
				// Dependiendo si renderiza por primera vez recibe [] o solo agrega un usurario, recibe {}
				!isArray
					? (appoinmentsCopy = appoinmentsCopy[appoinmentsCopy.length] =
							newAppoinments)
					: (appoinmentsCopy = newAppoinments);
				set(() => ({ appoinments: appoinmentsCopy }));
			},
			resetAppoinments: () => {
				set(() => ({ appoinments: [] }));
			},
		}),
		{ name: "medConnectAppointmentsInfo" }
	)
);
