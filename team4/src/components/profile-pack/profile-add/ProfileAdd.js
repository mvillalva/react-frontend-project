import React from "react";
import './ProfileAdd.css'

const ProfileAdd = (props) => {
    return (
        <div className="profiles-gate-container">
            <div className="centered-div list-profiles-container">
                <div className="profile-actions-container">
                    <h1 className="h1">Agregar perfil</h1>
                    <h2 className="h2">Agrega un perfil para otra persona que ve Netflix.</h2>
                    <div class="profile-metadata profile-entry">
                        <div class="main-profile-avatar">
                            <img src="https://occ-0-7118-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt="" class="ltr-1etmbqw" />
                        </div>
                        <div class="profile-add-parent">
                            <div class="profile-entry-inputs">
                                <input type="text" id="add-profile-name" class="" placeholder="Nombre"/>
                                <label for="add-profile-name" aria-label="Nombre"></label>
                                <div class="option-wrapper">
                                    <div class="add-kids-option">
                                        <input type="checkbox" id="add-kids-profile" />
                                        <label for="add-kids-profile"></label>
                                        <span class="add-kids-marker" role="checkbox" aria-checked="false" tabindex="0">¿Niños?</span>
                                        <span class="kids-profile-tooltip">Si se selecciona esta opción, este perfil solo puede ver películas y series clasificadas para menores de 12&nbsp;años.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="/ManageProfiles" class="profile-button preferred-action" tabindex="0" role="button"><span>Continuar</span></a>
                    <a href="/ManageProfiles" class="profile-button" tabindex="0" role="button"><span>Cancelar</span></a>
                </div>
            </div>
        </div>
    )
}


export default ProfileAdd