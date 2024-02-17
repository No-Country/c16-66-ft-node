import { create } from "zustand";

export const useDoctorStore = create((set) => ({
	doctors: [],
	addDoctor: (newDoctor) => set(() => ({ doctors: newDoctor })),
	resetDoctor: () => set(() => ({ doctors: [] })),
}));
