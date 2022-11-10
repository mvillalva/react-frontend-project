import React from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = ({state, buscar}) => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const deleteContent = () => {
        let input = document.getElementById("search-input");
        input.value = "";
        input.focus();
        buscar.buscar("", buscar.setTitulos)
    };

    const changeState = (e) => {
        if (!e.target.value){
            state.setClick(false);
            navigate(-1)
        }
    }

    const search = (e) => {
        if (location.pathname !== '/search')
            navigate('/search')
        buscar.buscar(e.target.value, buscar.setTitulos)
    }


    return (
        state.click?
        <div className="search-container position-relative">
            <span className="icon-start fas fa-search text-light fs-5"></span>
            <Form.Control id="search-input" className="search-input" placeholder="Títulos, personas, géneros" onChange={(e) => search(e)} onBlur={(e)=>{changeState(e)}} autoFocus></Form.Control>
            <span className="icon-end fas fa-times text-light fs-5" onClick={() => {deleteContent();}}></span>
        </div>
        :''
    );
};

export default SearchInput;
