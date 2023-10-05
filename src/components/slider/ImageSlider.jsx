import React, { useState, useEffect , Component } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import useFetch from '../../hooks/useFetch';


import SliderItems from './SliderItems';
export default function ImageSlider() {
    const {data, error, loading} = useFetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
  

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: true,
    easing: 'easeInOutQuad',
    fade: true
    

  };

  return (
    <div className='  '>
    
    <div>
      
        <Slider {...settings}>
        {data && data.results.slice(0,10).map((movie) => (
        <SliderItems key={movie.id} movie={movie}/>
      ))}
        </Slider>
      </div>
    

    </div>
    );
}
     
