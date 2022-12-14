// import { getTopMovies } from "../functions/movieApi";
import { getTopSeries } from "../functions/movieApi";
import { useContext, useEffect, useState } from "react";
import { getRandomInt } from "../functions/general";
// import useClip from "./useClip";
import useTrailer from "./useTrailer";
import { MainContext } from "../context/MainContext";

const useRandomSeries = () => {
    const [loadedSeries, setLoadedSeries] = useState(null);  
    const {language} = useContext(MainContext)

    const getMovie = async () => {
        const series = await getTopSeries(language); // esta modificar para que funcione el hook
        const index = getRandomInt(0, 12);
        
        setLoadedSeries(series[index]);       
    }
    
    useEffect(()=>{        
            getMovie();        
        // eslint-disable-next-line
    }, [])

    const {loadedClip, showPlayer} = useTrailer(loadedSeries, false);
    // console.log(loadedSeries, loadedClip, showPlayer);
    return {loadedSeries, loadedClip, showPlayer};
}

export default useRandomSeries;