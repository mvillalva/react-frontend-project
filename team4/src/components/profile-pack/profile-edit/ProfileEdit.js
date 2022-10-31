import React from 'react'
import { useParams } from 'react-router-dom'
import './ProfileEdit.css'

const ProfileEdit = (props) => {
    const params = useParams()
    const profile = props.profiles.filter(e => e.id === parseInt(params.id))

    return (
        <div className="profiles-gate-container">
            <div className="centered-div list-profiles-container">
                <div className="profile-actions-container">
                    <h1>Editar perfil</h1>
                    <div className="profile-metadata profile-entry">
                        <div className="main-profile-avatar">
                            <div className="avatar-box">
                                <div className={'profile-icon sz-img ' + profile[0].bg}></div>                                
                            </div>
                        </div>
                        <div className="profile-edit-parent">
                            <div className="profile-edit-inputs">
                                <label htmlFor="profile-name-entry" id="profile-name-entry-label" className="visually-hidden">Nombre del perfil</label>
                                <input type="text" className="" id="profile-name-entry" aria-labelledby="profile-name-entry-label" placeholder="Nombre" value={profile[0].name} />
                            </div>                
                        </div>
                    </div>
                    <a href='/ManageProfiles' className="profile-button preferred-action">Guardar</a>
                    <a href='/ManageProfiles' className="profile-button">Cancelar</a>
                    <a href={'/DeleteProfile/' + profile[0].id} className="profile-button">Eliminar perfil</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit