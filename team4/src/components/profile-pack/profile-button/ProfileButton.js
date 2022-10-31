import React from "react";
import './ProfileButton.css'

const ProfileButton = ({title, action}) => {
    const clases = action === 'R'? 'profile-button':'profile-button profile-button-red'
    const tolink = action === 'R'? '/ManageProfiles':'/profiles'

    return (
        <span>
            <a href={tolink} className={clases}>{title}</a>
        </span>
    )
}

export default ProfileButton