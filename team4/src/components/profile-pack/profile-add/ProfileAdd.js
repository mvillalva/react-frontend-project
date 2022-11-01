import React from "react";
import './ProfileAdd.css'

const ProfileAdd = (props) => {
    return (
        <div className="add-container">
            <div className="centered-div animate-container">
                <div className="add-actions-container">
                    <h1 className="hh1">Agregar perfil</h1>
                    <h2 className="hh2">Agrega un perfil para otra persona que ve Netflix.</h2>
                    <div className="add-metadata add-entry">
                        <div className="profile-avatar">
                            <div className={'profile-icon bg-5'}></div>
                        </div>
                        <div className="add-add-parent">
                            <div className="add-entry-inputs">
                                <input type="text" id="add-profile-name" className="" placeholder="Nombre"/>
                                <label htmlFor="add-profile-name" aria-label="Nombre"></label>
                                <div className="option-wrapper">
                                    <div className="add-kids-option">
                                        <input type="checkbox" id="add-kids-profile" />
                                        <label htmlFor="add-kids-profile"></label>
                                        <span className="add-kids-marker" role="checkbox" aria-checked="false">¿Niños?</span>
                                        <span className="kids-profile-tooltip">Si se selecciona esta opción, este perfil solo puede ver películas y series clasificadas para menores de 12&nbsp;años.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="/ManageProfiles" className="add-button preferred-action"><span>Continuar</span></a>
                    <a href="/ManageProfiles" className="add-button"><span>Cancelar</span></a>
                </div>
            </div>
        </div>
    )
}


export default ProfileAdd