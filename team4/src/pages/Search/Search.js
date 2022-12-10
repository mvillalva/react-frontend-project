import React, {useEffect} from 'react';
import ListadoBusqueda from '../../components/ListadoBusqueda/ListadoBusqueda';
export default function Search(props){
    const {resultados} = props;
    useEffect( () => {
        document.title = 'Busqueda - Team4'
    })
    // console.log(resultados)
    return(
        <>
            <ListadoBusqueda resultados={resultados}/>
        </>
    )
}