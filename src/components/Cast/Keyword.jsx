import React from 'react'
import useFetch from '../../hooks/useFetch'

export default function Keyword({id, category}) {
    const {data, error, loading} = useFetch(`https://api.themoviedb.org/3/${category}/${id}/keywords`)
  return (
    <div>
        <h3 className=' sm:mt-10 md:mt-6 sidebar-header  '>Keywords</h3>
        <p className='   text-sm mt-4'>{!data ? null : data.keywords.slice(0,6).map((keyword) => (
            <button className=' border my-2 mr-2  p-3 text-sm rounded-xl' key={keyword.id}>#{keyword.name} </button>
        ))}</p>
      
    </div>
  )
}
