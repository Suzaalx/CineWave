import React, {useEffect, useState} from 'react'
import {  NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import { FaBars } from 'react-icons/fa'
import { AiFillCloseCircle} from 'react-icons/ai'
import {RiSearch2Line} from 'react-icons/ri'

import './navbar.css'
export default function Navbar() {
  const [showNav, setShowNav] = useState(false)
  const [showSearchBar , setSearchBar]= useState(false)
  const [scroll, setScroll] = useState(false)
  const [stickyClass, setStickyClass]= useState('absolute')
  const [hover, setHover] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
    }, []
  )
  const stickNavbar = () => {
    if(window.scrollY >= 100){
      setScroll(true)
      setStickyClass('fixed top-0 bg-[#050607] left-0 right-0 z-50')
    }else{
      setScroll(false)
      setStickyClass(' absolute')
    }
  }
  const searchFunction = () => {
    setSearchBar(!showSearchBar)
    setShowNav(false)
    
  }
  const closeFunction = () => {
    setShowNav(false)
    setSearchBar(false)
  }
  const navFunction = () => {
    setShowNav(!showNav)
    setSearchBar(false)
  }
  return (
    <div>
      <div className={` w-full z-50 `}>
    <div className={`  py-2 text-white ${stickyClass} w-full mx-auto  z-50  lg:block     `}>
      <nav className={`  flex w-[90%] mx-auto  items-center   min-h-16`}>
      <h1 className=' text-3xl '>CineVerse</h1>
      <ul className=' text-md py-2 lg:ml-8 mr-auto hidden  lg:flex lg:gap-4  '>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        
        <li onMouseOver={()=>setHover(true)} onMouseLeave={()=> setHover(false)} className='dropdown pb-1'> 
          <NavLink  to='/discover'>Discover</NavLink>
        </li>
        <li>
          <NavLink to='/trending'>Trending</NavLink>
        </li>
        <li>
          <NavLink to='/tvshows'>TV Shows</NavLink>
        </li>
        <li>
          <NavLink to='/people'>People</NavLink>
        </li>
        <li>
          <NavLink to='/genrelist'>Genre</NavLink>
        </li>

      </ul>
      <div className=''>
        <SearchBar/>
      </div>

        </nav>
        </div >
    {hover &&(
      <div onMouseOver={()=>setHover(true)} onMouseLeave={()=> setHover(false)}  className=' fixed z-[100] h-40 dropdown-content'>
        <ul className=' rounded-xl top-6    left-80 w-36 bg-orange-600 my-6 px-3 py-2 fixed z-20 '>
          
          <li className=' p-2'><NavLink to ="/popular">Popular</NavLink></li>
          <li className=' p-2'><NavLink to ="/top-rated">Top-Rated</NavLink></li>
          <li  className=' p-2'><NavLink to ="/upcoming">Upcoming</NavLink></li>
        </ul>
        <div className='z-[9999]  w-7 h-4 top-12 left-[22rem] responsive px-6  pr-1  fixed  rotate-45 bg-orange-600 '></div>
      </div>)}
   
    </div>


    {/* mobile/tablet navbar */}
    <div className={` text-white fixed bg-[#050607] z-50 lg:hidden  w-full px-4 md:px-12  `}>
      <nav className={` mx-1 md:mx-6 flex justify-between items-center   h-16 `}>
      {showNav ? <AiFillCloseCircle onClick={() => closeFunction()} className=' text-3xl cursor-pointer'/> : <FaBars onClick={() => navFunction()} className=' text-3xl cursor-pointer'/>}
      <h1 className=' text-3xl '>CineVerse</h1>
      
     {showSearchBar ? <AiFillCloseCircle onClick={() => closeFunction()} className=' text-3xl cursor-pointer'/> : <RiSearch2Line onClick={() => searchFunction()} className=' text-3xl cursor-pointer'/>}
        </nav>
      {showNav && <div className=' flex items-center flex-col gap-6 my-4'>
        <NavLink to='/'>Home</NavLink>
        <div>
        <NavLink to='/discover'>Discover</NavLink>

        </div>
        <NavLink to='/trending'>Trending</NavLink>
        <NavLink to='/tvshows'>TV Shows</NavLink>
        <SearchBar/>
      </div>}
      {showSearchBar && <div className=' flex items-center flex-col gap-6 my-4'>
        <SearchBar/>
      </div>}

      </div>
    </div>


  )
}
