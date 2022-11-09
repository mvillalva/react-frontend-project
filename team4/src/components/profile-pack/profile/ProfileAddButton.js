import React from "react";
import { Link } from "react-router-dom";
import './Profile.css'

const ProfileAddButton = (props) => {
    return (        
        <li className="li">
            <Link to='/AddProfile'>
                <div className='avatar-wrapper'>
                    <div className='addProfileIcon fas fa-circle-plus'></div>
                </div>
                <span className='profile-name'>{props.name}</span>
            </Link>
        </li>
    )
}

export default ProfileAddButton