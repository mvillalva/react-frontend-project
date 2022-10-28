import React from "react";
import './Profile.css'

const ProfileAdd = (props) => {
    return (
        <li className="li">
            <a href="/">
                <div className='avatar-wrapper'>
                    <div className='addProfileIcon fas fa-circle-plus'></div>
                </div>
                <span className='profile-name'>{props.name}</span>
            </a>
        </li>
    )
}

export default ProfileAdd