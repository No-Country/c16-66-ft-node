import { fetchUsers, getOneUser } from "../Service";
import { UserStore } from "../StoreGeneral/UsersStore";
export function useUserStore() {
	const { addUser } = UserStore();

	const getUserApiResponse = async () => {
		const userApiResponse = await fetchUsers();
		await addUser(userApiResponse);
	};

	const validationUserToLogin = async (email, paswordForLoggin) => {
		const userApiResponse = await getOneUser(email);

		// await addUserLogged(userApiResponse[0]);
		return userApiResponse[0];
	};

	return { getUserApiResponse, validationUserToLogin };
}
