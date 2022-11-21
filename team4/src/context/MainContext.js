import React, { useState } from "react"

const defaultState = {
    current_profile : [],
    profiles: [],
    current_language: 'es'
}

const getInitialState = () => {
    const currentSate = localStorage.getItem('appState')
    const current_language = localStorage.getItem('language')

    const state = currentSate ? JSON.parse(currentSate) : defaultState
    state.current_language = current_language? current_language : state.current_language
    
    return state
}

const saveSate = (state) => {
    localStorage.setItem('appState', JSON.stringify(state))
}

/**
 * @param {string} type - The types are: CP=Current profile / PS=Profiles / CL=Current language
 * @param {object} value
 */
export const SetContextSate = (type, value) => {
    const state = getInitialState()

    switch (type) {
        case 'CP':
            state.current_profile = value
            break;
    
        case 'PS':
            state.profiles = value
            break;

        case 'CL':
            state.current_language = value
            break;
        
        default:
            break;
    }

    saveSate(state)
}


export const MainContext = React.createContext(getInitialState())


const MainProvider = ({children}) => {
    const [state, setState] = useState(getInitialState())

    const changeState = (st) => {
        saveSate(st)
        setState(st)
    }

    return (
        <MainContext.Provider value={{state, changeState}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider