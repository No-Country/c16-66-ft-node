import { fetchUsers, getOneUser, addUser as addUserService } from "../Service";
import { UserStore } from "../StoreGeneral/UsersStore";
export function useUserStore() {
	const { addUser } = UserStore();

	const getUserApiResponse = async () => {
		const userApiResponse = await fetchUsers();
		await addUser(userApiResponse);
	};

	const validationUserToLogin = async (email) => {
		const userApiResponse = await getOneUser(email);

		// await addUserLogged(userApiResponse[0]);
		return userApiResponse[0];
	};

	const addUserFromRegister = async (newUser) => {
		console.log("desde el add hook");
		console.log(newUser);
		const userApiResponse = await addUserService(newUser);

		console.log(userApiResponse);
		// await addUserLogged(userApiResponse[0]);
		// return userApiResponse[0];
	};

	return { getUserApiResponse, validationUserToLogin, addUserFromRegister };
}
