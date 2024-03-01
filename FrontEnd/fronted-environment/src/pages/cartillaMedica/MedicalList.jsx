import { AsideComponent } from "../../components/aside"
import { NavHome } from "../../components/NavComponent.js/NavHome"
import Rectangle from '../../assets/FakeLOGO/Rectangle 250.png'
import BoxImgAndText from "./BoxImgAndText"

export default function MedicalList () {
    return(
        <main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
            <NavHome />
            <section className='h-full w-10/12 lg:w-11/12 self-end bg-bgLightGreen w-inherit'>
                <div className="p-2 sm:px-4 md:px-6 lg:px-14">
                    <h2 className=" text-base font-semibold mb-4 lg:text-lg">Cartilla Médica</h2>
                    <h4 className=" text-sm font-semibold mb-3 lg:text-base">¿Cuál plan querés informarte?</h4>
                    <p className="text-xs text-justify lg:text-sm">Seleccioná el tipo de plan, y accedé a la información que necesites sobre los médicos, hospitales y especialización que corresponde.</p>
                </div>
                <div className="flex flex-wrap w-11/12 mt-5 sm:w10/12 sm:mx-auto md:w-9/12 lg:w-8/12 max-h-screen justify-center overflow-y-scroll md:overflow-hidden">

                    <BoxImgAndText Rectangle={Rectangle} text='Plan 1' pdf='https://www.ejemplo.com/documento.pdf' />
                    <BoxImgAndText Rectangle={Rectangle} text='Plan 2' pdf='https://www.ejemplo.com/documento.pdf' />
                    <BoxImgAndText Rectangle={Rectangle} text='Plan 3' pdf='https://www.ejemplo.com/documento.pdf' />
                    <BoxImgAndText Rectangle={Rectangle} text='Plan 4' pdf='https://www.ejemplo.com/documento.pdf' />
                    <BoxImgAndText Rectangle={Rectangle} text='Plan 5' pdf='https://www.ejemplo.com/documento.pdf' />
                    <BoxImgAndText Rectangle={Rectangle} text='Plan 6' pdf='https://www.ejemplo.com/documento.pdf' />

                </div>
            </section>
        </main>
    )
}