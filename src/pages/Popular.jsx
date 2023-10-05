import React from 'react'
import Paginate from '../components/movies/Paginate'

export default function Popular() {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page='
  return (
    <div>
      <Paginate url={url} header={"Popular Movies"}/>
    </div>
  )
}
