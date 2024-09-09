import React from 'react'
import "./Titulo.css"


const Titulo = (props) => {
  console.log(props, "padre")
  return (
    <div className='tituloLeon'>
      <p>{props.text}</p>
    </div>
  )
}

export default Titulo