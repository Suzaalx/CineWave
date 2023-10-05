import React from 'react'
import { HiStar } from 'react-icons/hi';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
export default function SliderItems({movie}) {
  const navigate = useNavigate();
    const tmdbPosterPath = 'https://image.tmdb.org/t/p/w300_and_h450_face';
const tmdbBackdropPath = 'https://image.tmdb.org/t/p/original';
  return (
    <div>
       
        <div className=' flex  h-screen w-full '>
            <div className='  opacity-50 absolute brightness-50  w-full h-screen'>
            <img src={tmdbBackdropPath + movie?.backdrop_path} className=" h-screen  w-full object-cover" />
            </div>
            <div  className='flex-col-reverse lg:flex-row-reverse   flex  mx-auto  mt-12   max-w-[80%] justify-center  items-center max-h-screen  z-20'>
                <div className=' text-center lg:max-w-[70%]  max-w-full overflow-hidden relative mx-auto  md:mt-0  px-4'>
                <h3 className='  lg:text-left font-bold uppercase tracking-wide text-2xl md:text-4xl'>
                    {movie?.title}
                </h3>
                <p className='lg:text-left text-md lg:text-xl font-semibold pt-4'>
                  <HiStar className=" inline-block" />
                  {movie?.vote_average} Rating
                </p>
                <p className='lg:text-left text-sm tracking-wide lg:text-md lg:tracking-widest font-light p-2  lg:pt-4'>
                    {movie?.overview}
                </p>
                
                  
                <Link to={`view/movie/${movie?.id}`} className=' mt-6 text-md w-max mx-auto lg:mx-4  rounded-xl p-3  bg-orange-600 block'>Read More</Link>
               
               
              </div>

                <div className=' h-44  lg:h-96  brightness-100 '>
                <img
                  alt={movie?.original_title || movie?.original_name || movie?.title}
                  src={movie?.poster_path ? `${tmdbPosterPath + movie?.poster_path}` : '/img-placeholder.jpg'}
                    className=' object-contain w-full h-full rounded-2xl'
                />
              </div>
              
                
            </div>
            </div>
            
      </div>

    
  )
}
