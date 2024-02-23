import './index.css'
// eslint-disable-next-line react/prop-types
export function CardBenefit ({icon, title, text}) {
    return (
        <div className="w-64 border-lightGreen border-2 rounded-xl p-2 h-4/6 bg-white shadow lg:w-80 md:w-6/12 min-w-80 xl:h-5/6 xl:w-3/12 xl:min-h-5/6 xl:max-h-5/6 xl:p-4">
            <h2 className="text-darkBlue font-bold text-center px-5 flex items-center pt-2 text-xs lg:text-base xl:text-2xl"><img src={icon} className="mr-1 text-center text-xs lg:text-base xl:text-2xl" />{title}</h2>
            <p className="text-black text-justify pt-2 px-5 text-xs lg:text-base xl:text-2xl">{text}</p>
        </div>
    )
}