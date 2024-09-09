import React from 'react'
import Title from '../Title/Title'
import Details from '../Details/Details'
import Image from '../Image/image'

const CharacterCard = (props)=> {

  return (
    <div>

        <Title title={props.name}/>
        <Image url={props.img}/>
        <Details gender={props.gender} status={props.status}/>
        
    </div>
  )
}

export default CharacterCard