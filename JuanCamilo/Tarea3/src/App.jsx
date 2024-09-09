import { useEffect, useState } from 'react'
import './App.css'
import CharacterCard from './componentes/characterCard/characterCard'

function App() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGenre] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const url= "https://rickandmortyapi.com/api/character/6"
    fetch(url)
    .then (res=> res.json())
    .then(data =>{
      console.log(data,"impresion data")
      setName(data.name)
      setImage(data.image)
      setGenre(data.gender)
      setStatus(data.status)
    })
  }, [])
  

  return (
      <div>
       <CharacterCard
        name={name} 
        img={image}
        gender={gender}
        status={status}
        />
      </div>
      
    
  )
}

export default App




