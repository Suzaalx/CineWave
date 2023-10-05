import React from 'react'
import { Link } from 'react-router-dom'
export default function PeopleCard({actor}) {
    const tmdbPosterPath = 'https://image.tmdb.org/t/p/w300_and_h450_face';
  return (
    <div className=" relative  rounded-xl">
    <div className=" relative h-32 md:h-52 lg:h-72 w-full  rounded-xl">
    <Link to={`/view/people/${actor.id}`}>
   <div className=' h-full w-full brightness-50'>
   <img src={actor.profile_path ? `${tmdbPosterPath + actor.profile_path}` : '/img-placeholder.jpg'} alt="" className=' h-full w-full object-cover rounded-xl' />
   </div>
    </Link>
   <p className=' absolute top-0 p-2'>Rating:{actor.popularity}</p>
 </div>
  
   <div className=" text-center p-2 ">
   <h3>{actor.name}</h3>
   <p className=' text-sm p-1'>{actor.known_for_department}</p>
   </div>
   </div>
  )
}
