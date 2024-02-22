import { Rating } from '@mui/material'
import {Star} from '@mui/icons-material'
// eslint-disable-next-line react/prop-types
export function CardStars ({img, nameDr, doctorType, stars, text1, name1, text2, name2}) {
    return (
        <div className="p-5 bg-white border-lightGreen border-2 rounded-xl lg:min-w-96 m-2 md:max-w-80">
            <section className="flex justify-center items-center">
                <img src={img} className='w-1/4 h-auto border-2 border-lightGreen rounded-full mr-4' />
                <div className="flex flex-col justify-between mb-2">
                    <h2 className="font-bold text-black">{nameDr}</h2>
                    <h3 className="text-gray pt-1">{doctorType}</h3>
                    <div className="text-darkBlue pt-2">
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
                <p className="text-xs mt-2 text-justify">{text1}</p>
                <p className="text-xs font-italic text-gray mb-2">{name1}</p>
                <p className="text-xs text-justify">{text2}</p>
                <p className="text-xs font-italic text-gray">{name2}</p>
            </div>
        </div>
    )
}