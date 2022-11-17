import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect, signOut } from 'firebase/auth';
import {collection, doc, getDocs, setDoc, query, where, updateDoc, deleteDoc, addDoc, orderBy, limit, getDoc} from 'firebase/firestore'
import db, { firebaseApp } from "../firebase/firebaseConfig";


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
            playlist: doc.data().playlist
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

export const updateData = async (source, data) => {
    const auth = getAuth(firebaseApp)
    const key = auth.currentUser.email
    await updateDoc(doc(db, source, key), data);
}

export const deleteData = async (source, key) => {
    await deleteDoc(doc(db, source, key));
}

export const fbCreateOrGetDocument = async (source, key) => {    
    if (key) {
        const datas = await getDoc(doc(db, source, key))        

        if (datas.exists()) {
            const data = datas.data()            
            return data.profiles
        } else {
            const perfiles =  [
                {
                    name: "Agregar perfil",
                    avatar: "",
                    bg: "",
                    type: "UserAdd",
                    playlist: []
                },
                {
                    name: "Mi Perfil",
                    avatar: "",
                    bg: "bg-5",
                    type: "Profile",
                    playlist: []
                },
            ]
            const newData = {profiles:perfiles}

            await addDataWithKey(source, key, newData)
            const datas = await getDoc(doc(db, source, key))
            const data = datas.data()            
            return data.profiles
        }
    } else {
        return []
    }
}


//Authentication
export const logInWithEmail = async (email, password) => {
    const auth = getAuth(firebaseApp)    
    let errorMessage = ''

    await signInWithEmailAndPassword(auth, email, password)    
    .catch(e => {        
        switch (e.code) {
            case 'auth/wrong-password':
            case 'auth/user-not-found':
                errorMessage = 'Usuario y/o Contraseña inválida'
                break;
        
            default:
                errorMessage = 'Problemas al autenticarse'
                break;
        }                
    })

    return errorMessage
}

export const createUserWithEmail = async (email, password) => {
    const auth = getAuth(firebaseApp)
    const user = await createUserWithEmailAndPassword(auth, email, password)

    return user
}

export const googleSingIn = () => {
    const auth = getAuth(firebaseApp)
    const googleProvider = new GoogleAuthProvider()
    signInWithRedirect(auth, googleProvider)
}

export const logOut = async () => {
    const auth = getAuth(firebaseApp)
    await signOut(auth)
}