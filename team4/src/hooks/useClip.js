import React, { useEffect, useState } from 'react'
import VideoPreview from '../components/videoPreview/VideoPreview'
import { getRandomInt } from '../functions/general'
import { getMovieClips } from '../functions/movieApi'

const useClip = (id, media, showInMobile = true, height = null, width = null) => {
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
        const movieClips = await getMovieClips(id, media)
        const movieIndex = movieClips.length > 0 ? getRandomInt(0, movieClips.length-1) : 0
        const movieId = movieClips.length > 0 ? movieClips[movieIndex].key : 'EC9EFoot_a0'

        const videoClip = <VideoPreview show={setShowPlayer} className="home-movie-video" videoId={movieId} height={height} width={width} />

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