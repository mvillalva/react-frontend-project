import React from 'react';
import ListadoBusqueda from '../../components/ListadoBusqueda/ListadoBusqueda';
import Footer from '../../components/footer/Footer';
export default function Search(props){
    const {resultados} = props;
    // console.log(resultados)
    return(
        <>
            <ListadoBusqueda resultados={resultados}/>
          
        </>
    )
}