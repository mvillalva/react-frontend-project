import React from 'react'
import './Profile.css'

const Profile = (props) => {
    const clases = props.action === 'U'? ' profile-edit-mode ': ' '
    const editDiv = props.action === 'U'?   <div className='svg-edit-overlay'>
                                                <span className='fa fa-pencil svg-icon-edit'></span>
                                            </div> 
                                        : ' '

    return (
        <li className='li profile'>
            <a className='profile-link' href="/">
                <div className='avatar-wrapper'>
                    <div className={'profile-icon' + clases + props.class}></div>
                    {editDiv}                    
                </div>
                <span className='profile-name'>{props.name}</span>
            </a>
        </li>
    )
}


export default Profile