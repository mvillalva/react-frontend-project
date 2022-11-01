import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProfileEdit.css'

const ProfileEdit = (props) => {
    const params = useParams()
    const profile = props.profiles.filter(e => e.id === parseInt(params.id))

    return (
        <div className="edit-container">
            <div className="centered-div animate-container">
                <div className="edit-actions-container">
                    <h1 className="hh1">Editar perfil</h1>
                    <div className="edit-metadata edit-entry">
                        <div className="profile-avatar">                            
                            <div className={'profile-icon sz-img ' + profile[0].bg}></div>                            
                        </div>
                        <div className="profile-edit-parent">
                            <div className="profile-edit-inputs">
                                <label htmlFor="profile-name-entry" id="profile-name-entry-label" className="visually-hidden">Nombre del perfil</label>
                                <input type="text" className="" id="profile-name-entry" aria-labelledby="profile-name-entry-label" placeholder="Nombre" value={profile[0].name} />
                            </div>                
                        </div>
                    </div>
                    <Link to='/ManageProfiles' className="edit-button preferred-action">Guardar</Link>
                    <Link to='/ManageProfiles' className="edit-button">Cancelar</Link>
                    <Link to={'/DeleteProfile/' + profile[0].id} className="edit-button">Eliminar perfil</Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit