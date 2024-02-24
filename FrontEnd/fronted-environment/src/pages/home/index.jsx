import { AsideComponent } from "../../components/aside/index";
import { ViewFromLg } from "./ViewFromLg";
import { ViewFromSm } from "./ViewFromSm";

//
import "./home.css";

//

export default function Home() {
	return (
		<>
			<main className='flex w-screen h-screen box-border z-0'>
				<AsideComponent />
				<main className='hidden w-9/12 lg:flex' style={{ marginLeft: "8%" }}>
					<ViewFromLg />
					{/* se ve a partir de 1024 px */}
				</main>
				<main
					className='hidden w-10/12 xs:hidden sm:flex lg:hidden xl:hidden'
					style={{ marginLeft: "20%" }}
				>
					<ViewFromSm />
					{/* se renderiza a partir de 640px  */}
				</main>
			</main>
		</>
	);
}
