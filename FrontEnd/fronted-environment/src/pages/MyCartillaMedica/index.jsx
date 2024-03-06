import { AsideComponent } from "../../components/aside"
import { NavHome } from "../../components/NavComponent.js/NavHome"
import { UserStore } from "../../StoreGeneral/UsersStore"
import BoxImgAndText from "../cartillaMedica/BoxImgAndText"
import Rectangle from"../../assets/FakeLOGO/Rectangle 250.png"
import '../../pages/PrincipalHome/index.css'

export default function MyCartillaMedica () {
    const {userLogged} = UserStore()
    return (
        <main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
			<NavHome />
			<section
				style={{ maxHeight: "1024px" }}
				className='mt-0.5 h-full w-full asideWidth self-end bg-bgLightGreen'
			>
                {
                userLogged.planSocialSecurity  ? 
                <>
                <div className="p-2 sm:px-4 md:px-6 lg:px-14">
                    <h2 className=" text-base font-semibold mb-4 lg:text-lg">Cartilla Médica - Plan: </h2>
                </div>
                <div className="mx-auto mt-8 w-10/12 flex justify-center">
                    
                    <BoxImgAndText Rectangle={Rectangle} text={userLogged.planSocialSecurity} pdf='https://www.ejemplo.com/documento.pdf' />
                </div>
                </>
                
                : 
                <h2 className="p-2 text-base font-semibold mb-4 lg:text-lg"> Aùn no cuentas con un plan</h2>
                
                }
            </section>
        </main>
    )
}