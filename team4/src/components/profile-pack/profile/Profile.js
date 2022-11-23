import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../../context/MainContext'
import './Profile.css'

const Profile = (props) => {
    const clases = props.action === 'U'? ' profile-edit-mode ': ' '
    const editDiv = props.action === 'U'?   <div className='svg-edit-overlay'>
                                                <span className='fa fa-pencil svg-icon-edit'></span>
                                            </div> 
                                        : ' '
    const link = props.action === 'U' ? '/EditProfile/' + props.profile.uuid : '/home'

    const {state, changeState} = useContext(MainContext)

    const setProfile = (e) => {
        e.preventDefault()
        state.current_profile = props.profile        
        changeState(state)
        window.location.href = link
    }    

    return (        
        <li className={props.action === 'M'?'li profile2' : 'li profile'}>
            <Link className={'profile-link ' + (props.class? props.class : '')} to={link} onClick={(e) => {setProfile(e)}}>
                <div className='avatar-wrapper'>
                    <div className={'profile-list-icon ' + (props.action === 'M'? 'profile-list-icon2 ' :'') + clases + props.profile.bg}></div>
                    {editDiv}                    
                </div>
                <span className='profile-name'>{props.profile.name}</span>
            </Link>
        </li>        
    )
}


export default Profile