import React from "react";
import './ProfileAdd.css'

const ProfileAdd = (props) => {
    return (
        <div className="profiles-gate-container">
            <div className="centered-div list-profiles-container">
                <div className="profile-actions-container">
                    <h1 className="h1">Agregar perfil</h1>
                    <h2 className="h2">Agrega un perfil para otra persona que ve Netflix.</h2>
                    <div className="profile-metadata profile-entry">
                        <div className="main-profile-avatar">
                            <img src="https://occ-0-7118-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt="" className="ltr-1etmbqw" />
                        </div>
                        <div className="profile-add-parent">
                            <div className="profile-entry-inputs">
                                <input type="text" id="add-profile-name" className="" placeholder="Nombre"/>
                                <label for="add-profile-name" aria-label="Nombre"></label>
                                <div className="option-wrapper">
                                    <div className="add-kids-option">
                                        <input type="checkbox" id="add-kids-profile" />
                                        <label for="add-kids-profile"></label>
                                        <span className="add-kids-marker" role="checkbox" aria-checked="false" tabindex="0">¿Niños?</span>
                                        <span className="kids-profile-tooltip">Si se selecciona esta opción, este perfil solo puede ver películas y series clasificadas para menores de 12&nbsp;años.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="/ManageProfiles" className="profile-button preferred-action" tabindex="0" role="button"><span>Continuar</span></a>
                    <a href="/ManageProfiles" className="profile-button" tabindex="0" role="button"><span>Cancelar</span></a>
                </div>
            </div>
        </div>
    )
}


export default ProfileAdd