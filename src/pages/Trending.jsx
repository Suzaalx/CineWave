import React from 'react'
import Paginate from '../components/movies/Paginate'

export default function Trending() {
  const url = "https://api.themoviedb.org/3/trending/all/day?page="
  return (
    <div>
      <Paginate url={url} header={'Trending Movies'}>
       
      </Paginate>
    </div>
  )
}

