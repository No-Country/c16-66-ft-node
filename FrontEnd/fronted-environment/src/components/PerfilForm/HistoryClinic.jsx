import { UserStore } from "../../StoreGeneral/UsersStore"

export default function HistoryClinic () {
    const { userLogged } = UserStore()
    return (
        <div className='bg-whiteOpacity rounded-xl p-4 w-11/12'>
        <h3 className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg mb-3">PACIENTE:</h3> 
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">{userLogged.name}</h4>
        <h3 className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg mb-3">FECHA:</h3>
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">28/02/2024</h4>
        <h3 className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg mb-3">OBRA SOCIAL:</h3> 
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">{userLogged.socialSecurity}</h4>
        <h3 className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg mb-3">MOTIVO DE CONSULTA/INTERNACION:</h3>
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti officia sunt? Aspernatur suscipit quas possimus illum neque alias, nisi officiis ipsa mollitia sunt, sequi dolorem tempora! Animi, nemo quasi.</h4>
        <h3 className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg mb-3">ENFERMEDAD ACTUAL:</h3>
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti officia sunt? Aspernatur suscipit quas possimus illum neque alias, nisi officiis ipsa mollitia sunt, sequi dolorem tempora! Animi, nemo quasi.</h4>
        <h3 className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg mb-3">ANTECEDENTES ENFERMEDAD ACTUAL:</h3>
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti officia sunt? Aspernatur suscipit quas possimus illum neque alias, nisi officiis ipsa mollitia sunt, sequi dolorem tempora! Animi, nemo quasi.</h4>
        <h4 className="text-gray text-xs md:text-sm lg:text-base xl:text-lg mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti officia sunt? Aspernatur suscipit quas possimus illum neque alias, nisi officiis ipsa mollitia sunt, sequi dolorem tempora! Animi, nemo quasi.</h4>
        </div>
    )
}