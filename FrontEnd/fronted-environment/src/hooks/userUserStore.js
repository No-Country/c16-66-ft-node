import {
	fetchUsers,
	// getOneUser,
	addUser as addUserService,
	updateUser,
	logginApi,
} from "../Service";
import { UserStore } from "../StoreGeneral/UsersStore";
export function useUserStore() {
	const { addUser, addUserLogged } = UserStore();

	const getUserApiResponse = async () => {
		const userApiResponse = await fetchUsers();
		await addUser(userApiResponse);
	};

	const validationUserToLogin = async (userToLogin) => {
		// const { email, password } = userToLogin;
		// const userApiResponse = await getOneUser(email);
		const userApiResponse = await logginApi(userToLogin);
		// await addUserLogged(userApiResponse[0]);
		console.log("Respuesta:", userApiResponse);
		return userApiResponse;
	};

	const addUserFromRegister = async (newUser) => {
		console.log("desde el add hook");
		console.log(newUser);
		const userApiResponse = await addUserService(newUser);

		console.log(userApiResponse);
		// await addUserLogged(userApiResponse[0]);
		// return userApiResponse[0];
	};

	const editUserWithNewDate = async (newData) => {
		console.log("en hook");
		console.log(newData);
		await addUserLogged(newData);
		await updateUser(newData);
	};

	return {
		getUserApiResponse,
		validationUserToLogin,
		addUserFromRegister,
		editUserWithNewDate,
	};
}
