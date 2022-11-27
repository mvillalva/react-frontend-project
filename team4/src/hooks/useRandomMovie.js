import { getTopMovies } from "../functions/movieApi";
import { useEffect, useState } from "react";
import { getRandomInt } from "../functions/general";
import useClip from "./useClip";

const useRandomMovie = () => {
    const [loadedMovie, setLoadedMovie] = useState(null)    

    const getMovie = async () => {
        const movies = await getTopMovies()
        const index = getRandomInt(0, 19)
        
        setLoadedMovie(movies[index])        
    }
    
    useEffect(()=>{        
            getMovie()        
        // eslint-disable-next-line
    }, [])

    const {loadedClip, showPlayer} = useClip(loadedMovie, false)

    return {loadedMovie, loadedClip, showPlayer}
}

export default useRandomMovie