import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import useFetch from '../../hooks/useFetch'
import './slider.css'
import { Link } from 'react-router-dom';
export default function Review({id, category}) {
    const {data:movie, error, loading}= useFetch(`https://api.themoviedb.org/3/${category}/${id}/reviews?language=en-US&page=1`)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    
    <div className=' max-w-[60rem] h-max mt-12 mx-auto'>
            <h3 className=' sm:mt-10 md:mt-6 text-center sidebar-header  '>Reviews</h3>
        <Slider {...settings} cl>
        {!movie ? <p>No Reviews Found</p> : movie.results.slice(0,6).map((review) => (
            <div className=' shadow my-8 px-10 md:px-28  text-center py-4 text-sm rounded-xl bg-[#252424] ' key={review.id}>
                <p className=' my-4 text-md font-bold'>{review.author}</p>
                <p className=' text-sm mt-2 my-2'>{(review.content).slice(0,200)}...</p>
                <div className=' py-2'></div>
                <Link className=' bg-orange-600 p-3 my-4 rounded-xl' target='_blank' to={review.url}>Read full Review</Link>
                <div className=' py-2'></div>
                </div>
        ))}

        </Slider>

    </div>
    
    
    </>
  )
}
