import { Rating } from '@mui/material'
import {Star} from '@mui/icons-material'
// eslint-disable-next-line react/prop-types
export function CardStars ({img, nameDr, doctorType, stars, text1, name1, text2, name2}) {
    return (
        <div className="p-5 bg-white border-lightGreen border-2 rounded-xl w-full h-full xl:w-3/5">
            <section className="flex justify-center items-center">
                <img src={img} className='w-1/6 h-auto border-2 border-lightGreen rounded-full mr-4' />
                <div className="flex flex-col justify-between mb-2">
                    <h2 className="font-bold text-black text-base lg:text-lg xl:text-xl">{nameDr}</h2>
                    <h3 className="text-gray pt-1 text-base lg:text-lg xl:text-xl">{doctorType}</h3>
                    <div className="text-darkBlue pt-2 text-base lg:text-lg xl:text-xl">
                    <Rating
                    name='read-only'
                    value={stars}
                    max={5}
                    icon={<Star color='primary' />}
                    emptyIcon={<Star fontSize='inherit' />}
                    readOnly/>
                    </div>
                </div>
            </section>
            <div className='w-10/12 mx-auto'>
                <p className="text-base lg:text-lg xl:text-xl mt-2 text-justify">{text1}</p>
                <p className="text-base lg:text-lg xl:text-xl font-italic text-gray mb-2">{name1}</p>
                <p className="mt-1 xl:mt-3 text-base lg:text-lg xl:text-xl text-justify">{text2}</p>
                <p className="text-base lg:text-lg xl:text-xl font-italic text-gray">{name2}</p>
            </div>
        </div>
    )
}