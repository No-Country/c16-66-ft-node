import { NavHome } from "../../components/NavComponent.js/NavHome"
import Rectangle from '../../assets/FakeLOGO/Rectangle 250.png'
import BoxImgAndText from "./BoxImgAndText"
import { useNavigate } from "react-router"
import arrowBack from '../../assets/svg/arrow_back.png'

export default function MedicalList () {
    const navigate = useNavigate()
    return(
        <main className='flex flex-col w-screen h-screen box-border z-0'>
            <NavHome />
            <section style={{ maxHeight: '1024px',height: `calc(100vh - 4rem)` }} className='w-inherit mt-0.5 self-end bg-bgLightGreen w-inherit'>
                <div className="w-full p-2 px-10 flex justify-between">
                    <h2 className=" text-base font-semibold mb-4 lg:text-lg">Cartilla Médica</h2>
                    <div className={"w-fit cursor-pointer flex text-base text-darkBlue h-fit p-2 hover:bg-white rounded-xl"}
							onClick={() => navigate("/")}
						>
							<img src={arrowBack} className="pr-2 max-w-none w-9" title={"Inicio"}/> Volver
					</div>
                </div>
                <div className="p-2 sm:px-4 md:px-6 lg:px-14">
                    <h4 className=" text-sm font-semibold mb-3 lg:text-base">¿Cuál plan querés informarte?</h4>
                    <p className="text-xs text-justify lg:text-sm">Seleccioná el tipo de plan, y accedé a la información que necesites sobre los médicos, hospitales y especialización que corresponde.</p>
                </div>
                <div className="flex flex-wrap h-3/4 w-11/12 mt-4 sm:w10/12 sm:mx-auto md:w-9/12 lg:w-8/12 justify-center overflow-y-scroll">

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