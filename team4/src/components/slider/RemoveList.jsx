import React, { useContext } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MainContext } from "../../context/MainContext";
import { updateData } from "../../functions/firebaseActions";
import { TYPE } from "../../functions/general";
import { LANGUAGES } from "../../languages";

const RemoveList = ({ id }) => {

    const {profiles, currentProfile, language, changeState} = useContext(MainContext)
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
        <IoCheckmarkCircleOutline
            className="me-2"
            title={LANGUAGES[language].REMOVE_LIST}
            onClick={() => {removeList();}}
        />
    );
};

export default RemoveList;
