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
          rel: 1,
          showinfo: 0,          
        },
    };
    
    const hiddenControl = (event) => {
        event.target.stopVideo();        
        show(false)
    }

    const setDuration = (e) => {
        const runtime = e.target.getDuration()
        opts.playerVars['end'] = runtime <= 90 ? runtime - 15 : 90
        e.target.setOption(opts)
    }
    
    const showControl = (e) => {
        setDuration(e)
        show(true)
    }


    return (
        <YouTube className={className} videoId={videoId} opts={opts} onReady={(e)=>{showControl(e)}} onEnd={(e)=>{hiddenControl(e)}} />
    );
};

export default VideoPreview;
