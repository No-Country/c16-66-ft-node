import { useState } from "react";

import { AsideComponent } from "../components/aside"
import { NavHome } from "../components/NavComponent.js/NavHome"
import { New } from "../components/BigCalendarComponent/New"
import { CardPacientItem } from "../components/CardPacientItem";

import { UserStore } from "../StoreGeneral/UsersStore";
import { DoctorStore } from "../StoreGeneral/DoctorsStore";



export default function MyAgenda () {


    const { doctorLogged, doctors } = DoctorStore();
    const { users, userLogged } = UserStore();

    const [selectTypeUser, setSelectTypeUser] = useState({});

    const handlerSelect = (id) => {
		console.log("el id es :", id);
		let consult;
		doctorLogged
			? (consult = users.filter((pacient) => pacient.pacientId === id))
			: (consult = doctors.filter((doctor) => doctor.doctorId === id));
		setSelectTypeUser(consult[0]);
		console.log("se selecciono a : ", consult);
	};

    return (
        <main className='flex flex-col w-screen h-screen box-border z-0'>
        <AsideComponent />
        <NavHome />
        <section style={{ maxHeight: '1024px',height: `calc(100vh - 4rem)` }} className='w-10/12 lg:w-11/12 mt-0.5 self-end bg-white w-inherit'>

        <section className='mt-2 mb-2 w-full h-3/12 2xl:h-4/12 flex-col mr-4 p-2 sm:px-4 md:px-6 lg:px-14'>
					<h2 className='text-xl 2xl:text-3xl font-bold text-black'>
						{" "}
						Agenda de consultawww
					</h2>
						<p className=' text-md 2xl:text-xl font-normal text-gray'>
                        En este espacio encontrarás tus próximas consultas y la oportunidad de agendar con tus especialistas elegidos
						</p>
				
				</section>
                <div className='flex' >
                <div className="p-2 sm:px-4 w-9/12">
            <New/>
         


        </div>
        <div className="border-slate-300 rounded-3xl w-3/12">
        <section style={{ maxHeight: '1024px',height: `calc(100vh - 200px)` }} className='w-full flex-col overflow-y-auto bg-bgLightGreen p-2 rounded-3xl mr-2'>
							{doctorLogged ? (
								<div className='w-full'>
									{users?.map((user) => {
										return (
											<CardPacientItem
												key={user.pacientId}
												user={user}
												handlerSelect={() => handlerSelect(user.pacientId)}
											/>
										);
									})}
								</div>
							) : (
								<div className='ml-2'>
									{doctors?.map((doctor) => {
										return (
											<CardPacientItem
												key={doctor.doctorId}
												user={doctor}
												handlerSelect={() => handlerSelect(doctor.doctorId)}
											/>
										);
									})}
								</div>
							)}
						</section>
        </div>
                    
                </div>
  
        </section>
        </main>
    )
}