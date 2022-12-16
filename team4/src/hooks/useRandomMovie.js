import { getTopMovies } from "../functions/movieApi";
import { useContext, useEffect, useState } from "react";
import { getRandomInt } from "../functions/general";
import useClip from "./useClip";
import { MainContext } from "../context/MainContext";

const useRandomMovie = (type) => {
    const [loadedMovie, setLoadedMovie] = useState(null)
    const [media_type, setMedia] = useState('movie')
    const {language} = useContext(MainContext)

    const getMovie = async () => {
        const res = await getTopMovies(language, type)        
        const index = getRandomInt(0, 19)

        setMedia(res.media_type)
        setLoadedMovie(res.movie[index])        
    }
    
    useEffect(()=>{        
            getMovie()        
        // eslint-disable-next-line
    }, [])

    const {loadedClip, showPlayer} = useClip(loadedMovie, media_type, false)

    return {loadedMovie, loadedClip, showPlayer, media_type}
}

export default useRandomMovie