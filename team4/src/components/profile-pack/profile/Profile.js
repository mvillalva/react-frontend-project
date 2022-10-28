import React from 'react'
import './Profile.css'

const Profile = (props) => {
    return (
        <li className='li profile'>
            <a className='profile-link' href="/">
                <div className='avatar-wrapper'>
                    <div className={'profile-icon ' + props.class}></div>
                </div>
                <span className='profile-name'>{props.name}</span>
            </a>
        </li>
    )
}


export default Profile