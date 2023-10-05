import React from 'react'
import MovieSearch from '../components/search/MovieSearch'
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import TvSearch from '../components/search/TvSearch'
import PeopleSearch from '../components/search/PeopleSearch'

export default function Search() {
  const [display, setDisplay] = useState(1)
  const [searchquery, setSearchQuery]= useState(null)
  const location = useLocation().search
  useEffect(() => {
    const query = new URLSearchParams(location).get('q')
    setSearchQuery(query)
  }, [location])
  return (
    <div>
      <nav className=' mt-28  mx-auto w-[80%]'>
        <ul className=' flex  gap-20 text-2xl nav'>
          <li>
            <button onClick={()=>setDisplay(1)}>Movie</button>
             </li>
          <li>
            <button onClick={()=>setDisplay(2)}>Tv Shows</button>
          </li>
          <li>
            <button onClick={()=>setDisplay(3)}>People</button>
          </li>
        </ul>
      </nav>
      <div className='-mt-12 '>
        {display === 1 && <MovieSearch search={searchquery} />}
        {display === 2 && <TvSearch search={searchquery}/>}
        {display === 3 && <PeopleSearch search={searchquery}/>}
        </div>
      
    </div>
  )
}
