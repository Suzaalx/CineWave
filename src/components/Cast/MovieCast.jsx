import React from 'react'
import useFetch from '../../hooks/useFetch'
import CastSideBar from './CastSideBar'
import PeopleCard from '../people/PeopleCard'
export default function MovieCast({id, category}) {
    const {data, error, loading}= useFetch(`https://api.themoviedb.org/3/${category}/${id}/credits?language=en-US`)
  return (
    <div className=' max-w-[80rem]   mx-auto'>
      <h3 className=' text-4xl tracking-wide px-12 py-8  '>Movie Cast</h3>

      <div className=' px-8   grid md:grid-cols-4 grid-cols-3 lg:grid-cols-5 gap-6'>
    
     
      {data && data.cast.slice(0,8).map((actor) => (
        <PeopleCard key={actor.id} actor={actor}/>
      ))}

      </div>
    <button className=' mt-2 items-center p-3  col-span-4 text-md rounded-xl bg-orange-600 w-max flex text-center mx-auto'><p className=' text-center'>View all Cast</p></button>
    <div className=' text-center mt-20 '>
    <CastSideBar category={category} id={id} />
    </div>
    </div>
  )
}
