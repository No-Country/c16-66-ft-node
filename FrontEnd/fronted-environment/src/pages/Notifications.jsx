import { useState } from 'react';
import { AsideComponent } from "../components/aside"
import { NavHome } from "../components/NavComponent.js/NavHome"

export default function Notifications () {
    const [showPopup, setShowPopup] = useState(false);

    const fakeNotifications = [
        { id: 1, message: 'Nueva actualización disponible' },
        { id: 2, message: 'Recordatorio: turno a las 15:00hs' },
        { id: 3, message: 'Factura' },
    ];

    const handlePopup = () => {
        setShowPopup(true);
    };

    return (
        <main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
			<NavHome />
			<section
				style={{ maxHeight: "1024px", height: `calc(100vh - 4rem)` }}
				className='h-full w-10/12 mt-0.5 lg:w-11/12 self-end w-inherit'
			>
                <div className="max-w-lg mx-auto mt-8">
                    <h2 className="text-2xl font-bold mb-4">Notificaciones</h2>
                    
                    <div>
                       <p className="bg-gray-100 p-4 mb-2 rounded-md shadow">{fakeNotifications[0].message}</p>
                       <p className="bg-gray-100 p-4 mb-2 rounded-md shadow">{fakeNotifications[1].message}</p>
                       <p 
                       onClick={handlePopup}
                       className="cursor-pointer bg-gray-100 p-4 mb-2 rounded-md shadow">{fakeNotifications[2].message}</p>
                    </div>
                </div>
            </section>

            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Detalle de la factura</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, adipisci? Natus aliquam esse, saepe eos ut eveniet facere ullam distinctio ad ducimus! Nobis facilis minima quidem. Provident dolorem aut soluta.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloribus, totam iste numquam veniam neque ducimus maxime soluta. Totam cumque natus enim error nesciunt exercitationem vel fuga explicabo maxime facilis.</p>
                        <button className='w-fit mt-2 border-2 border-darkBlue rounded-xl h-fit p-2 bg-white text-darkBlue hover:bg-darkBlue hover:text-white' onClick={() => setShowPopup(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </main>
    )
}