import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../../context/MainContext";
import { LANGUAGES } from "../../../languages";
import './Profile.css'

const ProfileAddButton = (props) => {
    const {language} = useContext(MainContext)
    
    return (        
        <li className="li">
            <Link to='/AddProfile'>
                <div className='avatar-wrapper'>
                    <div className='addProfileIcon fas fa-circle-plus'></div>
                </div>
                <span className='profile-name'>{LANGUAGES[language].ADD_PROFILE}</span>
            </Link>
        </li>
    )
}

export default ProfileAddButton