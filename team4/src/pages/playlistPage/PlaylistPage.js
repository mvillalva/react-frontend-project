import React from "react";
import './PlaylistPage.css';
import Playlist from "../../components/playlist/Playlist";

const PlaylistPage = ({title}) => {

     return (        
          <div className="playlist-page-container">
              <div className="centered-div">
               <Playlist title={title}>
               </Playlist>
              </div>
          </div>
      )
 }
  
 export default PlaylistPage