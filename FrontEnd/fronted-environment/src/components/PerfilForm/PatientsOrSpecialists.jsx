import { useState} from "react"
import { DoctorStore } from "../../StoreGeneral/DoctorsStore"
import { UserStore } from "../../StoreGeneral/UsersStore"
import { AsideComponent } from "../aside"
import { NavHome } from "../NavComponent.js/NavHome"
import CardPatients from "./CardPatients"

const Patients = [{
    image: 'https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp',
    name:'pedro' ,
    lastname:'garcia' ,
    birthdate: '2/04/15',
    dni:'11111111',
    adress:'123 siempre viva'
},{
    image: 'https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp',
    name:'pedro' ,
    lastname:'gomez' ,
    birthdate: '2/04/15',
    dni:'11111111',
    adress:'123 siempre viva'
},{
    image: 'https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp',
    name:'pedro' ,
    lastname:'garcia' ,
    birthdate: '2/04/15',
    dni:'11111111',
    adress:'123 siempre viva'
},{
    image: 'https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp',
    name:'pedro' ,
    lastname:'gomez' ,
    birthdate: '2/04/15',
    dni:'11111111',
    adress:'123 siempre viva'
},{
    image: 'https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp',
    name:'pedro' ,
    lastname:'garcia' ,
    birthdate: '2/04/15',
    dni:'11111111',
    adress:'123 siempre viva'
},{
    image: 'https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp',
    name:'pedro' ,
    lastname:'garcia' ,
    birthdate: '2/04/15',
    dni:'11111111',
    adress:'123 siempre viva'
}]// filtrando array de pacientes que llamo "Patients" para encontrar con lo q se busco por input
export default function PatientsOrSpecialists () {
    const { userLogged } = UserStore()
    const {doctorLogged } = DoctorStore()
    const [searchPatient, setSearchPatient] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        const searchPatient = event.target.value;
        setSearchPatient(searchPatient);
        const results = Patients.filter(patient =>
        patient.lastname.toLowerCase().includes(searchPatient.toLowerCase())
        );
        
        setSearchResults(results);
  };
    return(
        <main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
            <NavHome />
            <section style={{ maxHeight: '1024px',height: `calc(100vh - 4rem)` }} className='h-full w-10/12 mt-0.5 lg:w-11/12 self-end w-inherit'>
            <div className="sm:px-4 md:px-6 ">

                <div style={{ maxHeight: '1024px',height: `calc(100vh - 4rem)` }}  className="w-full sm:flex rounded-xl bg-whiteOpacity">
                    {/* vista cuando es un paciente */}
                    {
                        userLogged && 
                        <section className="mx-auto h-full w-full sm:w-2/3 overflow-y-auto">
                        <h2 className="font-semibold text-base">Historial de mis consultas</h2>
                        <div className="sm:flex justify-between items-end">
                            <h3 className="text-xs">Mis doctores</h3>
                            <input 
                                className="p-1 border-2 w-56 outline-none rounded-3xl border-gray text-xs" 
                                placeholder="Buscar doctores por apellido..."
                                value={searchPatient}
                                onChange={handleSearch}
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full h-1/2">
                            {searchResults.length > 0 ? (
                                 <div className="h-fit w-full flex flex-wrap gap-2 mt-2 justify-center">
                                {searchResults.map((result, index) => (
                                    <CardPatients key={index} patient={result} />
                                   
                                ))}
                                </div>
                            ) : (
                                <div className="h-fit w-full flex flex-wrap gap-2 mt-2 justify-center">
                                {Patients.map((patient, index) => (
                                    <CardPatients key={index} patient={patient} />
                                ))}
                                </div>
                            )
                            }
                            </div>
                        </div>
                    </section>
                    }
                    {/* vista cuando es un doctor */}
                    {
                        doctorLogged &&
                    <>
                    <section className="mx-auto h-full w-full sm:w-2/3 overflow-y-auto">
                        <h2 className="font-semibold text-base">Historial de pacientes</h2>
                        <div className="sm:flex justify-between items-end">
                            <h3 className="text-xs">Fichas médicas de los pacientes</h3>
                            <input 
                                className="p-1 border-2 w-56 outline-none rounded-3xl border-gray text-xs" 
                                placeholder="Buscar paciente por apellido..."
                                value={searchPatient}
                                onChange={handleSearch}
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full h-1/2">
                            {searchResults.length > 0 ? (
                                 <div className="h-fit w-full flex flex-wrap gap-2 mt-2 justify-center">
                                {searchResults.map((result, index) => (
                                    <CardPatients key={index} patient={result} />
                                   
                                ))}
                                </div>
                            ) : (
                                <div className="h-fit w-full flex flex-wrap gap-2 mt-2 justify-center">
                                {Patients.map((patient, index) => (
                                    <CardPatients key={index} patient={patient} />
                                ))}
                                </div>
                            )
                            }
                            </div>
                        </div>
                    </section> 
                    <div className="w-full sm:w-1/3 h-full overflow-y-auto pt-7">
                        <h2 className="font-semibold text-center text-base">Próximas citas </h2>
                        <div className="h-fit w-full flex flex-wrap gap-2 mt-2 justify-center">
                            {Patients.map((patient, index) => (
                                <CardPatients key={index} patient={patient} />
                            ))}
                        </div>
                    </div>
                    </>
                    }
                </div>
            </div>
            </section>
        </main>
    )
}