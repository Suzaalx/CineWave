import React from 'react'
import Movie_Card from '../movies/Movie_Card'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
export default function Top_Rated() {
  const {data, error, loading} = useFetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
  const navigate = useNavigate()
  return (
    <div className=' max-w-[80rem] mx-auto'>
        <h2 className=' pt-20 pb-12 px-4 text-3xl uppercase font-bold'>Top Rated Movies</h2>
      {error && <p className=' pt-32 text-2xl text-red-600 text-center'>{error}</p>}
      {loading && <p>Loading...</p>}
      <div className=' grid grid-cols-3 md:grid-cols-4 gap-8 lg:grid-cols-5 lg:gap-12 '>
      {data && data.results.slice(0,10).map((movie) => (
        <Movie_Card key={movie.id} movie={movie}/>
      ))}
      </div>
      <button onClick={()=>{navigate('/top-rated')}} className=' mt-2 text-md  rounded-xl p-4 bg-orange-600 flex mx-auto'><p className=' text-center'>View all Top Rated Movies</p></button>
      
    </div>
  )
}
