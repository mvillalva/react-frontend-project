import React from 'react'
import './ProfileEdit.css'

const ProfileEdit = () => {
  return (
    <div className="profiles-gate-container">
        <div className="centered-div list-profiles-container">
            <div className="profile-actions-container">
                <h1>Editar perfil</h1>
                <div className="profile-metadata profile-entry">
                    <div className="main-profile-avatar">
                        <div className="avatar-box">
                            <img src="https://occ-0-7118-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWw0vRAvv1VCQh43eIGGbOU9YGB0c_wGM1K8LDuUnYfB0jVIwRW1gTpYldIoy67LtH1Ky8cxhC_mjBb6C4qfcJWHzLAJasWAXuNR.png?r=ce4" alt="" className="ltr-1etmbqw" />                    
                        </div>
                    </div>
                    <div className="profile-edit-parent">
                        <div className="profile-edit-inputs">
                            <label for="profile-name-entry" id="profile-name-entry-label" className="visually-hidden">Nombre del perfil</label>
                            <input type="text" className="" id="profile-name-entry" aria-labelledby="profile-name-entry-label" placeholder="Nombre" value="User 3" />
                        </div>                
                    </div>
                </div>
                <a href='/ManageProfiles' className="profile-button preferred-action">Guardar</a>
                <a href='/ManageProfiles' className="profile-button">Cancelar</a>
                <a href='/DeleteProfile' className="profile-button">Eliminar perfil</a>
            </div>
        </div>
    </div>
  )
}

export default ProfileEdit