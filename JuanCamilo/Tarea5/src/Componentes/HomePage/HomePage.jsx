import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';


const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a la pagina de Rick and Morty</h1>
      <h3>Enlaces rápidos</h3>

      <Link to="/character">Ir a personajes</Link>
      <br />
      <Link to="/episodes">Ir a espisodios</Link>
   
    
    </div>
  )
}

export default HomePage