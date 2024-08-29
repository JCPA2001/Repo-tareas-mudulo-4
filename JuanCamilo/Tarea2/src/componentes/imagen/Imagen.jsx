import React from 'react'
import "./imagen.css"

const Imagen = (props) => {
    console.log(props)
  return (
    <div className='imagen'>
    <img src={props.ruta} alt="imagen leon" />
    </div>
  )
}

export default Imagen