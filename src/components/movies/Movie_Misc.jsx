import React from 'react'
import MovieCast from '../Cast/MovieCast'
import Review from './Review'


export default function Movie_Misc({category,id}) {
  return (
    <div className=' '>
    <MovieCast category={category} id={id}/> 
    <Review category={category} id={id}/>
     </div>
  )
}
