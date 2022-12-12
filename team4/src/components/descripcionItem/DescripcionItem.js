import React from 'react'
import './DescripcionItem.css'

const DescripcionItem = ({ link, label }) => {
  return (
    <a href={ link }>{ label }</a>
  )
}

export default DescripcionItem