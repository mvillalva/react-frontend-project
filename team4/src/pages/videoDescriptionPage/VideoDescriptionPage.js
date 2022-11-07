import React from "react";
import './VideoDescriptionPage.css';
import VideoDescription from "../../components/video-description/VideoDescription";

const VideoDescriptionPage = ({title}) => {

     return (        
          <div className="video-description-page-container">
              <div className="centered-div">
               <VideoDescription title={title}>
               </VideoDescription>
              </div>
          </div>
      )
 }
  
 export default VideoDescriptionPage