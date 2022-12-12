import React, { useContext } from "react";
import './PlaylistPage.css';
import Playlist from "../../components/playlist/Playlist";
import {MainContext} from "../../context/MainContext"


const PlaylistPage = () => {
    const {currentProfile} = useContext(MainContext)

     return (        
          <div className="playlist-page-container">
              <div className="animate-container pt-6">
                <Playlist data={currentProfile.playlist} />               
              </div>
          </div>
      )
 }
  
 export default PlaylistPage