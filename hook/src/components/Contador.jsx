import React, { useCallback } from 'react'
import { useState } from 'react'
import { ContadorHijo } from './ContadorHijo';

export const Contador = () => {

    const [contador, setContador] = useState(0); 
    const [input, setInput] = useState('');

    // Memorizar las funciones con useCallback 

    const sumar = useCallback(() => {
        setContador( c => c + 1);
    }, [contador]); // hay que especificar las dependecias para hacer el renderizado cuando esta variable cambiaa
    

    const restar = useCallback(() => {
        setContador( c => c - 1);
    }, [contador]); 

    const handleInput = (e) => {
        setInput(e.target.value);
    }

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>
            +
        </button>
        <button onClick={restar}>
            -
        </button>
      </nav>

      <h3>{contador}</h3>

      <input type="text" onChange={handleInput} value = {input} />

      <ContadorHijo sumar={sumar} restar={sumar} contador={contador}/>
    </div>
  )
}


