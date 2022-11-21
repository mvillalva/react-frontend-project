import { logOut } from "./firebaseActions"

export const setCurrentLanguaje = (value) => {
    localStorage.setItem('language', value)
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