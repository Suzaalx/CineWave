import { useState } from 'react'
import useFetch from './hooks/useFetch'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import pages
import Home from './pages/Home'
import Trending from './pages/Trending'
import TvShows from './pages/TvShows'
import Search from './pages/Search'
import Popular from './pages/Popular'
import Upcoming from './pages/Upcoming'
import TopRated from './pages/TopRated'
import People from './pages/People'
// import components
import Navbar from './components/navbar/Navbar'

import MovieOverview from './components/movies/MovieOverview'
import PeopleDetail from './components/people/PeopleDetail'
import Genre from './pages/Genre'
import GenreItems from './pages/GenreItems'

function App() {
  // const {data, loading, error} = useFetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/popular' element={<Popular/>}/>
        <Route path ='/upcoming' element={<Upcoming/>}/>
        <Route path ='/top-rated' element={<TopRated/>}/>
        <Route path = '/trending' element = { <Trending />} />
        <Route path = '/tvshows' element = { <TvShows/>} />
        <Route path = '/search' element = { <Search />} />
        <Route path = '/view/:category/:id' element = {<MovieOverview/> } />
        <Route path = '/people' element={<People/>}/>
        <Route path='view/people/:id' element={<PeopleDetail/>}/>
        <Route path = '/genrelist' element={<Genre/>}/>
        <Route path ='/genre/:name' element={<GenreItems/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
