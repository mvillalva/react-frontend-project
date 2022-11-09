import React from "react";


const SearchIcon = ({state, buscar}) => {

    const handleClick = () => {
        state.setClick(true)
    }

    return (
        !state.click ? <div className="icon-search fas fa-search text-light fs-5"  onClick={() => { handleClick() }}></div> : ''
    );
};

export default SearchIcon;
