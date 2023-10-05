
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css'
import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import useFetch from '../../hooks/useFetch';
import Movie_Card from './Movie_Card';
export default function Paginate({url, header, category}) {
  
  const [page, setPage] = useState(1)
  const {data, error, loading} = useFetch(url+page)

  return (
  <div className=''>
    <div className=' max-w-[80rem] mx-auto my-8'>
        <h2 className=' pt-20 pb-12 px-4 text-3xl uppercase font-bold'>{header}</h2>
        <p>{data?.total_results} results</p>
      {error && <p className=' pt-32 text-2xl text-red-600 text-center'>{error}</p>}
      {loading && <p>Loading...</p>}
      <div className=' grid grid-cols-3  md:grid-cols-4 gap-4 md:gap-8 lg:grid-cols-5 lg:gap-12 '>
      {data && data.results.map((movie) => (
        <Movie_Card category={category} key={movie.id} movie={movie}/>
      ))}
      </div>
    
    </div>

    <div className='py-8 gap-4 text-center flex flex-col  items-center  w-full '>
    <p>Page {page}/{data?.total_pages} </p>
    <PaginationControl
      page={page}
      between={4}
      total={data?.total_pages}
      limit={1}
      changePage={(page) => {
        setPage(page); 
        console.log(page)
      }}
      ellipsis={1}
    />
    </div>
    
  </div>
  )
}
