import React, { useState } from 'react'


import useFetch from '../hooks/useFetch'
import PeopleCard from '../components/people/PeopleCard'
export default function People() {
    const [page, setPage]= useState(1)
    
    const {data, error, loading} = useFetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`)

  return (
    <div>
            <div className=' max-w-[80rem] mx-auto my-8'>
        <h2 className=' pt-20 pb-12 px-4 text-3xl uppercase font-bold'>Popular People</h2>
        <p>{data?.total_results} results</p>
      {error && <p className=' pt-32 text-2xl  text-red-600 text-center'>{error}</p>}
      {loading && <p>Loading...</p>}
      <div className=' grid grid-cols-3  md:grid-cols-4 gap-4 md:gap-8 lg:grid-cols-5 lg:gap-12 '>
      {data && data.results.map((people) => (
        <PeopleCard  key={people.id} actor= {people}/>
      ))}
      </div>
    
    </div>
            
   

    
    </div>
  )
}
