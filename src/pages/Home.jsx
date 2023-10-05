import React from 'react'
import useFetch from '../hooks/useFetch'

import ImageSlider from '../components/slider/ImageSlider'
import Upcoming from '../components/home/Upcoming_Movie'
import Top_Rated from '../components/home/Top-Rated'
export default function Home() {
    
  return (
    <div className=' font-mono  relative'>
      <ImageSlider  />
      <Upcoming />
      <Top_Rated/>
    </div>
  )
}
