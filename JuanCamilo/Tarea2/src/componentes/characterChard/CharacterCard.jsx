import React from 'react'
import Titulo from '../titulo/Titulo'
import Imagen from '../imagen/Imagen'
import Details from '../Detalles/Details'

const CharacterCard = (props) => {
    console.log(props,"hola")
    return (
        <div>
            <Titulo text={props.titulo}></Titulo>
            <Imagen ruta={props.img}></Imagen>
            <Details genero={props.genero} status={props.Detalles}></Details>
        </div>
    )
}

export default CharacterCard