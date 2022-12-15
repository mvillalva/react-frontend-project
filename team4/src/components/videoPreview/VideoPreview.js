import React from "react";
import YouTube from "react-youtube";

const VideoPreview = ({show, className, videoId, height = null, width = null}) => {
    const {innerWidth, innerHeight} = window;

    const opts = {
        height: height? height : innerHeight*1.35,
        width: width? width : innerWidth*1.3,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          fs: 0,
          rel: 0,
          showinfo: 0,          
        },
    };
    
    const hiddenControl = (event) => {
        event.target.stopVideo();        
        show(false)
    }

    let done = false
    const setDuration = (e) => {
        if (e.data === 1 && !done) {
            setTimeout(() => {hiddenControl(e)}, 40000)
            done = true
        }
    }
    
    const showControl = (e) => {
        show(true)
    }


    return (
        <YouTube className={className} videoId={videoId} opts={opts} onStateChange={(e) => {setDuration(e)}} onReady={(e)=>{showControl(e)}} onEnd={(e)=>{hiddenControl(e)}} />
    );
};

export default VideoPreview;
