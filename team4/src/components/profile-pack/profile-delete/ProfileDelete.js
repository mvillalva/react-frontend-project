import React from "react";
import { useParams } from "react-router-dom";
import "./ProfileDelete.css";

const ProfileDelete = (props) => {
    const params = useParams()
    const profile = props.profiles.filter(e => e.id === parseInt(params.id))

    return (
        <div className="delete-container">
            <div className="centered-div animate-container">
                <div className="delete-actions-container">
                    <h1 className="hh1">¿Eliminar perfil?</h1>
                    <div className="delete-metadata delete-entry">
                        <div className="profile-avatar">
                            <div className={'profile-icon ' + profile[0].bg}></div>
                            <div className="profile-name">{profile[0].name}</div>
                        </div>
                        <div className="delete-delete-warning">
                            El historial de este perfil, incluidas Mi lista, los votos y la actividad, se eliminará definitivamente, por lo que no tendrás acceso a ellos después.
                        </div>
                    </div>
                    <a href={"/EditProfile/" + profile[0].id} className="delete-button preferred-action">
                        <span>Guardar perfil</span>
                    </a>
                    <a href="/ManageProfiles" className="delete-button">
                        <span>Eliminar perfil</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileDelete;
