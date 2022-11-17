import React from "react";
import { Link, useParams } from "react-router-dom";
import { updateData } from "../../../functions/firebaseActions";
import { getProfiles } from "../../../functions/general";
import "./ProfileDelete.css";

const ProfileDelete = (props) => {
    const params = useParams()
    const profiles = getProfiles() 
    const profile = profiles[params.id]

    const deleteProfile = async (e) => {
        e.preventDefault()

        const newProfiles = profiles.filter((e, index) => index !== parseInt(params.id))
        
        await updateData('users', {profiles: newProfiles})
        
        window.location.href = '/ManageProfiles'
    }

    return (
        <div className="delete-container">
            <div className="centered-div animate-container">
                <div className="delete-actions-container">
                    <h1 className="hh1">¿Eliminar perfil?</h1>
                    <div className="delete-metadata delete-entry">
                        <div className="profile-avatar">
                            <div className={'profile-icon ' + profile.bg}></div>
                            <div className="profile-name">{profile.name}</div>
                        </div>
                        <div className="delete-delete-warning">
                            El historial de este perfil, incluidas Mi lista, los votos y la actividad, se eliminará definitivamente, por lo que no tendrás acceso a ellos después.
                        </div>
                    </div>
                    <Link to={"/EditProfile/" + params.id} className="delete-button preferred-action">
                        <span>Guardar perfil</span>
                    </Link>
                    <Link to="/ManageProfiles" className="delete-button" onClick={(e)=>{deleteProfile(e)}}>
                        <span>Eliminar perfil</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileDelete;
