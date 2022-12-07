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

export const controlVideo = (vidFunc, e = null) => {
    if (e) {
        e.preventDefault()
    }

    let iframe = document.getElementsByTagName("iframe")[0].contentWindow;
    
    iframe.postMessage(
      '{"event":"command","func":"' + vidFunc + '","args":""}',
      "*"
    );
}

export const VerifyEmail = (email) => {
    const verify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    return verify.test(email)
}