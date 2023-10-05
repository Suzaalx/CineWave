import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate, useParams } from 'react-router-dom'
import {MdArrowBackIosNew} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Played from './Played'
export default function PeopleDetail() {
  const navigate = useNavigate()
  const {id}= useParams()
  const {data, error, loading} = useFetch(`https://api.themoviedb.org/3/person/${id}?language=en-US`)
  const tmdbPosterPath = 'https://image.tmdb.org/t/p/w300_and_h450_face';
  return (
    <>
    <div className=' flex  h-screen w-full '>
    <button className=' bg-orange-600 px-2 md:px-4 py-2 rounded-xl absolute top-28 left-12 md:left-20 lg:top-32 inline-block lg:left-40 z-30' onClick={(()=>navigate(-1))}><MdArrowBackIosNew className=' inline'/><p className='inline'>Back</p></button>
    <div  className='flex-col-reverse lg:flex-row-reverse  flex  mx-auto  mt-6  lg:mt-16 lg:max-w-[80%]  items-center   gap-12 mb-32 lg:mb-0  max-h-screen  z-20'>
        <div className=' text-center lg:text-left   lg:max-w-[70%]  max-w-full  mx-auto  md:mt-0  px-4'>
        
        <h3 className=' text-4xl font-bold tracking-wide lg:py-4'>{data?.name}</h3>
          <p className=' pt-2 text-md font-bold text-gray-400'>Biography</p>
          <p className=' text-[0.8rem]  line-clamp-6 overflow-hidden text-ellipsis lg:text-sm tracking-wider w-full py-3 font-light'>{data?.biography}</p>
          <Link  className=' mt-6 text-md w-max mx-auto lg:mx-4  rounded-xl py-3 px-4  bg-orange-600 block'>Full Biography</Link>
      </div>

        <div className=' h-44  lg:h-96  brightness-100 '>
        <img
              src={tmdbPosterPath + data?.profile_path}
                 
                    className=' object-contain w-full h-full rounded-2xl'
                />
      </div>
    </div>
    </div>
    <Played id={id}/>
    </>
  )
}
