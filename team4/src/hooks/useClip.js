import React, { useEffect, useState } from 'react'
import VideoPreview from '../components/videoPreview/VideoPreview'
import { getRandomInt } from '../functions/general'
import { getMovieClips } from '../functions/movieApi'

const useClip = (id, showInMobile = true, height = null, width = null) => {
    const {innerWidth} = window
    const [loadedClip, setLoadedClip] = useState(null)
    const [showPlayer, setShowPlayer] = useState(false)
    
    const showClip = (video) => {
        setTimeout(() => {            
            setLoadedClip(video)
            setShowPlayer(true)
        }, 3000)
    }

    const getClip = async (id) => {        
        const movieClips = await getMovieClips(id)
        const videoClip = movieClips.length > 0 ? <VideoPreview show={setShowPlayer} className="home-movie-video" videoId={movieClips[getRandomInt(0, movieClips.length-1)].key} height={height} width={width} /> : null

        if (videoClip) {
            showClip(videoClip)            
        }
    }

    useEffect(() => {
        if(id && (showInMobile  || (!showInMobile && innerWidth > 767) )) {
            getClip(id.id)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    return {loadedClip, showPlayer}
}

export default useClip