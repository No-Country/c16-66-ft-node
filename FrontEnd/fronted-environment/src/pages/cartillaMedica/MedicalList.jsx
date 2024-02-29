import { AsideComponent } from "../../components/aside"
import { NavHome } from "../../components/NavComponent.js/NavHome"

export default function MedicalList () {
    return(
        <main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
            <NavHome />
            <section className='h-full w-10/12 lg:w-11/12 self-end bg-bgLightGreen w-inherit'>

                <h1>Aca va la cartilla medica!!</h1>
            </section>
        </main>
    )
}