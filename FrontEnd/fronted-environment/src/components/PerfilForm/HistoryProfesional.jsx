import { DoctorStore } from "../../StoreGeneral/DoctorsStore"

export default function HistoryProfesional () {
    const { doctorLogged } = DoctorStore
    return (
        <div className='bg-whiteOpacity rounded-xl p-4 w-11/12'>
        <h3 className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg mb-3">ESPECIALIDAD MEDICA:</h3> 
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">{doctorLogged.specialty}</h4>
        <h3 className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg mb-3">OBRA SOCIALES:</h3>
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">{doctorLogged.SocialSecurity}</h4>
        <h3 className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg mb-3">PERFIL PROFESIONAL:</h3> 
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti officia sunt? Aspernatur suscipit quas possimus illum neque alias, nisi officiis ipsa mollitia sunt, sequi dolorem tempora! Animi, nemo quasi.</h4>
        <h3 className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg mb-3">EXPERIENCIA:</h3>
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti officia sunt? Aspernatur suscipit quas possimus illum neque alias, nisi officiis ipsa mollitia sunt, sequi dolorem tempora! Animi, nemo quasi.</h4>
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti officia sunt? Aspernatur suscipit quas possimus illum neque alias, nisi officiis ipsa mollitia sunt, sequi dolorem tempora! Animi, nemo quasi.</h4>
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti officia sunt? Aspernatur suscipit quas possimus illum neque alias, nisi officiis ipsa mollitia sunt, sequi dolorem tempora! Animi, nemo quasi.</h4>
        </div>
    )
}