import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProfileContext } from '../../../context/profileContext/ProfileContext'
import './Profile.css'

const Profile = (props) => {
    const clases = props.action === 'U'? ' profile-edit-mode ': ' '
    const editDiv = props.action === 'U'?   <div className='svg-edit-overlay'>
                                                <span className='fa fa-pencil svg-icon-edit'></span>
                                            </div> 
                                        : ' '
    const link = props.action === 'R' ? '/home' : '/EditProfile/' + props.profile.id

    const {changeProfile} = useContext(ProfileContext)

    const setProfile = () => {
        changeProfile(props.profile)        
    }

    return (
        <li className='li profile'>            
            <Link className='profile-link' to={link} onClick={setProfile}>
                <div className='avatar-wrapper'>
                    <div className={'profile-list-icon' + clases + props.profile.bg}></div>
                    {editDiv}                    
                </div>
                <span className='profile-name'>{props.profile.name}</span>
            </Link>
        </li>
    )
}


export default Profile