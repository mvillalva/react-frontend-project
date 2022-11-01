import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

const Profile = (props) => {
    const clases = props.action === 'U'? ' profile-edit-mode ': ' '
    const editDiv = props.action === 'U'?   <div className='svg-edit-overlay'>
                                                <span className='fa fa-pencil svg-icon-edit'></span>
                                            </div> 
                                        : ' '
    const link = props.action === 'R' ? '/home' : '/EditProfile/' + props.id

    return (
        <li className='li profile'>
            <Link className='profile-link' to={link}>
                <div className='avatar-wrapper'>
                    <div className={'profile-list-icon' + clases + props.class}></div>
                    {editDiv}                    
                </div>
                <span className='profile-name'>{props.name}</span>
            </Link>
        </li>
    )
}


export default Profile