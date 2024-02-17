import { create } from "zustand";

export const useAdminStore = create((set) => ({
	admins: [],
	addAdmin: (newAdmin) => set(() => ({ admins: newAdmin })),
	resetAdmin: () => set(() => ({ admins: [] })),
}));
