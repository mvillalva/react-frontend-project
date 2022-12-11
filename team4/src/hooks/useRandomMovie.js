import { getTopMovies } from "../functions/movieApi";
import { useContext, useEffect, useState } from "react";
import { getRandomInt } from "../functions/general";
import useClip from "./useClip";
import { MainContext } from "../context/MainContext";

const useRandomMovie = () => {
    const [loadedMovie, setLoadedMovie] = useState(null)
    const {language} = useContext(MainContext)

    const getMovie = async () => {
        const movies = await getTopMovies(language)
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