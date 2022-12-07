import React from 'react'
import { setCurrentLanguage, getCurrentLanguage } from '../../functions/general'
import './LanguageSelect.css'

const LanguageSelect = () => {
  const getDefaultValue = () => {
    let lang = getCurrentLanguage()
    
    if (!lang) {
      lang = 'es-ES'
      setCurrentLanguage(lang)
    }

    return lang
  }

  const changeLanguage = e => {
    setCurrentLanguage(e.target.value)
    window.location.reload()
  }
  
  return (
    <>
        <span className="language-icon-before fas fa-globe"></span>
        <select className="language-select" id='language-id' defaultValue={getDefaultValue()} onChange={e => {changeLanguage(e)}}>
            <option value="es-ES">Español</option>
            <option value="en-US">English</option>
        </select>
        <span className="language-icon-after fas fa-caret-down"></span>
    </>
  )
}

export default LanguageSelect