import { getAuth } from "firebase/auth"
import { firebaseApp } from "../firebase/firebaseConfig"
import { fbCreateOrGetDocument, logOut } from "./firebaseActions"

export const getCurrentProfile = () => {    
    return localStorage.getItem('profile')? JSON.parse(localStorage.getItem('profile')): null
}

export const setCurrentProfile = (profile) => {    
    localStorage.setItem('profile', JSON.stringify(profile))
}

export const getProfiles = () => {     
    return JSON.parse(localStorage.getItem('profiles'))
}

export const closeSession = () => {
    localStorage.removeItem('profile')
    localStorage.removeItem('profiles')
    localStorage.removeItem('login')
    logOut()
}