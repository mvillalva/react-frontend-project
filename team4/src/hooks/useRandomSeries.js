// import { getTopMovies } from "../functions/movieApi";
import { getTopSeries } from "../functions/movieApi";
import { useEffect, useState } from "react";
import { getRandomInt } from "../functions/general";
// import useClip from "./useClip";
import useTrailer from "./useTrailer";

const useRandomSeries = () => {
    const [loadedSeries, setLoadedSeries] = useState(null);  

    const getMovie = async () => {
        const series = await getTopSeries(); // esta modificar para que funcione el hook
        const index = getRandomInt(0, 19);
        
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