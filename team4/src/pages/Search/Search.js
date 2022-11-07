import React from 'react';
import ListadoBusqueda from '../../components/ListadoBusqueda/ListadoBusqueda';

export default function Search(props){
    const {resultados} = props;
    console.log(resultados)
    return(
        <>
            <ListadoBusqueda resultados={resultados}/>
        </>
    )
}