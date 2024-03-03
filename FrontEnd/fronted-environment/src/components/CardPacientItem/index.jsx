/* eslint-disable react/prop-types */
// import FakePacient1 from "../../assets/imgFakePacient/FakePacient1.png";
import defaultImg from "../../assets/imgFakePacient/userDefualtImg.png";
import { Avatar } from "@mui/material";
const nowInMs = Date.now();
let today = new Date(nowInMs).toLocaleString().split(" ");
today = today[0];

export function CardPacientItem({ user, handlerSelect }) {
	return (
		<div
			className=' w-11/12 h-2/3 mb-4 py-1 px-2 flex  gap-1 rounded-2xl  bg-white hover:bg-mostLighthBlue flex-nowrap'
			key={user.id}
			onClick={() => handlerSelect(user?.id)}
		>
			<figure className='w-11 h-11 rounded-full m-auto overflow-hidden'>
				{/* Cambiar imagen por la que venga de db */}
				<Avatar
					className='object-cover object-center'
					src={user.image ? user.image : defaultImg}
					alt={`Imagen de Perfil del paciente ${user?.name}`}
				/>
			</figure>
			<article
				// style={{ width: "135px" }}
				className='w-full flex-col justify-between truncate	'
			>
				<div className=''>
					<h3 className='text-black h-1/6 font-semibold text-base truncate'>
						{user?.name}
					</h3>
				</div>
				<section className='h-5/6 w-full pl-1 flex justify-between'>
					<div>
						{user.specialty != "" && <strong> {user?.specialty} </strong>}
						{!user.specialty && <p>Turno :</p>}
						<p className='text-gray text-sm font-light truncate'>
							{today}
							{/* Cambiar today por fecha del turno */}
						</p>
					</div>
					<article className='lg:w-5/12 h-fit	 flex mb-2  align-middle gap-4 rounded-2xl'>
						<div
							// style={{ width: "78px" }}
							className='w-fit lg:w-full h-full bg-lightBlue flex py-1 px-1 gap-2.5 justify-center rounded-lg'
						>
							<p
								style={{
									fontFamily: "Roboto",
									letterSpacing: " 0.1px",
								}}
								className=' text-darkBlue text-center font-normal truncate'
							>
								10:00 hs.
								{/* Cambiar por horario del turno */}
							</p>
						</div>
					</article>
				</section>
			</article>
		</div>
	);
}
