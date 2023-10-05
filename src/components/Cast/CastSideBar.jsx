import React from 'react'
import useFetch from '../../hooks/useFetch'
import Keyword from './Keyword'
export default function CastSideBar({id, category}) {
    const {data, error, loading} = useFetch(`https://api.themoviedb.org/3/${category}/${id}?language=en-US`)
  return (
    <div>
        
        <div className=' pt-6 md:pt-6 grid grid-flow-col '>
          <div>
        <h3 className='sidebar-header'>Status</h3>
        <p className='  text-sm mt-4'>{!data ? null : data.status}</p>
          </div>

          <div>
        <h3 className='sidebar-header'>Release Date</h3>
        <p className='  text-sm mt-4'>{!data ? null : data.release_date}</p>
          </div>
        <div>
        <h3 className=' sidebar-header '>Homepage</h3>
        <p className='  text-sm mt-4'>{!data ? null : data.status}</p>
        </div>
        </div>
   
        <div className='pt-3 md:pt-6 grid grid-flow-col  '>
          <div>
        <h3 className=' sidebar-header '>Rating</h3>
        <p className='  text-sm mt-4'>{!data ? null : data.vote_average}</p>
          </div>

          <div>
        <h3 className=' sidebar-header '>Budget</h3>
        <p className='  text-sm mt-4'>{!data ? null : data.budget}</p>
          </div>

          <div>
        <h3 className=' sidebar-header '>Revenue</h3>
        <p className='  text-sm mt-4'>{!data ? null : data.revenue}</p>
          </div>
          <div>
        <h3 className=' sidebar-header '>Runtime</h3>
        <p className='  text-sm mt-4'>{!data ? null : data.runtime} mins</p>
          </div>
        </div>


        <div className='   px-4 text-center '>
      <h3 className='sidebar-header'>Genre</h3>
        <p className=' mt-3 md:mt-6'>{!data ? null : data.genres.map((genre) => (
            <button className='  m-2 p-2 text-sm rounded-xl text-center' key={genre.id}>{genre.name} </button>
        ))}</p>
        {data?.keywords &&
         <Keyword category={category} id={id}/>
        }
        



       
    </div>
    
    </div>
  )
}
