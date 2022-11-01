import React from "react";
import VideoDescription from "../../components/video-description/VideoDescription";
import './VideoDescriptions.css'

const VideoDescriptions = ({title}) => {

    /* const LoadProfiles = () => {
        return profiles
        .filter(e => profiles.length === 6 ? e.id !== 6 : e)
        .map(e => e.id === 6 ? <ProfileAddButton name={e.name}></ProfileAddButton>:<Profile name={e.name} class={e.bg} action={action}></Profile>)
    }

    const button_title = action === 'R'? "Administrar perfiles" : "Listo" */

    return (
        <>
            <VideoDescription title={title}>
            </VideoDescription>
        </>
    )
}


export default VideoDescriptions