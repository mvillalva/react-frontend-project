import React from 'react'
import { setCurrentLanguage } from '../../functions/general'
import './LanguageSelect.css'

const LanguageSelect = () => { 

  const changeLanguage = e => {
    setCurrentLanguage(e.target.value)
  }
  
  return (
    <>
        <span className="language-icon-before fas fa-globe"></span>
        <select className="language-select" id='language-id' defaultValue='es-ES' onChange={e => {changeLanguage(e)}}>
            <option value="es-ES">Español</option>
            <option value="en-US">English</option>
        </select>
        <span className="language-icon-after fas fa-caret-down"></span>
    </>
  )
}

export default LanguageSelect