import { CardPacientItem } from "../CardPacientItem/index";
import { UserStore } from "../../StoreGeneral/UsersStore";
export function Home() {
	const { users } = UserStore();
	console.log(users);
	return (
		<>
			<div>
				{users?.map((user) => {
					console.log(user);
					return <CardPacientItem key={user.id} {...user} />;
				})}
			</div>
		</>
	);
}
