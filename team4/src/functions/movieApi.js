import { getCurrentLanguage } from "./general";

const APY_KEY = process.env.REACT_APP_TMDB_APYKEY;
const lang = getCurrentLanguage()

export const buscar = async (peli, setTitulos) => {
    if (peli) {
        // const api_url = `https://www.omdbapi.com/?i=tt3896198&apikey=9c000cc8&s=${peli}`;
        const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${APY_KEY}&language=${lang}&query=${peli}&page=1&include_adult=false`;
        await fetch(api_url)
        .then(data => data.json())
        .then(resultado => {
            // const {Search=[]} = resultado;
            const {results=[]} = resultado;
            setTitulos({
            total: results.length,
            arreglo: results,
            busqueda: true,
            });
        })
    } else {
        setTitulos({
            total: 0,
            arreglo: [],
            busqueda: false,
            });
    }
}

export function defaultTitulos() {
    return {
        arreglo: [],
        total: 0,
        busqueda: false
    }
}

export const getTopMovies = async () => {
    const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${APY_KEY}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&with_watch_monetization_types=flatrate`
    let res = null
    await fetch(api_url)
    .then(data => data.json())
    .then(response => {        
        res = response.results
    })
    
    return res
}