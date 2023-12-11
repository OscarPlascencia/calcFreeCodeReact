import './App.css';
import freeCodeCampLogo from './Imagenes/logo.png';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [input, setinput] = useState('');

  const actualizarInput = (val) => {
        setinput(input + val);
  };

  const calcularResultado = () => {
      if (input){
        setinput(evaluate(input));
      }
      else {
        alert('Por favor ingrese valores')
      }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
            <img
                className='freecodecamp-logo'
                src={freeCodeCampLogo}
                alt="Logo de freecodecamp" />
      </div>
      <div className='contenedor-calculadora'>
            <Pantalla input={input} />
            <div className='fila'>
              <Boton manejarClick={actualizarInput}>7</Boton>
              <Boton manejarClick={actualizarInput}>8</Boton>
              <Boton manejarClick={actualizarInput}>9</Boton>
              <Boton manejarClick={actualizarInput}>+</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClick={actualizarInput}>4</Boton>
              <Boton manejarClick={actualizarInput}>5</Boton>
              <Boton manejarClick={actualizarInput}>6</Boton>
              <Boton manejarClick={actualizarInput}>-</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClick={actualizarInput}>1</Boton>
              <Boton manejarClick={actualizarInput}>2</Boton>
              <Boton manejarClick={actualizarInput}>3</Boton>
              <Boton manejarClick={actualizarInput}>*</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClick={calcularResultado}>=</Boton>
              <Boton manejarClick={actualizarInput}>0</Boton>
              <Boton manejarClick={actualizarInput}>.</Boton>
              <Boton manejarClick={actualizarInput}>/</Boton>
            </div>
            <div className='fila'>
              <BotonClear manejarClear={() =>setinput('')}>Clear</BotonClear>
            </div>
      </div>
    </div>
  );
}

export default App;
