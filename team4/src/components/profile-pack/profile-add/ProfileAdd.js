import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MainContext } from "../../../context/MainContext";
import { updateData } from "../../../functions/firebaseActions";
import { uuidv4 } from "@firebase/util";
import './ProfileAdd.css'
import { TYPE } from "../../../functions/general";
import { Form } from "react-bootstrap";
import { LANGUAGES } from "../../../languages";

const ProfileAdd = (props) => {
    const [isInvalid, setIsInvalid] = useState(false);    
    const navigate = useNavigate()
    const location = useLocation()
    const {profiles, language, changeState} = useContext(MainContext)

    let bg = 'bg-5'
    let name = ''
    
    const addProfile = async (e) => {
        e.preventDefault()
        
        let input = document.getElementById('profile-name')
        
        if (!profiles.find(e => e.name.toLowerCase() === input.value.toLowerCase())) {
            setIsInvalid(false)

            const data = {
                uuid: uuidv4(),
                name: input.value,
                avatar: '',
                bg: bg,
                type: 'Profile',
                playlist: [],
            }

            profiles.push(data)

            await updateData('users', {profiles: profiles})
            changeState(TYPE.profiles, profiles)

            window.location.href = '/ManageProfiles'
        } else {           
            setIsInvalid(true)
        }
    }

    const showAvatars = () => {

        let input = document.getElementById('profile-name')
        
        const data = {
            name: input.value,
            bg: bg,
            page: '/AddProfile'            
        }
        
        navigate('/ProfileAvatars', {state: data})
    }

    if (location.state) {
        bg = location.state.bg
        name = location.state.name
    }

    return (
        <div className="add-container">
            <div className="centered-div animate-container">
                <div className="add-actions-container">
                    <h1 className="hh1">{LANGUAGES[language].ADD_PROFILE}</h1>
                    <h2 className="hh2">{LANGUAGES[language].ADD_PROFILE_TEXT}</h2>
                    <div className="add-metadata add-entry">
                        <div className="profile-avatar">
                            <div className={'profile-icon ' + bg} onClick={()=>{showAvatars()}}></div>
                        </div>
                        <div className="add-add-parent">
                            <div className="add-entry-inputs"> 
                                <Form>
                                    <Form.Control type="text" className="" id="profile-name" placeholder={LANGUAGES[language].NAME} defaultValue={name} isInvalid={isInvalid} />
                                    <Form.Control.Feedback type="invalid" className="invalid">
                                        {LANGUAGES[language].PROFILE_EXISTS}
                                    </Form.Control.Feedback>
                                </Form>
                                <div className="option-wrapper">
                                    <div className="add-kids-option" title={LANGUAGES[language].KID_TOOLTIP}>
                                        <input type="checkbox" id="add-kids-profile" />
                                        <label htmlFor="add-kids-profile"></label>
                                        <span className="add-kids-marker" role="checkbox" aria-checked="false">{LANGUAGES[language].KID}</span>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/ManageProfiles" className="add-button preferred-action" onClick={(e)=>{addProfile(e)}}><span>{LANGUAGES[language].CONTINUE}</span></Link>
                    <Link to="/ManageProfiles" className="add-button"><span>{LANGUAGES[language].CANCEL}</span></Link>
                </div>
            </div>
        </div>
    )
}


export default ProfileAdd