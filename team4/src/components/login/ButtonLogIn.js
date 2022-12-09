import React from "react";
import { Button } from "react-bootstrap";
import { getCurrentLanguage } from "../../functions/general";
import { languajes } from "../../languages";
import './ButtonLogin.css'

export default function ButtonLogIn() {
    const current_language = getCurrentLanguage();
    const lang = languajes[current_language];

    return (
        <Button variant="danger" type="submit" className="btn-bg w-100 mb-2 btn-lg fs-6">
            {lang.FRONT_BUTTON_LOGIN}
        </Button>
    );
}
