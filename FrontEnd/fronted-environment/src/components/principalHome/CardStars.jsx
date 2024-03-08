/* eslint-disable react/prop-types */
import { Rating } from '@mui/material'
import {Star} from '@mui/icons-material'
import { UserStore } from '../../StoreGeneral/UsersStore'
import { DoctorStore } from '../../StoreGeneral/DoctorsStore'
import imageDr from '../../assets/imgFakePacient/userDefualtImg.png'
// eslint-disable-next-line react/prop-types
export function CardStars ({review}) {
    const {users} = UserStore()
    const {doctors} = DoctorStore()
   
    const userName = users?.find(user => user.pacientId === review?.pacientId)
    const doctorInfo = doctors?.find(doc => doc.doctorId === review?.doctorId)

    return (
        <div className="p-5 w-52 bg-white border-lightGreen border-2 rounded-xl sm:w-96 h-72 ">
            <section className="flex justify-center items-center">
                {doctorInfo?.image === null ? <img src={imageDr} alt='Dr. image' className='text-xs min-w-14 min-h-14 w-14 lg:w-16 lg:h-16 h-14 border-2 border-lightGreen rounded-full mr-4' />
                :
                <img src={doctorInfo?.image} alt='Dr. image' className='text-xs min-w-14 min-h-14 w-14 lg:w-16 lg:h-16 h-14 border-2 border-lightGreen rounded-full mr-4' />
                }
                <div className="flex flex-col justify-between mb-2">
                    <h2 className="font-bold text-black text-base lg:text-lg">{doctorInfo?.name} {doctorInfo?.lastname}</h2>
                    <h3 className="text-gray pt-1 text-xs lg:text-base">{doctorInfo?.specialty}</h3>
                    <div className="text-darkBlue pt-2 text-xs lg:text-base">
                    <Rating
                    name='read-only'
                    value={review?.rating}
                    max={5}
                    icon={<Star color='primary' />}
                    emptyIcon={<Star fontSize='inherit' />}
                    readOnly/>
                    </div>
                </div>
            </section>
            <div className='w-10/12 mx-auto'>
                <p className="text-xs lg:text-base mt-2 text-justify">{review?.reviewText}</p>
                <p className="mt-2 text-xs lg:text-base font-italic text-gray mb-2">
                { userName?.name}
                { userName?.lastname}
                </p>
            </div>
        </div>
    )
}