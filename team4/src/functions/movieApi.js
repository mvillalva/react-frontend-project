import { getRandomInt } from "./general";

const API_KEY = process.env.REACT_APP_TMDB_APYKEY;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const buscar = async (peli, setTitulos, lang) => {
    if (peli) {            
        const api_url= `${API_BASE_URL}/search/multi?api_key=${API_KEY}&language=${lang}&query=${peli}&page=1&include_adult=false`
        await fetch(api_url)
        .then(data => data.json())
        .then(resultado => {
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

export const getTopMovies = async (lang, type='') => {
    const media_type = !type ? (getRandomInt(0, 2) === 0 ? 'movie' : 'tv') : type

    const api_url = `${API_BASE_URL}/discover/${media_type}?api_key=${API_KEY}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&with_watch_monetization_types=flatrate`
    let movie = null

    await fetch(api_url)
    .then(data => data.json())
    .then(response => {        
        movie = response.results
    })
    
    return {movie, media_type}
}

export const getTopSeries = async (lang) => {    
    const api_url = `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&with_watch_monetization_types=flatrate`
    let res = []

    await fetch(api_url)
    .then(data => data.json())
    .then(response => {        
        res = response.results
    })
    
    return res
}

export const getMovieClips = async (id, type='movie', lang='en-US') => {    
    console.log(lang)
    const api_url = `${API_BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=${lang}`
    const api_url_en = `${API_BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`

    let res = []
    
    await fetch(api_url)
    .then(data => data.json())
    .then(response => {        
        res = response.results.filter(e => e.type === 'Clip' || e.type === 'Trailer');
    })    

    if (res.length === 0) {
        await fetch(api_url_en)
        .then(data => data.json())
        .then(response => {        
            res = response.results.filter(e => e.type === 'Clip' || e.type === 'Trailer');
        })
    }    
    
    return res
}

export const getSeriesClips = async (id, lang='en-US') => {
    const api_url = `${API_BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=${lang}`
    const api_url_en = `${API_BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=en-US`

    let res = []
    
    await fetch(api_url)
    .then(data => data.json())
    .then(response => {
        res = response.results.filter(e => e.type === 'Clip' || e.type === 'Trailer');
    })

    if (!res || res.length === 0) {
        await fetch(api_url_en)
        .then(data => data.json())
        .then(response => {        
            res = response.results.filter(e => e.type === 'Clip' || e.type === 'Trailer');
        })
    }    
    
    return res
}