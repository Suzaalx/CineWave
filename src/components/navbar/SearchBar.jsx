import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const navigate = useNavigate()
    const [search, setSearch] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (search){
          let query = search
           navigate(`/search?q=${query}`)
          console.log(search)
          
        }
    }
  return (
<div className='   mx-auto'>
    <form onSubmit={handleSubmit} className='  relative '>
      <label className='  rounded-lg '>
      <input 
      type="text" 
      placeholder='Search' 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className=' h-12 w-80  rounded-lg bg-[#212121]'
       />
      <button className=' bg-orange-600 z-10 right-0 px-3 rounded-full h-11 my-auto absolute'><FaSearch/></button>
      </label>
      </form>
  </div>
  )
}
