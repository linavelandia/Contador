import { useState } from 'react'
import logo from '../src/assets/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import './App.css'
import Contador from './componentes/Contador'


function App() {

  const [ numclicks, setNumClicks ] = useState(0);
  
  const manejarClick = () =>{
    setNumClicks(numclicks + 1);
  }

  const reiniciarContador = () =>{
    setNumClicks(0);
  }

  return (
    <>
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img className='freecodecamp-logo' src={logo} alt="logo de freeCodeCamp" />
        </div>
        <div className='contenedorr-principal'>

          <Contador numclicks={numclicks} />
          <Boton
          texto = 'click'
          esBotonDeClick = {true}
          manejarClick={manejarClick}
          />
          <Boton
          texto = 'Reiniciar'
          esBotonDeClick = {false}
          manejarClick={reiniciarContador}
          />
        </div>
      </div>
    </>
  )
}

export default App
