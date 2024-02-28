import {
	fetchUsers,
	getOneUser,
	addUser as addUserService,
	updateUser,
} from "../Service";
import { UserStore } from "../StoreGeneral/UsersStore";
export function useUserStore() {
	const { addUser, addUserLogged } = UserStore();

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

	const editUserWithNewDate = async (newData) => {
		console.log("en hook");
		console.log(newData);
		await updateUser(newData);
		addUserLogged(newData);
	};

	return {
		getUserApiResponse,
		validationUserToLogin,
		addUserFromRegister,
		editUserWithNewDate,
	};
}
