import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { MainContext } from '../../../context/MainContext'
import { updateData } from '../../../functions/firebaseActions'
import { TYPE } from '../../../functions/general'
import './ProfileEdit.css'

const ProfileEdit = (props) => {
    const [isInvalid, setIsInvalid] = useState(false);    
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()    
    const {profiles, changeState} = useContext(MainContext)      
    
    const profile = profiles.filter(e => e.uuid === params.id)[0]
    
    let name = profile.name
    let bg = profile.bg
    
    const saveData = async (e) => {
        e.preventDefault()
        
        let input = document.getElementById('profile-name')

        if (!profiles.find(e => e.name.toLowerCase() === input.value.toLowerCase() && e.uuid !== params.id)) {
            setIsInvalid(false)
            profile.name = input.value
            profile.bg = bg

            const editProfiles = profiles.filter(e => e.uuid !== params.id)
            editProfiles.push(profile)
            
            await updateData('users', {profiles: editProfiles})        

            changeState(TYPE.profiles, editProfiles)
            
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
            page: '/EditProfile/'+params.id
        }
        
        navigate('/ProfileAvatars', {state: data})
    }

    if (location.state) {
        bg = location.state.bg
        name = location.state.name
    }


    return (
        <div className="edit-container">
            <div className="centered-div animate-container">
                <div className="edit-actions-container">
                    <h1 className="hh1">Editar perfil</h1>
                    <div className="edit-metadata edit-entry">
                        <div className="profile-avatar">                            
                            <div className={'profile-icon sz-img ' + bg} onClick={()=>{showAvatars()}}></div>
                        </div>
                        <div className="profile-edit-parent">
                            <div className="profile-edit-inputs">
                                <Form>
                                    <Form.Control type="text" className="" id="profile-name" placeholder='Nombre' defaultValue={name} isInvalid={isInvalid} />
                                    <Form.Control.Feedback type="invalid" className="invalid">
                                        Ya existe ese nombre de perfil
                                    </Form.Control.Feedback>
                                </Form>
                            </div>                
                        </div>
                    </div>
                    <Link to='/ManageProfiles' className="edit-button preferred-action" onClick={(e)=>{saveData(e)}}>Guardar</Link>
                    <Link to='/ManageProfiles' className="edit-button">Cancelar</Link>
                    {profiles.length > 2 && <Link to={'/DeleteProfile/'+ params.id} className="edit-button">Eliminar perfil</Link>}
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit