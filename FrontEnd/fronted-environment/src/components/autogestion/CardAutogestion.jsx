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
			<div className="w-64 min-w-64 max-w-64 h-64 min-h-64 max-h-64">
			<img src={img} className=' object-contain w-full' />
			</div>
			<h3 className='text-xl p-10 text-center font-bold hover:text-darkBlue'>{user}</h3>
		</div>
	);
}
