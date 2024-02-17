import { create } from "zustand";

export const useUserStore = create((set) => ({
	users: [],
	addUser: (newUser) => set(() => ({ users: newUser })),
	resetUser: () => set(() => ({ users: [] })),
}));
