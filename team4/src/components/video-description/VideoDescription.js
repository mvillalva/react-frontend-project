import React from 'react'
import './VideoDescription.css'

const VideoDescription = (props) => {

    return (
        <div className='video-description'>
          <div className='video-description-title'>{props.title}</div>
        </div>
    )
}


export default VideoDescription