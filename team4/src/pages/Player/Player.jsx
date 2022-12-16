import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
// import video from "../../components/assets/video.mp4";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { TYPE } from "../../functions/general";
import { getMovieClips, getSeriesClips } from "../../functions/movieApi";
import YouTube from "react-youtube";

export default function Player({type}) {
  const [loadedClip, setLoadedClip] = useState(null)
  const {changeState} = useContext(MainContext)
  const navigate = useNavigate();
  const params = useParams()  

  const opts = {
    height: window.innerHeight,
    width: window.innerWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,      
      disablekb: 1,
      modestbranding: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
      loop:1,
    },
  };

  useEffect( () => {
    document.title = `Team4`
  })
  
  const getClip = async () => {    
    const movieClips = await (type==='movie'? getMovieClips(params.id) : getSeriesClips(params.id))
    const movie = movieClips.length > 0 ? movieClips[0].key : 'EC9EFoot_a0'      
    setLoadedClip(<YouTube videoId={movie} opts={opts}/>)
  }

  getClip()
  
  changeState(TYPE.loading, true)

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>        
        {loadedClip ? loadedClip : ''}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
  }
`;
