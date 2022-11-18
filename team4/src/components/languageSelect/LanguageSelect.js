import React from 'react'
import './LanguageSelect.css'

const LanguageSelect = () => {
  return (
    <>
        <span className="language-icon-before fas fa-globe"></span>
        <select className="language-select" id='language-id'>
            <option value="es" selected>Español</option>
            <option value="en">English</option>
        </select>
        <span className="language-icon-after fas fa-caret-down"></span>
    </>
  )
}

export default LanguageSelect