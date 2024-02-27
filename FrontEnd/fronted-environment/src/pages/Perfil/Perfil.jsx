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
  console.log(btn1,btn2,btn3)
    return (
        <main className='flex flex-col w-screen h-screen box-border z-0 border-2'>
			<AsideComponent />
            <header className='w-full footerFinal h-16 py-2.5 flex p-6 sm:px-0 justify-end sm:justify-center shadow-lg shadow-black'>
				<img
					className='w-auto h-10 sm:h-12'
					src={logo}
					alt='Imagen del logo de la empresa'
				/>
			</header>
            <section style={{ marginLeft: "17%",
  marginTop: "1%", maxHeight:'100vh' }} className='h-full bg-bgLightGreen w-inherit  border-2'>

                <div className='flex flex-col justify-center items-center mx-auto'>
                    <img src={doctor} alt='image doctor' className=' rounded-full w-1/4 h-auto'></img>
                    <h3 className='text-xs font-semibold'>{user.name}</h3>
                    <p className='text-xs text-gray mb-2'>{`${user.birthdate} años`}</p>
                </div>

                <div className='flex overflow-x-auto p-1 w-full h-12 mb-4'>
                    <button 
                    onClick={handleClick1}
                    className='items-center p-1 rounded-xl bg-white hover:bg-mostLighthBlue mr-1 flex text-xs w-fit'><img src={personEdit} className='h-5'/>Mis datos personales</button>
                    <button 
                    onClick={handleClick2}
                    className='items-center p-1 rounded-xl bg-white hover:bg-mostLighthBlue mr-1 flex text-xs w-fit'><img src={matricula} className='h-5'/>Mi matrícula</button>
                    <button 
                    onClick={handleClick3}
                    className='items-center p-1 rounded-xl bg-white hover:bg-mostLighthBlue mr-1 flex text-xs w-fit'><img src={historial} className='h-5'/>Mi historial profesional</button>
                </div>

                <div className='w-full p-2 h-5/6 overflow-scroll'>  
                {
                    btn1 && <PerfilForm userLogged={user}/>
                }
                { 
                   btn2  &&  <p>Matricula</p> 
                    
                } 
                { 
                    btn3  && <p>Historial</p> 
                }    
                </div>
                

                    
            </section>
        </main>
    )
}