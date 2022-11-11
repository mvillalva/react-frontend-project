export const buscar = (peli, setTitulos) => {
    if (peli) {
        const api_url = `https://www.omdbapi.com/?i=tt3896198&apikey=9c000cc8&s=${peli}`;

        fetch(api_url)
        .then(data => data.json())
        .then(resultado => {
            const {Search=[]} = resultado;
            setTitulos({
            total: Search.length,
            arreglo: Search,
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
