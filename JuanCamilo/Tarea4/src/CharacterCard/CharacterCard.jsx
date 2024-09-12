import React from 'react'

const CharacterCard = (props) => {
    return (
        <div className={props.className}>
          <h1>{props.nombre}</h1>
          <img src={props.imagen} alt={props.nombre} />
          <p>Genero: {props.gender}</p>
          <p>Estado: {props.status}</p>
        </div>
      )
}

export default CharacterCard




