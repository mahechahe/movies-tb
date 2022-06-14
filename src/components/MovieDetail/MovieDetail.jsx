import React from 'react'
import './style.css'

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export const MovieDetail = ({movie}) => {
  
  return (
    <div className='div-movie-detail'>
      <img src={IMG_URL + movie.poster_path} alt={movie.title} />
      <div className='div-detailmovie-body'>
        <p>{movie.original_title}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}
