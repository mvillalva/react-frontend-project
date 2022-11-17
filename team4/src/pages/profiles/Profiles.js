import React from "react";
import ProfileButton from "../../components/profile-pack/profile-button/ProfileButton";
import Profile from "../../components/profile-pack/profile/Profile";
import ProfileAddButton from "../../components/profile-pack/profile/ProfileAddButton";
import ProfileList from "../../components/profile-pack/profileList/ProfileList";
import './Profiles.css'

const Profiles = ({title, profiles, action}) => {

    const LoadProfiles = () => {
        return profiles
        .filter(e => profiles.length === 6 ? e.type !== 'UserAdd' : e)
        .sort((s1, s2) => 
            (s1.type < s2.type || (s1.type === s2.type && s1.name < s2.name))? -1 :
            ((s1.type === s2.type && s1.name > s2.name) || (s1.type > s2.type))? 1 : 0
        )
        .map((e, index) => e.type === 'UserAdd' ? <ProfileAddButton name={e.name} key={index}></ProfileAddButton>
                             : <Profile profile={e} index={index+1} action={action} key={index}></Profile>)
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