import React, { useContext } from "react";
import { IoCheckmark } from "react-icons/io5";
import { MainContext } from "../../context/MainContext";
import { updateData } from "../../functions/firebaseActions";
import { TYPE } from "../../functions/general";
import { LANGUAGES } from "../../languages";
import styled from "styled-components";

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
        <Container>
            <IoCheckmark
                className="me-2 custom-border"
                title={LANGUAGES[language].REMOVE_LIST}
                onClick={() => {removeList();}}
            />
        </Container>
    );
};

const Container = styled.div`
    .custom-border {
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-width: 2px;
        color: white;
    }
    .custom-border:hover {
        border: 1px solid white;
        border-width: 2px;
        color: white;
    }
`;


export default RemoveList;
