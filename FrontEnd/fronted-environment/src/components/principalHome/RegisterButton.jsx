/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RegisterButton ({arrowDown ,text, className, className2, btn}) {
    const [register, setRegister] = useState(false)
    const navigate = useNavigate()
    
    return (
        <>
            <button onClick={()=>setRegister(!register)} className={className}>
            {text} 
                <img src={arrowDown} className='w-5' alt='flecha selectora hacia abajo' /> 
            </button>
            {
                register && 

                <section className={className2}>
                    <button className={btn} onClick={()=>{navigate('/register/patient');setRegister(false)}}>Como paciente</button>
                    <button className={btn} onClick={() => {navigate('/register/doctor');setRegister(false)}}>Como doctor</button>
                </section>
            }
        </>
    )
}