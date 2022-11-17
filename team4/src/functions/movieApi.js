const APY_KEY = process.env.REACT_APP_TMDB_APYKEY;

export const buscar = (peli, setTitulos) => {
    if (peli) {
        // const api_url = `https://www.omdbapi.com/?i=tt3896198&apikey=9c000cc8&s=${peli}`;
        const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${APY_KEY}&language=es-ES&query=${peli}&page=1&include_adult=false`;
        fetch(api_url)
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
            busqueda: true,
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


