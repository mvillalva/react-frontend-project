import React from 'react'
import { setCurrentLanguaje } from '../../functions/general'
import './LanguageSelect.css'

const LanguageSelect = () => { 

  const changeLanguage = e => {
    setCurrentLanguaje(e.target.value)
  }
  
  return (
    <>
        <span className="language-icon-before fas fa-globe"></span>
        <select className="language-select" id='language-id' defaultValue='es' onChange={e => {changeLanguage(e)}}>
            <option value="es">Español</option>
            <option value="en">English</option>
        </select>
        <span className="language-icon-after fas fa-caret-down"></span>
    </>
  )
}

export default LanguageSelect