import React ,{useState} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import { FaPlay } from 'react-icons/fa';
import { MdArrowBackIosNew } from 'react-icons/md';
import { HiStar } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

export default function Movie_Details({id, category, onClick}) {
  
  const tmdbPosterPath = 'https://image.tmdb.org/t/p/w300_and_h450_face';
  const tmdbBackdropPath = 'https://image.tmdb.org/t/p/original';

  const {data:movie, error, loading} = useFetch(`https://api.themoviedb.org/3/${category}/${id}?language=en-US`)
  
  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false)
  const [videoId, setVideoId] = useState('')
  const [videoKey, setVideoKey] = useState('')
  const [videoName, setVideoName] = useState('')


  return (
    <div className=' h-screen relative w-full'>
<SkeletonTheme baseColor="#202020" highlightColor="#444">
  {/* {error && <p>{error}</p>} */}
  {/* {loading && (
    <Skeleton className=' flex mt-40'>
    <Skeleton className='mt-40' count={1} height={400} />
    <Skeleton className='mt-40' count={2} height={100} />
    </Skeleton>
  )} */}
  <button className=' bg-orange-600 px-2 md:px-4 py-2 rounded-xl absolute top-28 left-12 md:left-20 lg:top-32 inline-block lg:left-40 z-30' onClick={(()=>navigate(-1))}><MdArrowBackIosNew className=' inline'/><p className='inline'>Back</p></button>
  { movie && (
    <>
  
  <div className=' flex  h-screen w-full '>
            <div className='  opacity-50 absolute brightness-50  w-full h-screen'>
            <img src={tmdbBackdropPath + movie.backdrop_path} className=" h-screen  w-full object-cover" />
            </div>
            <div  className='flex-col-reverse lg:flex-row-reverse   flex  mx-auto  mt-6   max-w-[80%] justify-evenly   items-center max-h-screen  z-20'>
                <div className=' text-center lg:text-left  lg:max-w-[70%]  max-w-full overflow-hidden relative mx-auto  md:mt-0  px-4'>
                <h3 className='  lg:text-left font-bold uppercase tracking-wide text-2xl md:text-4xl'>
                    {movie.title || movie.name}
                </h3>
                <p className=' lg:text-left my-2'>
                 {movie.genres.map((genre, index)=>(
                  <span key={genre.id} className=' text-sm font-semibold text-gray-300'><Link to={`/genre/${genre.name}`}>{genre.name}</Link> {(index < (movie.genres.length -1)) && '/'} </span>)
                  )}
                </p>
                <p className='  lg:text-left text-md lg:text-xl font-semibold pt-1'>
                  <HiStar className=" inline-block" />
                  {movie.vote_average} Rating
                </p>
                <p className=' lg:text-left text-sm tracking-wide lg:text-md lg:tracking-widest font-light p-2  lg:pt-4'>
                    {movie.overview}
                </p>
               
                <button className="  lg:text-left lg:mt-6 mt-4  bg-orange-600 p-2 rounded-xl " onClick={()=> onClick()}><FaPlay className=' text-2xl inline m-1'/><p className='inline'>Watch Trailer</p></button> 
              </div>

                <div className=' h-44  lg:h-96  brightness-100 '>
                <img
                  alt={movie.original_title || movie.original_name || movie.title}
                  src={movie.poster_path ? `${tmdbPosterPath + movie.poster_path}` : '/img-placeholder.jpg'}
                    className=' object-contain w-full h-full rounded-2xl'
                />
              </div>
              
                
            </div>
            </div>
            
      
      
    </>
   
  )}
  </SkeletonTheme>

    </div>
  )
}
                  
