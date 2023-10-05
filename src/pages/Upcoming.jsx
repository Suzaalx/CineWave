import React from 'react'
import Paginate from '../components/movies/Paginate'

export default function Upcoming() {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page='
  return (
    <div>
      <Paginate url={url} header={'Upcoming Movies'}/>
    </div>
  )
}
