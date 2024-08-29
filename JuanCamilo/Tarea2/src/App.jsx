import './App.css'
import Details from './componentes/Detalles/Details'
import Imagen from './componentes/imagen/Imagen'
import Titulo from './componentes/titulo/Titulo'

function App() {


  return (

    <div>
      <Titulo text="Titulo León"></Titulo>
      <Imagen ruta="./Leon.webp"></Imagen>
      <Details genero="Masculino" status="Vivo"></Details>

    </div>


  )
}

export default App
