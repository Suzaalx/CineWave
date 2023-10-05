import React from 'react'
import Paginate from '../movies/Paginate'

export default function MovieSearch({search}) {

    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=`
  return (
    <div>
      <Paginate url={url} header={ `Movie results`}/>
    </div>
  )
}
