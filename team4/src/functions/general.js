export const getCurrentProfile = () => {
    return localStorage.getItem('profile')? JSON.parse(localStorage.getItem('profile')): undefined
}

export const setCurrentProfile = (profile) => {
    localStorage.setItem('profile', JSON.stringify(profile))
}