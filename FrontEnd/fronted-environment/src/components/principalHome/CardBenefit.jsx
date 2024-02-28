import '../../pages/PrincipalHome/index.css'
// eslint-disable-next-line react/prop-types
export function CardBenefit ({icon, title, text}) {
    return (
        <div className="w-11/12 min-w-64 min-h-60 sm:min-w-80 sm:min-h-56 border-lightGreen border-2 rounded-xl p-2 h-4/6 bg-white shadow lg:w-80 md:w-6/12 xl:w-3/12 xl:h-full xl:p-4">
            <h2 className="text-darkBlue h-20 font-bold text-center px-5 flex items-center pt-2 text-base lg:text-lg xl:text-xl"><img src={icon} className="mr-1 text-center text-base lg:text-lg xl:text-xl" />{title}</h2>
            <p className="text-black text-justify h-40 pt-2 px-5 text-base lg:text-lg xl:text-xl">{text}</p>
        </div>
    )
}