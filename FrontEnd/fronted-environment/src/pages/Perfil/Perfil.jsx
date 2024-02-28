import { useEffect, useState } from 'react'
import {AsideComponent} from '../../components/aside/index'
import { DoctorStore } from '../../StoreGeneral/DoctorsStore'
import { UserStore } from '../../StoreGeneral/UsersStore'
import { PerfilForm } from '../../components/PerfilForm/index'
import logo from '../../assets/FakeLOGO/Logo 3.png'
import doctor from '../../assets/imgFakePacient/FakePacient1.png'
import historial from '../../assets/svg/historialProfesional.svg'
import matricula from '../../assets/svg/matricula.svg'
import personEdit from '../../assets/svg/person_edit.svg'
import '../../pages/PrincipalHome/index.css'
import HistoryClinic from '../../components/PerfilForm/HistoryClinic'
import HistoryProfesional from '../../components/PerfilForm/HistoryProfesional'

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
       setBtn1(true)
       setBtn2(false)
       setBtn3(false)
    }
    const handleClick2 = () => {
        setBtn1(false)
        setBtn2(true)
        setBtn3(false)
    }
    const handleClick3 = () => {
        setBtn1(false)
        setBtn2(false)
        setBtn3(true)
    }
  
    return (
        <main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
            <header className='w-full footerFinal h-16 py-2.5 flex p-6 sm:px-0 justify-end sm:justify-center shadow-lg shadow-black'>
				<img
					className='w-auto h-10 sm:h-12'
					src={logo}
					alt='Imagen del logo de la empresa'
				/>
			</header>
            <section className='h-full w-10/12 lg:w-11/12 self-end bg-bgLightGreen w-inherit'>

                <div className='flex flex-col justify-center items-center mx-auto md:w-2/5 md:pt-6 md:ml-0 md:h-2/6 md:justify-start'>
                    <img src={doctor} alt='image doctor' className=' rounded-full w-1/5 md:w-1/3 h-auto lg:mb-4'></img>
                    <h3 className='text-xs md:pt-1 md:text-sm lg:text-base font-semibold'>{user.name}</h3>
                    <p className='text-xs md:pt-1 md:text-sm lg:text-base text-gray mb-2 lg:mb-4'>{`${user.birthdate} años`}</p>
                </div>

                <div className='flex overflow-x-auto p-1 w-full h-12 mb-4 md:flex-col md:w-2/5 md:h-fit md:items-center lg:mt-24'>
                    <button 
                    onClick={handleClick1}
                    className='items-center p-1 rounded-xl bg-white md:bg-transparent hover:bg-whiteOpacity mr-1 flex text-xs w-fit md:p-7 md:text-sm md:mb-1 md:w-64 text-center lg:text-base lg:p-3 lg:'><img src={personEdit} className='h-5 md:h-6 md:pr-1 lg:h-7 lg:pr-2'/>Mis datos personales</button>
                    
                    <button 
                    onClick={handleClick2}
                    className='items-center p-1 rounded-xl bg-white md:bg-transparent hover:bg-whiteOpacity mr-1 flex text-xs w-fit md:p-7 md:text-sm md:mb-1 md:w-64 text-center lg:text-base lg:p-3 lg:'><img src={matricula} className='h-5 md:h-6 md:pr-1 lg:h-7 lg:pr-2'/>
                    {
                        userLogged ? 'Mi credencial' : 'Mi matrícula'
                    }
                    </button>
                    <button 
                    onClick={handleClick3}
                    className='items-center p-1 rounded-xl bg-white md:bg-transparent hover:bg-whiteOpacity mr-1 flex text-xs w-fit md:p-7 md:text-sm md:mb-1 md:w-64 text-center lg:text-base lg:p-3 lg:'><img src={historial} className='h-5 md:h-6 md:pr-1 lg:h-7 lg:pr-2'/>
                    {
                        userLogged ? 'Mi historial médico' : 'Mi historial profesional'
                    }
                    </button>
                </div>

                <div style={{ maxHeight:'615px'}} className='w-11/12 mt-6 mx-auto p-2 overflow-y-auto rounded-xl md:fixed md:top-24 md:right-1 md:w-1/2'>  
                {
                    btn1 && <PerfilForm userLogged={user}/>
                }
                { 
                   btn2  && 
                   <>
                {
                    userLogged ? 'Mi credencial' : 'Mi matrícula'
                } 
                   </> 
                    
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