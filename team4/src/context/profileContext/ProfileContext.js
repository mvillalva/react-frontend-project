import React, { useState } from "react"
import { getCurrentProfile, setCurrentProfile } from "../../functions/general"

export const ProfileContext = React.createContext()

const ProfileProvider = ({children}) => {
    
    const [profile, setProfile] = useState(getCurrentProfile())
    
    const changeProfile = (prof) => {
        setCurrentProfile(prof)
        setProfile(prof)
    }    

    return (
        <ProfileContext.Provider value={{profile, changeProfile}}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider
