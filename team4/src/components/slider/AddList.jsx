import React from "react";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext"
import { TYPE } from "../../functions/general";
import { updateData } from "../../functions/firebaseActions";
import { IoAddCircleOutline } from "react-icons/io5";

const AddList = ({id, media_type, name, image, genres}) => {

    const {profiles, currentProfile, changeState} = useContext(MainContext)    
    const editProfiles = profiles.filter(e => e.uuid !== currentProfile.uuid)

    const addMyList = async () => {

        const playlist = currentProfile.playlist.filter(item => item.id !== id)
        
        playlist.push({id: id, media_type: media_type, name:name, image: image, genres: genres})

        currentProfile.playlist = playlist

        editProfiles.push(currentProfile)

        await updateData('users', {profiles: editProfiles})

        changeState(TYPE.currentProfile, currentProfile)
        changeState(TYPE.profiles, editProfiles)
    }

    return (
        <IoAddCircleOutline
            className="me-2"
            title="Add to my list"
            onClick={() => {addMyList();}}
        />
    );
};

export default AddList;
