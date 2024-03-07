import { useNavigate } from "react-router";

/* eslint-disable react/prop-types */
export function CardAutogestion({ img, border, user }) {
	const navigate = useNavigate();

	const handleLogin = () => {
		
		if (user === 'Paciente'){
		navigate("/login/pacient")
		} else if (user === 'Especialista médico'){
			navigate("/login/doctor")
		} else {
			navigate("/login/admin")
		}
	}

	return (
		<div
			className={`shadow w-fit h-2/3 rounded-xl border-2 ${border} m-2 mr-8 cursor-pointer`}
			onClick={handleLogin}
		>
			<img src={img} className='h-fit' />
			<h3 className='text-xl p-10 text-center font-bold'>{user}</h3>
		</div>
	);
}
