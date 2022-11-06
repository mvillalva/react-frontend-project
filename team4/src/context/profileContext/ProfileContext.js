import React, { useState } from "react"

export const ProfileContext = React.createContext()

const ProfileProvider = ({children}) => {

    const [profile, setProfile] = useState({})

    const changeProfile = (prof) => {
        setProfile(prof)
    }

    return (
        <ProfileContext.Provider value={{profile, changeProfile}}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider
