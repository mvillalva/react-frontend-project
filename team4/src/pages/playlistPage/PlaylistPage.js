import React, { useContext, useEffect } from "react";
import './PlaylistPage.css';
import Playlist from "../../components/playlist/Playlist";
import {MainContext} from "../../context/MainContext"
import { LANGUAGES } from "../../languages";


const PlaylistPage = () => {
    const {currentProfile, language} = useContext(MainContext)

    useEffect( () => {
      document.title = `Team4`
    })

     return (        
          <div className="playlist-page-container">
              <div className="animate-container pt-6">
              <h1 className="pt-5 ps-5 fs-3">{LANGUAGES[language].MY_LIST}</h1>
                <Playlist data={currentProfile.playlist} />               
              </div>
          </div>
      )
 }
  
 export default PlaylistPage