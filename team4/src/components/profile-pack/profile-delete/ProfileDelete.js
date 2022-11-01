import React from "react";
import { useParams } from "react-router-dom";
import "./ProfileDelete.css";

const ProfileDelete = (props) => {
    const params = useParams()
    const profile = props.profiles.filter(e => e.id === parseInt(params.id))

    return (
        <div className="profiles-gate-container">
            <div className="centered-div list-profiles-container">
                <div className="profile-actions-container">
                    <h1 className="h1">¿Eliminar perfil?</h1>
                    <div className="profile-metadata profile-entry">
                        <div className="main-profile-avatar">
                            <div className={'profile-icon sz-img ' + profile[0].bg}></div>                            
                            <div className="profile-name">{profile[0].name}</div>
                        </div>
                        <div className="profile-delete-warning">
                            El historial de este perfil, incluidas Mi lista, los votos y la actividad, se eliminará definitivamente, por lo que no tendrás acceso a ellos después.
                        </div>
                    </div>
                    <a href={"/EditProfile/" + profile[0].id} role="button" tabindex="0" className="profile-button preferred-action">
                        <span>Guardar perfil</span>
                    </a>
                    <a href="/ManageProfiles" role="button" tabindex="0" className="profile-button">
                        <span>Eliminar perfil</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileDelete;
