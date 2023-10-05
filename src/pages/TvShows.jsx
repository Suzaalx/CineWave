import React from 'react'
import Paginate from '../components/movies/Paginate'

export default function TvShows() {
  const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&page='
  return (
    <div>
      <Paginate category={'tv'} url={url} header={'Tv Shows'}/>
    </div>
  )
}
