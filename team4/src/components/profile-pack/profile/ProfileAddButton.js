import React from "react";
//import { Link } from "react-router-dom";
import './Profile.css'

const ProfileAddButton = (props) => {
    return (
        <li className="li">
            <a href='/AddProfile'>
                <div className='avatar-wrapper'>
                    <div className='addProfileIcon fas fa-circle-plus'></div>
                </div>
                <span className='profile-name'>{props.name}</span>
            </a>
        </li>
    )
}

export default ProfileAddButton