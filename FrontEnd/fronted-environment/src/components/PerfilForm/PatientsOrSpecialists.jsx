/* eslint-disable react/prop-types */
import { useState} from "react"
import { DoctorStore } from "../../StoreGeneral/DoctorsStore"
import { UserStore } from "../../StoreGeneral/UsersStore"
import { AsideComponent } from "../aside"
import { NavHome } from "../NavComponent.js/NavHome"
import CardPatients from "./CardPatients"
import CardPatientsSearch from "./CardPatientsSearch"
import { AppoinmentStore } from "../../StoreGeneral/AppoinmentStore"
import '../../pages/PrincipalHome/index.css'

export default function PatientsOrSpecialists () {
    const { userLogged } = UserStore()
    const { doctors } = DoctorStore()
    const [searchPatient, setSearchPatient] = useState('');
    const [searchSpeciality, setSearchSpeciality] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    // const [searchDoctor, setSearchDoctor] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { appoinments } = AppoinmentStore()

    function normalizeText(text) {
        if (text === null || text === undefined) {
            return '';
        }
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
 
    const userAppoinments = appoinments.filter( appoinment => appoinment.pacientId === userLogged.id)
    
    // const userAppoinmentsNotPendding = userAppoinments.filter(appoinment => appoinment.pending === false)
    // todos los turnos estan como pending true, por lo cual no puedo mostrar el historial de turnos pasados, mientras mostrare los proximos, idem abajo para doc
    // const doctorAppoinments = appoinments.filter( appoinment => appoinment.doctorId === doctorLogged?.id)
    // console.log('que tengo aca 2', doctorAppoinments)

    const handleSearchP = (event) => {
        const search = event.target.value;
        setSearchPatient(search);
   
        if (search === '') {
            setSearchResults([]); 
            return;
        }
       
        const normalizedSearch = normalizeText(search);
        const results = doctors?.filter(doc =>
            normalizeText(doc?.lastname).includes(normalizedSearch)
        );
   
        setSearchResults(results);
    
    }
   
    const handleSearchSpeciality = (event) => {
        const search = normalizeText(event.target.value);
        setSearchSpeciality(search);
    
        if (search === '') {
            setSearchResult([]); 
            return;
        }
        
        let searchFinal = '';
        switch(search) {
            case 'pediatría':
            case 'pediatrics':
                searchFinal = 'Pediatrics';
                break;
            case 'medicina general':
            case 'general medicine':
                searchFinal = 'General Medicine';
                break;
            case 'medicina interna':
            case 'internal medicine':
                searchFinal = 'Internal Medicine';
                break;
            case 'ginecología y obstetricia':
            case 'gynecology and obstetrics':
                searchFinal = 'Gynecology and Obstetrics';
                break;
            case 'cirugía general':
            case 'general surgery':
                searchFinal = 'General Surgery';
                break;
            case 'ortopedia':
            case 'orthopedics':
                searchFinal = 'Orthopedics';
                break;
            case 'dermatología':
            case 'dermatology':
                searchFinal = 'Dermatology';
                break;
            case 'oftalmología':
            case 'ophthalmology':
                searchFinal = 'Ophthalmology';
                break;
            case 'psychiatry':
                searchFinal = 'Psiquiatría';
                break;
            case 'cardiology':
                searchFinal = 'Cardiología';
                break;
            default:
                searchFinal = search;
        }
    
        
        const result = doctors?.filter(doc =>
            normalizeText(doc?.specialty).includes(normalizeText(searchFinal))
        );
            
        setSearchResult(result);
    }
    
   
    
    
    return(
        <main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
            <NavHome />
            <section style={{ maxHeight: '1024px',height: `calc(100vh - 4rem)` }} className='h-full w-full asideWidth mt-0.5 lg:w-11/12 self-end w-inherit p-2'>
            <div style={{ maxHeight: '1024px',height: `calc(100vh - 5rem)` }}  className="w-full -mb-5 sm:flex rounded-xl bg-whiteOpacity">

{/* /////////////////////////// VISTA CUANDO ES PACIENTE */}
                {
                    userLogged !== null && 
                    <section className="mx-auto h-full w-full sm:w-2/3 overflow-y-auto ">
                        <div className="sm:flex justify-end items-end">
                            <h3 className="font-semibold text-xs mr-2">Buscar doctores</h3>
                            <input 
                                className="p-1 border-2 w-56 outline-none rounded-3xl border-gray text-xs" 
                                placeholder="Por apellido..."
                                value={searchPatient}
                                onChange={handleSearchP}
                            />
                             <input 
                                className="p-1 border-2 w-56 outline-none rounded-3xl border-gray text-xs" 
                                placeholder="Por especialidad..."
                                value={searchSpeciality}
                                onChange={handleSearchSpeciality}
                            />
                        </div>
                        <h2 className="font-semibold text-base">Historial de mis consultas</h2>
                        <div className="flex flex-col overflow-y-auto h-3/4 sm:h-full sm:mt-5 lg:h-full">
                            <div className="w-full h-1/2">
                        
                           
                                {searchResults.length > 0 ? (
                                    <div className="h-fit w-full flex flex-wrap gap-2 mt-2 justify-center">
                                   {searchResults.map((result, index) => (
                                    <CardPatientsSearch key={index} result={result}/>))}
                                   </div>
                                )
                                :
                                (
                                    searchResult.length > 0 ? (
                                        <div className="h-fit w-full flex flex-wrap gap-2 mt-2 justify-center">
                                        {searchResult.map((result, index) => (
                                            <CardPatientsSearch key={index} result={result}/>))}
                                        </div>
                                        )
                                        :
                                        (
                                            <div className="h-fit w-full flex flex-wrap gap-2 mt-2 justify-center">
                                            {userAppoinments.map((appoinment, index) => (
                                                <CardPatients key={index} userLogged={userLogged} appoinment={appoinment} />))}
                                            </div>
                                        )      
                                ) 
                                }
                            </div>
                        </div>
                    </section>
                    }
{/* ///////////////////// VISTA CUANDO ES DOCTOR */}
                    {/* {
                       doctorLogged !== null &&
                    <>
                    <section className="mx-auto h-1/2 sm:h-5/6 w-full sm:w-2/3">
                        <h2 className="font-semibold text-base">Historial de pacientes</h2>
                        <div className="flex flex-col overflow-y-auto h-3/4 sm:h-full sm:mt-5 lg:h-full">
                            <div className="w-full h-1/2">
                                <div className="h-fit w-full flex flex-wrap gap-2 mt-2 justify-center">
                                {doctorAppoinments.map((appoinment, index) => (
                                    <CardPatients key={index} doctorLogged={doctorLogged} appoinment={appoinment} />
                                ))}
                                </div>
                            </div>
                        </div>
                    </section>  */}
                    {/* <div className="w-full sm:w-1/3 h-2/5 sm:h-5/6 lg:pt-9">
                        <h2 className="font-semibold text-center text-base sm:mt-6">Próximas citas </h2>
                        <div className="pt-4 md:pt-0 w-full flex flex-wrap gap-2 mt-2 justify-center overflow-y-auto h-full lg:h-full sm:mt-5">
                            {doctorAppoinments.map((patient, index) => (
                                <CardPatients key={index} patient={patient} />
                            ))}
                        </div>
                    </div> */}
                    {/* </>
                    } */}
                </div>
            {/* </div> */}
            </section>
        </main>
    )
}