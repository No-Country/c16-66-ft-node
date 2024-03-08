import { NavPrincipalHome } from "../../components/principalHome/NavPrincipalHome";
import { CardAutogestion } from "../../components/autogestion/CardAutogestion";
import Doc from "../../assets/autogestion/Doc.png";
import User from "../../assets/autogestion/User.png";
import Admin from "../../assets/autogestion/Admin.png";

export default function Autogestion () {
    return (
        <main className='flex flex-col w-screen h-screen box-border z-0'>
			<NavPrincipalHome />
			<section
				style={{ maxHeight: "1024px", height: `calc(100vh - 4rem)` }}
				className='h-full w-10/12 mt-0.5 lg:w-11/12 self-end w-inherit'
			>
            <div className=" p-8 md:p-16 xl:p-20">
                <section className="4/4 sm:w-3/4 flex flex-col items-start">
                    <h2 className="pt-4 text-xl font-bold">¡Bienvenidos/as!</h2>
                    <h4 className="pt-4 text-xl font-bold">¿Qué tipo de usuario eres?</h4>
                    <p className="pt-2 text-base">Seleccioná el tipo de usuario, y comenzá a realizar todas tus gestiones de forma online.</p>
                </section>
                <section className="pt-4 flex flex-col items-center md:flex-row md:justify-center">
                    <CardAutogestion img={User} border={'border-lightGreen'} user={'Paciente'}/>
                    <CardAutogestion img={Doc} border={'border-lightBlue'} user={'Médico'}/>
                    <CardAutogestion img={Admin} border={'border-darkBlue'} user={'Administrador'}/>
                </section>
            </div>
            </section> 
        </main>
    )
}
