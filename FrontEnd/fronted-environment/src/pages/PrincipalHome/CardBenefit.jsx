
// eslint-disable-next-line react/prop-types
export function CardBenefit ({icon, title, text}) {
    return (
        <div className="w-64 border-lightGreen border-2 rounded-xl p-2 h-4/6 bg-white shadow lg:w-80 md:w-6/12 min-w-80 lg:h-fit">
            <h2 className="text-darkBlue font-bold text-center px-5 flex items-center pt-2"><img src={icon} className="text-center" />{title}</h2>
            <p className="text-black text-justify pt-2 px-5">{text}</p>
        </div>
    )
}