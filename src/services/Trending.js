import axios from "axios";

export const getTrendigs = (page = 1) => {

    return axios(`https://api.themoviedb.org/3/trending/all/week?api_key=25142cdb852b2907300f51c2383d9f2e&page=${page}`)
        .then(response => response)
}