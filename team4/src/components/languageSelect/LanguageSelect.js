import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import { TYPE } from '../../functions/general'
import './LanguageSelect.css'

const LanguageSelect = () => {

  const {language, changeState} = useContext(MainContext)

  const changeLanguage = e => {    
    changeState(TYPE.language, e.target.value)    
  }
  
  return (
    <>
        <span className="language-icon-before fas fa-globe"></span>
        <select className="language-select" id='language-id' defaultValue={language} onChange={e => {changeLanguage(e)}}>
            <option value="es-ES">Español</option>
            <option value="en-US">English</option>
        </select>
        <span className="language-icon-after fas fa-caret-down"></span>
    </>
  )
}

export default LanguageSelect