import { DoctorStore } from "../../StoreGeneral/DoctorsStore"
import { UserStore } from "../../StoreGeneral/UsersStore"
import { AsideComponent } from "../aside"
import { NavHome } from "../NavComponent.js/NavHome"

export default function PatientsOrSpecialists () {
    const { userLogged } = UserStore()
    const {doctorLogged } = DoctorStore()
    return(
        <main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
            <NavHome />
            <section style={{ maxHeight: '1024px',height: `calc(100vh - 4rem)` }} className='h-full w-10/12 mt-0.5 lg:w-11/12 self-end bg-bgLightGreen w-inherit'>
            <div className="p-2 sm:px-4 md:px-6 lg:px-14">

                <div className="w-10/12 rounded-xl bg-whiteOpacity h-fit">
                    {
                        userLogged && <h2>Aca los especialistas del paciente {userLogged.name}</h2>
                    }
                    {
                        doctorLogged && <h2>Aca los pacientes del doctor {doctorLogged.name}</h2>
                    }
                </div>
            </div>
            </section>
        </main>
    )
}