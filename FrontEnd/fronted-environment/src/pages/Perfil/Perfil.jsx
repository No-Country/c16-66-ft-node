import { useEffect, useState } from 'react'
import {AsideComponent} from '../../components/aside/index'
import { DoctorStore } from '../../StoreGeneral/DoctorsStore'
import { UserStore } from '../../StoreGeneral/UsersStore'
import { PerfilForm } from '../../components/PerfilForm/index'
// import doctor from '../../assets/imgFakePacient/FakePacient1.png'
import historial from '../../assets/svg/historialProfesional.svg'
import matricula from '../../assets/svg/matricula.svg'
import personEdit from '../../assets/svg/person_edit.svg'
import '../../pages/PrincipalHome/index.css'
import HistoryClinic from '../../components/PerfilForm/HistoryClinic'
import HistoryProfesional from '../../components/PerfilForm/HistoryProfesional'
import { NavHome } from '../../components/NavComponent.js/NavHome'
import { CredencialMatriculaForm } from '../../components/CredencialMatriculaForm'

export default function Perfil () {
    const { doctorLogged } = DoctorStore();
    const { userLogged } = UserStore();
    const [user, setUser]= useState([])
    const [btn1, setBtn1] = useState(true)
    const [btn2, setBtn2] = useState(false)
    const [btn3, setBtn3] = useState(false)
   

    useEffect(()=>{
        if (doctorLogged !== null) {
            setUser(doctorLogged)
        } else if (userLogged !== null) {
            setUser(userLogged)
        }
    },[doctorLogged, userLogged])

	const handleClick1 = () => {
		setBtn1(true);
		setBtn2(false);
		setBtn3(false);
	};
	const handleClick2 = () => {
		setBtn1(false);
		setBtn2(true);
		setBtn3(false);
	};
	const handleClick3 = () => {
		setBtn1(false);
		setBtn2(false);
		setBtn3(true);
	};

	return (
		<main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
            <NavHome />
            <section style={{maxHeight: '1024px'}} className='mt-0.5 h-full w-10/12 lg:w-11/12 self-end bg-bgLightGreen w-inherit'>

                <div className='flex flex-col justify-center items-center mx-auto md:w-2/5 md:pt-6 md:ml-0 md:h-2/6 md:justify-start mb-4 md:mb-0'>
                    <img src={user.image} alt='image user' className=' rounded-full w-1/5 md:w-1/3 h-auto lg:mb-4'></img>
                    <h3 className='text-xs md:pt-1 md:text-sm lg:text-base font-semibold'>{user.name}</h3>
                    <p className='text-xs md:pt-1 md:text-sm lg:text-base text-gray mb-2 lg:mb-4'>{`${user.birthdate} años`}</p>
                </div>

				<div className='flex flex-nowrap mx-auto justify-between overflow-x-scroll md:overflow-hidden p-1 h-12 mb-12 md:flex-col md:mx-0 md:w-2/5 md:h-fit md:items-center lg:mt-24 md:mb-4'>
					<button
						onClick={handleClick1}
						className='items-center w-64 min-w-44 p-1 flex flex-nowrap rounded-xl bg-white md:bg-transparent hover:bg-whiteOpacity mr-1 text-xs md:p-7 md:text-sm md:mb-1 md:w-64 text-center lg:text-base lg:p-3 lg:'
  
					>
						<img
							src={personEdit}
							className='h-5 md:h-6 pr-1 lg:h-7 lg:pr-2'
						/>
						Mis datos personales
					</button>

					<button
						onClick={handleClick2}
						className='items-center p-1 w-64 min-w-44 flex flex-nowrap rounded-xl bg-white md:bg-transparent hover:bg-whiteOpacity mr-1 text-xs md:p-7 md:text-sm md:mb-1 md:w-64 text-center lg:text-base lg:p-3 lg:'
  
					>
						<img
							src={matricula}
							className='h-5 md:h-6 pr-1 lg:h-7 lg:pr-2'
						/>
						{userLogged ? "Mi credencial" : "Mi matrícula"}
					</button>
					<button
						onClick={handleClick3}
						className='items-center p-1 w-64 min-w-44 flex flex-nowrap rounded-xl bg-white md:bg-transparent hover:bg-whiteOpacity mr-1 text-xs md:p-7 md:text-sm md:mb-1 md:w-64 text-center lg:text-base lg:p-3 lg:'
  
					>
						<img
							src={historial}
							className='h-5 md:h-6 pr-1 lg:h-7 lg:pr-2'
						/>
						{userLogged ? "Mi historial médico" : "Mi historial profesional"}
					</button>
				</div>

                <div style={{ maxHeight:'470px'}} className='w-11/12 mt-6 mx-auto overflow-y-auto rounded-xl md:fixed md:top-16 md:right-5 md:w-2/5'>  
                {
                    btn1 && <PerfilForm userLogged={user}/>
                }
                { 
                   btn2  && 
                  <CredencialMatriculaForm /> 
                    
                } 
                { 
                    btn3  && <>{
                        userLogged ? <HistoryClinic /> : <HistoryProfesional />
                    }</> 
                }    
                </div>    
            </section>
        </main>
    )
}
