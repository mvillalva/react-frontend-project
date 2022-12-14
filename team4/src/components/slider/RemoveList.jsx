import React, { useContext } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { MainContext } from "../../context/MainContext";
import { updateData } from "../../functions/firebaseActions";
import { TYPE } from "../../functions/general";

const RemoveList = ({ id }) => {

    const {profiles, currentProfile, changeState} = useContext(MainContext)
    const editProfiles = profiles.filter(e => e.uuid !== currentProfile.uuid)

    const removeList = async () => {

        const playlist = currentProfile.playlist.filter(item => item.id !== id)        

        currentProfile.playlist = playlist

        editProfiles.push(currentProfile)

        await updateData('users', {profiles: editProfiles})

        changeState(TYPE.currentProfile, currentProfile)
        changeState(TYPE.profiles, editProfiles)
    }


    return (
        <BsCheckCircle
            className="me-2"
            title="Remove From List"
            onClick={() => {removeList();}}
        />
    );
};

export default RemoveList;
