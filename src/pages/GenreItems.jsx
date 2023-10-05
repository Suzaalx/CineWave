import React from 'react'
import { useParams } from 'react-router-dom'
import Paginate from '../components/movies/Paginate'

export default function GenreItems() {
    const {name} = useParams()
    const url=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${name}&page=`
  return (
    <div>
        <Paginate url={url} header={name}/>
    </div>
  )
}
