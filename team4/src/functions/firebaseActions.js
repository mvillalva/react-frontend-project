import {collection, doc, getDocs, setDoc, query, where, updateDoc, deleteDoc, addDoc, orderBy, limit} from 'firebase/firestore'
import db from "../firebase/firebaseConfig";

export const getProfilesData = async (source) => {    
    const cnx = collection(db, source)
    const res = query(cnx, orderBy("type"), orderBy("name"))
    const datos = await getDocs(res);
    
    let vec = []

    datos.forEach(doc => {
        let data = {
            key: doc.id,
            id: doc.data().id,
            avatar: doc.data().avatar,
            name: doc.data().name,
            bg: doc.data().bg,
            type: doc.data().type,
        }        

        vec = [...vec, data]
    });   

    return vec
}

export const queryData = async (source, qry = null) => {    
    const cnx = collection(db, source);
    const res = query(cnx, where(qry.field, qry.operator, qry.value));
    const datas = await getDocs(res);
    
    let result = []

    datas.forEach(doc => {            
        result = [...result, doc.data()]
    });   

    return result
}

export const getMaxValue = async (source, field) => {
    let result = []

    const cnx = collection(db, source);
    const res = query(cnx, where('id','!=', 6), orderBy(field, 'desc'), limit(1));    
    
    const datas = await getDocs(res);

    datas.forEach(doc => {            
        result = [...result, doc.data()]
    });   


    return result ? result[0].id : 0
}

export const addDataWithKey = async (source, key, data) => {
    await setDoc(doc(db, source, key), data);
}

export const addData = async (source, data) => {
    await addDoc(collection(db, source), data);
}

export const updateData = async (source, key, data) => {
    await updateDoc(doc(db, source, key), data);
}

export const deleteData = async (source, key) => {
    await deleteDoc(doc(db, source, key));
}
