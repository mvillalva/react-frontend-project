import React, { useState } from "react"
import { TYPE } from "../functions/general"

const defaultState = {
    current_profile : [],
    profiles: [],
    current_language: 'es-ES',
    user: [],
    isLoading: false
}

const getInitialState = () => {
    const currentSate = localStorage.getItem('appState')    
    const state = currentSate ? JSON.parse(currentSate) : defaultState
   
    return state
}

const saveState = (state) => {
    localStorage.setItem('appState', JSON.stringify(state))
}

export const MainContext = React.createContext(getInitialState())

const getInitByType = (type) => {
    const state = getInitialState()
    let value = null

    switch (type) {
        case TYPE.profiles:
            value = state.profiles
            break;

        case TYPE.currentProfile:
            value = state.current_profile
            break;

        case TYPE.language:
            value = state.current_language
            break;

        case TYPE.user:
            value = state.user
            break;

        case TYPE.loading:
            value = state.isLoading
            break;

        default:
            break;
    }

    return value
}

const MainProvider = ({children}) => {
    const [profiles, setProfiles] = useState(getInitByType(TYPE.profiles))
    const [currentProfile, setCurrentProfile] = useState(getInitByType(TYPE.currentProfile))
    const [language, setLanguage] = useState(getInitByType(TYPE.language))
    const [user, setUser] = useState(getInitByType(TYPE.user))
    const [isLoading, setIsLoading] = useState(getInitByType(TYPE.loading))

    const changeState = (type, values) => {
        const state = getInitialState()
        
        switch (type) {
            case TYPE.profiles: 
                setProfiles(values)
                state.profiles = values
                break;
    
            case TYPE.currentProfile:
                setCurrentProfile(values)
                state.current_profile = values
                break;
    
            case TYPE.language:
                setLanguage(values)
                state.current_language = values
                break;
    
            case TYPE.user:
                setUser(values)
                state.user = values
                break;

            case TYPE.loading:
                setIsLoading(values)
                state.isLoading = values
                break;
    
            default:
                break;
        }

        saveState(state)
    }

    return (
        <MainContext.Provider value={{profiles, currentProfile, language, user, isLoading, changeState}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider