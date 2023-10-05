import React from 'react'
import useFetch from '../../hooks/useFetch'
import Movie_Card from '../movies/Movie_Card'

export default function Played({id}) {
    const {data,error, loading}= useFetch(`https://api.themoviedb.org/3/person/${id}/combined_credits?language=en-US`)

  return (
    <div className='px-4  lg:px-0 lg:max-w-[80%] lg:mx-auto'>
      <h1 className=' text-3xl uppercase tracking-wide '>Played</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className=' grid grid-cols-3 gap-4 md:grid-cols-4 my-10 lg:grid-cols-5'>
      {data && data.cast.slice(0,10).map((movie)=>(
          <Movie_Card category={movie.media_type} key={movie.id} movie={movie}/>
       ))}
        
      </div>


      
    </div>
  )
}
