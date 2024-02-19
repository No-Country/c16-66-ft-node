import { CardPacientItem } from "../../components/CardPacientItem";
import { UserStore } from "../../StoreGeneral/UsersStore";
export function Home() {
	const { users } = UserStore();
	console.log(users);
	return (
		<>
			<div className='flex-col gap-4'>
				{users?.map((user) => {
					console.log(user);
					return <CardPacientItem key={user.id} {...user} />;
				})}
			</div>
		</>
	);
}
