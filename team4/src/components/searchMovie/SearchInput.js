import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import { LANGUAGES } from "../../languages";

const SearchInput = ({state, buscar}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const {language} = useContext(MainContext)
    
    const deleteContent = () => {
        let input = document.getElementById("search-input");
        input.value = "";
        input.focus();
        //buscar.buscar("", buscar.setTitulos)
    };

    const verifyState = (e) => {
        if (!e.target.value){
            state.setClick(false);          
            navigate(location.state)
        }
    }

    const search = (e) => {
        if (location.pathname !== '/search'){
            navigate('/search', {state: location.pathname})
        }

        buscar.buscar(e.target.value, buscar.setTitulos, language)
    }


    return (
        state.click?
        <div className="search-container position-relative">
            <span className="icon-start fas fa-search text-light fs-5"></span>
            <Form.Control id="search-input" className="search-input" placeholder={LANGUAGES[language].SEARCH_PLACEHOLDER} onChange={(e) => search(e)} onBlur={(e)=>{verifyState(e)}} autoFocus></Form.Control>
            <span className="icon-end fas fa-times text-light fs-5" onClick={() => {deleteContent();}}></span>
        </div>
        :''
    );
};

export default SearchInput;
