import React from 'react'
import Paginate from '../movies/Paginate'

export default function TvSearch({search}) {
    const url = `https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=en-US&page=`
  return (
    <div>
      <Paginate url={url} header={`Tv results`}/>
    </div>
  )
}
