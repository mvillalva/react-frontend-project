import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { MainContext } from "../../context/MainContext";
import { LANGUAGES } from "../../languages";
import './ButtonLogin.css'

export default function ButtonLogIn() {
    const {language} = useContext(MainContext);
    const lang = LANGUAGES[language];

    return (
        <Button variant="danger" type="submit" className="btn-bg w-100 mb-2 btn-lg fs-6">
            {lang.FRONT_BUTTON_LOGIN}
        </Button>
    );
}
