import React from 'react'
import { Link } from 'react-router-dom';
export default function Movie_Card({movie, category}) {
const tmdbPosterPath = 'https://image.tmdb.org/t/p/w300_and_h450_face';
const tmdbBackdropPath = 'https://image.tmdb.org/t/p/original';

  return (
    <div className=' p-2  '>
      <Link to={`/view/${category || 'movie'}/${movie.id}`}>
      <div className=" relative  w-full text-white  rounded-xl">
        <div className=' h-full w-full brightness-50'>
        <img src={movie.poster_path ? `${tmdbPosterPath + movie.poster_path}` : '/img-placeholder.jpg'} alt="" className=' h-full w-full object-cover rounded-xl' />
        </div>
        <p className=' absolute top-0 p-2'>Rating:{movie.vote_average}</p>
      </div>
      </Link>
      <div className=" text-center ">
        <h3>{movie ? movie.title || movie.original_name || movie.title || 'Not Available' : 'Not Available'}</h3>
        <p className=' text-sm'>{new Date(movie.release_date  || movie.first_air_date).getFullYear() || "NA"}</p>
      </div>
    
    </div>
  )
}
