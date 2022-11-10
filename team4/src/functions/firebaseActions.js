import {collection, getDocs} from 'firebase/firestore'
import db from "../firebase/firebaseConfig";

export const getData = async (source, data = null ) => {    
    let vec = data ? data : []

    const datos = await getDocs(collection(db, source));
        datos.forEach(doc => {
            vec = [...vec, doc.data()]
    });   

    return vec
}

export const addData = async (source, data) => {

}

export const modifyData = async (source, data) => {

}

export const deleteData = async (source, data) => {

}
