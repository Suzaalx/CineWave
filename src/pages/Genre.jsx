import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Genre() {
    const {data,error,loading}= useFetch('https://api.themoviedb.org/3/genre/movie/list?language=en')
  return (
    <div className=''>
        <div className=' h-[40vh] mt-12 flex items-center justify-center px-6 w-full'>
            <h1 className=' text-3xl font-bold'>Pick your <span>Poison</span>.</h1>
        </div>
        <div className='   max-w-[80%]  grid grid-cols-5 gap-8 mx-auto'>
      {data && data.genres.map((genre)=>(
        <div key={genre.id} className=' bg-[#110f0f] w-max  px-2 p-1 rounded'>
            <Link to={`/genre/${genre.name}`}><h1>{genre.name}</h1></Link>
            
            </div>
      )
        )}
        </div>
    </div>
  )
}
