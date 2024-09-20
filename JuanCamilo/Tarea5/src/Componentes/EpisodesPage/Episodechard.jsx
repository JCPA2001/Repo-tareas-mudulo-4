import React from 'react'

const Episodechard = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.name}</h2>
      <p>Fecha de emisión:{props.air_date}</p>
      <p>Episodio:{props.episode}</p>
    </div>
  )
}

export default Episodechard