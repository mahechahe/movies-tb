import axios from 'axios'

export const searchMovie = (typeMovie = 'Jack+Reacher') => {
    return axios(`https://api.themoviedb.org/3/search/movie?api_key=25142cdb852b2907300f51c2383d9f2e&query=${typeMovie}`)
        .then(response => response)
}