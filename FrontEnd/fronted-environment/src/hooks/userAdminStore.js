import { fetchAdmin } from "../Service";
import { AdminStore } from "../StoreGeneral/AdminsStore";
export function useAdminStore() {
	const { addAdmin } = AdminStore();

	const getAdminApiResponse = async () => {
		const adminApiResponse = await fetchAdmin();
		await addAdmin(adminApiResponse);
	};

	return { getAdminApiResponse };
}
