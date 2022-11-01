import React from "react";
import { Link } from "react-router-dom";
import './ProfileButton.css'

const ProfileButton = ({title, action}) => {
    const clases = action === 'R'? 'profile-button':'profile-button preferred-action'
    const tolink = action === 'R'? '/ManageProfiles':'/profiles'

    return (
        <span>
            <Link to={tolink} className={clases}>{title}</Link>
        </span>
    )
}

export default ProfileButton