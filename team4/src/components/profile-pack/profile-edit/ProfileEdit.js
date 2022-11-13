import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { updateData } from '../../../functions/firebaseActions'
import './ProfileEdit.css'

const ProfileEdit = (props) => {    
    const navigate = useNavigate()
    const location = useLocation()

    const params = useParams()
    const profile = props.profiles.filter(e => e.id === parseInt(params.id))

    let name = profile[0].name
    let bg = profile[0].bg
    
    const saveData = async (e) => {
        e.preventDefault()
        
        let input = document.getElementById('profile-name')
        let data = {name: input.value, bg: bg}        
        
        await updateData('users', profile[0].key, data)
        
        window.location.href = '/ManageProfiles'
    }

    const showAvatars = () => {

        let input = document.getElementById('profile-name')
        
        const data = {
            name: input.value,
            bg: bg,
            page: '/EditProfile/'+params.id
        }
        
        navigate('/ProfileAvatars', {state: data})
    }

    if (location.state) {
        bg = location.state.bg
        name = location.state.name
    }


    return (
        <div className="edit-container">
            <div className="centered-div animate-container">
                <div className="edit-actions-container">
                    <h1 className="hh1">Editar perfil</h1>
                    <div className="edit-metadata edit-entry">
                        <div className="profile-avatar">                            
                            <div className={'profile-icon sz-img ' + bg} onClick={()=>{showAvatars()}}></div>
                        </div>
                        <div className="profile-edit-parent">
                            <div className="profile-edit-inputs">
                                <label htmlFor="profile-name" id="profile-name-label" className="visually-hidden">Nombre del perfil</label>
                                <input type="text" className="" id="profile-name" aria-labelledby="profile-name-entry-label" placeholder="Nombre" defaultValue={name} />
                            </div>                
                        </div>
                    </div>
                    <Link to='/ManageProfiles' className="edit-button preferred-action" onClick={(e)=>{saveData(e)}}>Guardar</Link>
                    <Link to='/ManageProfiles' className="edit-button">Cancelar</Link>
                    <Link to={'/DeleteProfile/'+ profile[0].id} className="edit-button">Eliminar perfil</Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit