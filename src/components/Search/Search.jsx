import React, { useState, useContext } from 'react'
import './style.css'
import { Context } from '../../Context/Context'

export const Search = () => {
  const {getSearchMovies, clickTrending, error} = useContext(Context)
  const [nameMovie, setNameMovie] = useState('')

  const handleChangeMovie = (e) => {
    setNameMovie(e.target.value)
  }

  const handleClickUser = (e) => {
    e.preventDefault()
    getSearchMovies(nameMovie)
    setNameMovie('')
  }


  return (
    <form className='form-container--search'>
        {error && (
          <div className='div-error'>
            <p>Debes de completar el formulario</p>
          </div>
        )}
        <div className='form-div-search'>
            <label>Termino</label>
            <input value={nameMovie} type="text" onChange={handleChangeMovie} />
        </div>
        <div className='fomr-div--button'>
            <button className='button-search' onClick={handleClickUser}>Buscar</button>
        </div>
        <button type='button' className='button-search trending-button'  onClick={clickTrending}>Trending</button>
    </form>
  )
}
