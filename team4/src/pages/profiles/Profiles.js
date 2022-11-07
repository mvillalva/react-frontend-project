import React from "react";
import ProfileButton from "../../components/profile-pack/profile-button/ProfileButton";
import Profile from "../../components/profile-pack/profile/Profile";
import ProfileAddButton from "../../components/profile-pack/profile/ProfileAddButton";
import ProfileList from "../../components/profile-pack/profileList/ProfileList";
import './Profiles.css'

const Profiles = ({title, profiles, action}) => {

    const LoadProfiles = () => {
        return profiles
        .filter(e => profiles.length === 6 ? e.id !== 6 : e)
        .map(e => e.id === 6 ? <ProfileAddButton name={e.name}></ProfileAddButton>
                             : <Profile profile={e} action={action}></Profile>)
    }

    const button_title = action === 'R'? "Administrar perfiles" : "Listo"

    if(profiles.length === 0 ){
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        )
    }
    else {
        return (        
            <div className="profiles-gate-container">
                <div className="centered-div list-profiles-container">
                    <ProfileList title={title}>
                        {LoadProfiles()}
                    </ProfileList>
                    <ProfileButton title={button_title} action={action}></ProfileButton>
                </div>
            </div>
        )
    }
}


export default Profiles