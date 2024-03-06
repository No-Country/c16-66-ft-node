import { AsideComponent } from "../components/aside"
import { NavHome } from "../components/NavComponent.js/NavHome"

export default function MyAgenda () {
    return (
        <main className='flex flex-col w-screen h-screen box-border z-0'>
        <AsideComponent />
        <NavHome />
        <section style={{ maxHeight: '1024px',height: `calc(100vh - 4rem)` }} className='w-full asideWidth mt-0.5 self-end bg-bgLightGreen w-inherit'>
        <div className="p-2 sm:px-4 md:px-6 lg:px-14">
            <h2 className=" text-base font-semibold mb-4 lg:text-lg">AGENDA VER QUE VA ACA</h2>
        </div>
        </section>
        </main>
    )
}