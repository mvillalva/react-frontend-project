import React from "react";
import ProfileButton from "../../components/profile-pack/profile-button/ProfileButton";
import Profile from "../../components/profile-pack/profile/Profile";
import ProfileAdd from "../../components/profile-pack/profile/ProfileAdd";
import ProfileList from "../../components/profile-pack/profileList/ProfileList";
import './Profiles.css'

const LoadProfiles = (profiles) => {
    return profiles
    .filter(e => profiles.length === 6? e.id !== 6 : e)
    .map(e => e.id === 6 ? <ProfileAdd name={e.name}></ProfileAdd>:<Profile name={e.name} class={e.bg}></Profile>)
}

const Profiles = (props) => {

    return (
        <div className="profiles-gate-container">
            <div className="centered-div list-profiles-container">
                <ProfileList title={props.title}>
                    {LoadProfiles(props.profiles)}
                </ProfileList>
                <ProfileButton title="Administrar perfiles"></ProfileButton>
            </div>
        </div>
    )
}


export default Profiles