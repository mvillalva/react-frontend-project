import React from "react";
import './ProfileButton.css'

const ProfileButton = (props) => {
    return (
        <span>
            <a href="/" className="profile-button">{props.title}</a>
        </span>
    )
}

export default ProfileButton