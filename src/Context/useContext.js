import { useState } from "react"
import { searchMovie } from "../services/searchMovie";

export const useContextHook = () => {

    const [dataMovies, setDataMovies] = useState([])
    const [movieUser, setMovieUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const prueba = () => {
        alert('hola')
    }

    const clickTrending = () => {
        setLoading(true)
        setTimeout(() => {
            setMovieUser([])
            setLoading(false)
        }, 1000)
    }

    const getSearchMovies = (typeMovie) => {
        setLoading(true)
        if(typeMovie === ''){
            setError(true)
            setTimeout(() => {
                setLoading(false)
                return setError(false)
            }, 2000)
        }

        return searchMovie(typeMovie)
            .then(response => {
                setTimeout(() => {
                    setMovieUser(response.data)
                    setLoading(false)
                    setError(false)
                }, 2000)
            })

    }

    return {prueba, setDataMovies, getSearchMovies, dataMovies, movieUser, clickTrending, loading, error}
}