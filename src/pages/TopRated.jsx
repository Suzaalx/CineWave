import React from 'react'
import Paginate from '../components/movies/Paginate'

export default function TopRated() {
  const url ='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page='
  return (
    <div>
      <Paginate url={url} header= {'Top Rated Movies'}/>
      
    </div>
  )
}

