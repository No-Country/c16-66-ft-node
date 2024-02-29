import { useNavigate } from 'react-router-dom'
import logo from '../../assets/FakeLOGO/Logo 3.png'

export function NavHome () {
    const navigate = useNavigate()
    return (
        <header className='w-full footerFinal h-16 py-2.5 flex p-6 sm:px-0 justify-end sm:justify-center shadow-lg shadow-black'>
				<img
					className='w-auto h-10 sm:h-12 cursor-pointer'
					src={logo}
					alt='Imagen del logo de la empresa'
                    onClick={()=>navigate('/')}
				/>
		</header>
    )
}