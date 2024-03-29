import React from "react";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { TYPE } from "../../functions/general";
import { updateData } from "../../functions/firebaseActions";
import { IoAdd } from "react-icons/io5";
import styled from "styled-components";
import { LANGUAGES } from "../../languages";

const AddList = ({ id, media_type, name, image, genres }) => {
    const { profiles, currentProfile, language, changeState } = useContext(MainContext);
    const editProfiles = profiles.filter((e) => e.uuid !== currentProfile.uuid);

    const addMyList = async () => {
        const playlist = currentProfile.playlist.filter((item) => item.id !== id);

        playlist.push({
            id: id,
            media_type: media_type,
            name: name,
            image: image,
            genres: genres,
        });

        currentProfile.playlist = playlist;

        editProfiles.push(currentProfile);

        await updateData("users", { profiles: editProfiles });

        changeState(TYPE.currentProfile, currentProfile);
        changeState(TYPE.profiles, editProfiles);
    };

    return (
        <Container>
            <IoAdd
                className="me-2 custom-border"
                title={LANGUAGES[language].ADD_LIST}
                onClick={() => {
                    addMyList();
                }}
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

export default AddList;
