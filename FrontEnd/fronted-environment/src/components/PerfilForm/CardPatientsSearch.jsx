import { useNavigate } from "react-router-dom"
/* eslint-disable react/prop-types */
export default function CardPatientsSearch ({result}) {

    const navigate = useNavigate()
   
    return (
        <section className=" bg-bgLightGreen rounded-xl h-fit w-52 p-2">
            <div className="flex justify-around">
                <img src={result?.image} alt="Image user" className=" w-11 h-11 rounded-full" />
                <div className="flex flex-col mb-2">
                    <h3 className="text-xs font-semibold">{result?.name} {result?.lastname}</h3>
                    <h4 className="text-xs">{result?.specialty}</h4>
                </div>
            </div>
                <div className="flex flex-col p-2 items-start mt-3 mb-3 w-fit h-48">
                
                    <p className="text-xs mb-2">Matricula: {result?.licensenumber}</p>
                    <p className="text-xs mb-2">Email: {result?.email}</p>
                    <p className="text-xs mb-2">Telefono: {result?.telephone}</p>
                    <p className="text-xs mb-2">Obra sociales: {result?.socialSecurity?.join(", ")}</p>
                <button 
                onClick={()=>navigate('/my-agenda')}
                className="text-xs m-auto w-fit font-semibold border-b"> Agendar turno</button>
                </div>
        </section>
    )
}