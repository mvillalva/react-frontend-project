import React, { useContext, useEffect, useState } from "react";
import { getMediaList } from "../../functions/movieApi";
import {MainContext} from '../../context/MainContext'
import "./Playlist.css";
import CardList from "../slider/Card"

const Playlist = ({ data }) => {
    const [list, setList] = useState([]);
    const {language} = useContext(MainContext)

    useEffect(() => {
        const getList = async () => {
            const datas = await getMediaList(data, language);            
            setList(datas);
        };

        getList();
    }, [data, language]);

    return (
        <>
            <h1 className="pt-5 ps-5 fs-3">Mi lista</h1>
            <div className="playlist-list">
                {list.length > 0 ? (
                    <div className="d-flex my-5 gap-2 justify-content-center flex-wrap">
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

export default Playlist;
