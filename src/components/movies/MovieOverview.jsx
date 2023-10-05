import Modal from "react-responsive-modal";
import { useState } from "react";
import ModalVideo from "react-modal-video";

import React from 'react'
import useFetch from "../../hooks/useFetch";
import './movie.css'
import Movie_Details from "./Movie_Details";
import { useParams } from "react-router-dom";

import 'react-modal-video/scss/modal-video.scss';
import Movie_Misc from "./Movie_Misc";

export default function MovieOverview() {
    const {category,id} = useParams()
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenModal, setOpenModal] = useState(false);
    const youtube = 'https://www.youtube.com/results?search_query=';
    
    
    const {data:movie, error, loading}= useFetch(`https://api.themoviedb.org/3/${(category ? category : 'movie')}/${id}/videos?language=en-US`)

    const onClick =(()=>{
       if (!movie) return;

       if (movie.results.length >=1){
          setIsOpen(true)
       }
       else{
        setOpenModal(true)
       }
       
    })
    const closeModal = () => setOpenModal(false);
  return (
    <>
    {movie &&(
    <div className="  ">

  <ModalVideo  
  channel='youtube' 
  ModalVideo = 'movie-modal-video' 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  
  playlist={!movie ? null : movie.results[0] ? movie.results.map(key => key) : null}
  videoId={!movie ? null : movie.results[0] ? movie.results[0].key  : null}
  />


      <Movie_Details category={category} onClick={onClick} id={id}/>
      <Movie_Misc category={category} id={id}/>
    </div>
    )}
    </>
  )
}
