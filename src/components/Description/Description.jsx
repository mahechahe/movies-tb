import React, {useEffect, useState, useContext} from 'react'
import { Context } from '../../Context/Context'
import './style.css'
import { getTrendigs } from '../../services/Trending'
import start from '../../assets/estrella.png'
import { Search } from '../Search/Search'

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export const Description = () => {

    const {setDataMovies, getSearchMovies} = useContext(Context)

    const [singleMovie, setSingleMovie] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getTrendigs()
            .then(response => {
                setDataMovies(response.data)
                setSingleMovie(response.data.results[0])
                setLoading(false)
        })

    }, [])


  return (
    <section className='section-description-container'>
        <div className='div-description-center'>
            <div className='div-center-img'>
                <img src={IMG_URL + singleMovie.poster_path} alt={singleMovie.name} />
            </div>
            <div className='div-center-description'>
                <h2>{singleMovie.name}</h2>
                <p>{singleMovie.first_air_date}</p>
                <div className='div-favorites'>
                    <img src={start} alt={start}></img>
                    <h4>{singleMovie.vote_average}</h4>
                </div>
                <p>{singleMovie.overview}</p>
                <div className='div-description-button'>
                    <button onClick={() => getSearchMovies()}>Ver Trailer</button>
                    <button>Ver Ahora</button>
                </div>
            </div>
        </div>
        <div className='div-description-bottom'>
            <Search></Search>
        </div>
    </section>
  )
}
