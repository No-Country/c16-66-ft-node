import { useNavigate } from "react-router"

/* eslint-disable react/prop-types */
export function CardAutogestion ({img, border, user}) {
    const navigate = useNavigate()
   
    const handleLogin = () => {
        // navigate(`/login/${user}`) despues hacer las rutas a donde sea cuando tengamos las vistas distintas de login de doc, patient, o adm
        navigate('/login')
    }

    return (
        <div className={`shadow w-fit h-2/3 rounded-xl border-2 ${border} m-2 mr-8 cursor-pointer`}onClick={handleLogin} >
            <img src={img} className='h-fit'/>
            <h3 className="text-2xl p-10 text-center font-bold">{user}</h3>
        </div>
    ) 
}