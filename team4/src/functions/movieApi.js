import { getCurrentLanguage } from "./general";

const API_KEY = process.env.REACT_APP_TMDB_APYKEY;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const lang = getCurrentLanguage()

export const buscar = async (peli, setTitulos) => {
    if (peli) {        
        const api_url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&language=${lang}&query=${peli}&page=1&include_adult=false`;
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
    const api_url = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&with_watch_monetization_types=flatrate`
    let res = null

    await fetch(api_url)
    .then(data => data.json())
    .then(response => {        
        res = response.results
    })
    
    return res
}

export const getTopSeries = async () => {    
    const api_url = `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&timezone=America&with_watch_monetization_types=flatrate`
    let res = null

    await fetch(api_url)
    .then(data => data.json())
    .then(response => {        
        res = response.results
    })
    
    return res
}

export const getMovieClips = async (id) => {    
    const api_url = `${API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`

    let res = null
    
    await fetch(api_url)
    .then(data => data.json())
    .then(response => {        
        console.log(response.results);
        res = response.results.filter(e => e.type === 'Clip');
    })
    
    return res
}

export const getSeriesClips = async (id) => {    
    const api_url = `${API_BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=en-US`

    let res = null
    
    await fetch(api_url)
    .then(data => data.json())
    .then(response => {        
        console.log(response.results);
        res = response.results.filter(e => e.type === 'Clip');
    })
    
    return res
}