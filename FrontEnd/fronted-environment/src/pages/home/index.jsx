import { CardPacientItem } from "../../components/CardPacientItem";
import { AsideComponent } from "../../components/AsideComponent/index";
import { UserStore } from "../../StoreGeneral/UsersStore";
import logo from "../../assets/FakeLOGO/Logo 3.png";
import "./home.css";
export function Home() {
	const { users } = UserStore();
	console.log(users);
	return (
		<>
			<body style={{ width: "1440px", height: "1024px" }} className='flex'>
				<AsideComponent />
				<main>
					<header
						style={{ width: "1320px" }}
						className=' h-24 py-2.5 flex justify-center'
					>
						<img
							className=' w-72 h-16'
							src={logo}
							alt='Imagen del logo de la empresa'
						/>
					</header>
					<section
						style={{ width: "810px", height: "634px" }}
						className='ml-10 mt-2 secction__Principal-doctorHome flex py-4 px-2  items-start gap-10 shrink-0 rounded-3xl'
					>
						<div className='w-96 flex-col self-start gap-3'>
							{users?.map((user) => {
								console.log(user);
								return <CardPacientItem key={user.id} user={user} />;
							})}
						</div>
					</section>
				</main>
			</body>
		</>
	);
}
