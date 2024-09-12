import { useState, useEffect } from 'react';
import './App.css'
import CharacterCard from './CharacterCard/CharacterCard';


function App() {

  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data, "<----impresion data");
        setCharactersList(data.results);

      })

  }, [currentPage])

  return (
    <div className='container'>
      {
        charactersList.map((item) => {
          console.log(item.name, "Personajes <------")
          return <CharacterCard
            nombre={item.name}
            imagen={item.image}
            gender={item.gender}
            status={item.status}
             className="character-card"
          />
        })
      }
      <div className="pagination-buttons">
        <button onClick={() => setCurrentPage(currentPage + 1)}>Siguiente página</button>
        <button onClick={() => setCurrentPage(currentPage - 1)}>Página anterior</button>
      </div>

    </div>


  )
}

export default App


