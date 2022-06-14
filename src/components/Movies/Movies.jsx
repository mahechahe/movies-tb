import React, {useContext} from 'react'
import './style.css'
import { Context } from '../../Context/Context'
import { MovieDetail } from '../MovieDetail/MovieDetail'
import ThreeDots from '../Spinner/Spinner'

export const Movies = () => {
  const {dataMovies, movieUser, loading} = useContext(Context)

  if(loading){
    return (
      <div className='div-loading'>
        <ThreeDots></ThreeDots>
      </div>
    )
  }

  if(movieUser.results){
    return (
      <section className='section-movies'>
        <h1>{movieUser.results[0].original_title}</h1>
        <div className='div-container-movies'>
          {movieUser.results?.map((movie, i) => (
            <MovieDetail key={i} movie={movie}></MovieDetail>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className='section-movies'>
      <h1>Tendencias</h1>
        <div className='div-container-movies'>
          {dataMovies.results?.map((movie, i) => (
            <MovieDetail key={i} movie={movie}></MovieDetail>
          ))}
        </div>
    </section>
  )
}
