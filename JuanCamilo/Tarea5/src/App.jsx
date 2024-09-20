import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Componentes/HomePage/HomePage'
import CharacterPage from './Componentes/CharacterPage/CharacterPage'
import EpisodesPage from './Componentes/EpisodesPage/EpisodesPage'
import NotFoundPage from './Componentes/NotFoundPage/NotFoundPage'
import Navbar from './Componentes/Navbar/Navbar'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            <Route path='/character' element={<CharacterPage />} />
            <Route path='/episodes' element={<EpisodesPage />} />

            <Route path='/*' element={<NotFoundPage/>} />

          </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
