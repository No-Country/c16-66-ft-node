import { create } from "zustand";

export const AdminStore = create((set, get) => ({
	admins: [],
	addAdmin: (newAdmin) => {
		// traigo el users que hay en el state
		const { admins } = get();
		let adminsCopy;
		const isArray = Array.isArray(newAdmin);
		// Dependiendo si renderiza por primera vez recibe [] o solo agrega un admin, recibe {}
		isArray ? (adminsCopy = [...admins, newAdmin]) : (adminsCopy = [newAdmin]);
		set(() => ({ admins: adminsCopy }));
	},
	resetAdmin: () => set(() => ({ admins: [] })),
}));
