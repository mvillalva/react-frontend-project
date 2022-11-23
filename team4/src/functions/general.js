import { logOut } from "./firebaseActions"

export const setCurrentLanguage = (value) => {
    localStorage.setItem('language', value)
}

export const getCurrentLanguage = () =>{
    return localStorage.getItem('language')
}

export const closeSession = (e) => {
    e.preventDefault()
    localStorage.removeItem('profile')
    localStorage.removeItem('profiles')
    localStorage.removeItem('login')
    localStorage.removeItem('appState')
    logOut()
    window.location.href = '/'
}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }