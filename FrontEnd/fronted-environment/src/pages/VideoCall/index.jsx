import { AsideComponent } from "../../components/aside"
import { NavHome } from "../../components/NavComponent.js/NavHome"

export default function VideoCall () {
    return (
        <main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
            <NavHome />
            <section style={{ maxHeight: '1024px',height: `calc(100vh - 4rem)` }} className='h-full mt-0.5 self-end w-full asideWidth'>

            <h1>videollamadaaa</h1>
            </section>
        </main>
    )
}