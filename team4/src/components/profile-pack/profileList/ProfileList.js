import React from 'react'
import './ProfileList.css'

const ProfileList = React.memo(({title, children}) => {

    return (
        <div className='list-profiles'>
            <h1 className='list-profile-label'>{title}</h1>
            <ul className='choose-profile'>
                {children}
            </ul>
        </div>
    )        
})

export default ProfileList