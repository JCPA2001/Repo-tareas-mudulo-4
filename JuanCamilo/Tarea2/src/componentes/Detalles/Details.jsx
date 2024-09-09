import React from 'react'
import "./Details.css"

const Details = (props) => {
    console.log(props,"genero y status")
  return (
    <div className="details-container">
      <p><b>Género: </b>{props.genero}</p>
      <p><b>Estado: </b>{props.status}</p>
    </div>
  )
}

export default Details