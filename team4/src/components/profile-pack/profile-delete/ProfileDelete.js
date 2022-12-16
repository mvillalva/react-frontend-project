import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { MainContext } from "../../../context/MainContext";
import { updateData } from "../../../functions/firebaseActions";
import { TYPE } from "../../../functions/general";
import { LANGUAGES } from "../../../languages";
import "./ProfileDelete.css";

const ProfileDelete = (props) => {
    const params = useParams()
    const {profiles, language, changeState} = useContext(MainContext)  
    const curr_profile = profiles.filter((e) => e.uuid === params.id)[0]    

    const deleteProfile = async (e) => {
        e.preventDefault()

        const newProfiles = profiles.filter((e) => e.uuid !== params.id)
        
        await updateData('users', {profiles: newProfiles})
        
        changeState(TYPE.profiles, newProfiles)

        window.location.href = '/ManageProfiles'
    }

    if (profiles.length <= 2) {        
        window.location.href = '/'
        return
    }

    return (
        <div className="delete-container">
            <div className="centered-div animate-container">
                <div className="delete-actions-container">
                    <h1 className="hh1">{LANGUAGES[language].DELETE_PROFILE_Q}</h1>
                    <div className="delete-metadata delete-entry">
                        <div className="profile-avatar">
                            <div className={'profile-icon ' + curr_profile.bg}></div>
                            <div className="profile-name">{curr_profile.name}</div>
                        </div>
                        <div className="delete-delete-warning">
                            {LANGUAGES[language].DELETE_TEXT}
                        </div>
                    </div>
                    <Link to={"/EditProfile/" + params.id} className="delete-button preferred-action">
                        <span>{LANGUAGES[language].KEEP_PROFILE}</span>
                    </Link>
                    <Link to="/ManageProfiles" className="delete-button" onClick={(e)=>{deleteProfile(e)}}>
                        <span>{LANGUAGES[language].DELETE_PROFILE}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileDelete;
