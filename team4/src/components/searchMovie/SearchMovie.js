import React, { useState } from "react";
import SearchIcon from "./SearchIcon";
import SearchInput from "./SearchInput";
import "./SearchMovie.css";

const SearchMovie = ({ buscar }) => {        

    const [click, setClick] = useState(false)    

    return (
        <div className="search-box d-flex align-items-center me-4">
            <SearchIcon state={{click, setClick}} />
            <SearchInput state={{click, setClick}} buscar={buscar} />
        </div>
    );
};

export default SearchMovie;
