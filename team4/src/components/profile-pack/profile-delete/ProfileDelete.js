import React from "react";
import "./ProfileDelete.css";

const ProfileDelete = () => {
    return (
        <div className="profiles-gate-container">
            <div className="centered-div list-profiles-container">
                <div className="profile-actions-container">
                    <h1 className="h1">¿Eliminar perfil?</h1>
                    <div className="profile-metadata profile-entry">
                        <div className="main-profile-avatar">
                            <img src="https://occ-0-7118-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWw0vRAvv1VCQh43eIGGbOU9YGB0c_wGM1K8LDuUnYfB0jVIwRW1gTpYldIoy67LtH1Ky8cxhC_mjBb6C4qfcJWHzLAJasWAXuNR.png?r=ce4" alt="" className="ltr-1etmbqw" />
                            <div className="profile-name">Cari</div>
                        </div>
                        <div className="profile-delete-warning">
                            El historial de este perfil, incluidas Mi lista, los votos y la actividad, se eliminará definitivamente, por lo que no tendrás acceso a ellos después.
                        </div>
                    </div>
                    <a href="/EditProfile" role="button" tabindex="0" className="profile-button preferred-action">
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
