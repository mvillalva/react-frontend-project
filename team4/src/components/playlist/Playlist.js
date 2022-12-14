import React, { useContext } from "react";
import {MainContext} from '../../context/MainContext'
import "./Playlist.css";
import CardList from "../slider/Card"

const Playlist = ({ data }) => {
    const {currentProfile} = useContext(MainContext)
    
    const list = currentProfile.playlist

    return (
        <>
            <h1 className="pt-5 ps-5 fs-3">Mi lista</h1>
            <div className="playlist-list">
                {list.length > 0 ? (
                    <div className="d-flex my-5 gap-2 justify-content-start flex-wrap" style={{maxWidth: "1285px"}}>
                        {list.map((movie, index) => {
                            return  <div key={index}>
                                        <CardList movieData={movie} index={index} key={movie.id} isLiked={true}/>
                                    </div>
                        })}
                    </div>
                    )
                :  ''
                }
            </div>
        </>
    );
};

export default Playlist