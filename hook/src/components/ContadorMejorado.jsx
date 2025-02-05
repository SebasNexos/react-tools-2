import React, { useReducer } from 'react'
import { types } from '../actions/contadorActions';
import { contadorInit, contadorInitialState, contadorReducer } from '../reducers/contadorReducer';

export const ContadorMejorado = () => {

    const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit); 

    const sumar = () => dispatch({ type: types.increment} ); 
    const sumar_5 = () => dispatch({ type: types.increment_5, payload: 5} ); 
    const reset = () => dispatch({ type: types.reset});
    const restar = () => dispatch({ type: types.decrement} ); 
    const restar_5 = () => dispatch({ type: types.decrement_5, payload: 5} );  

  return (
    <div style={ {textAlign: 'center'} }>
      <h2>Contador Mejorado</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={sumar_5}>+5</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar_5}>-5</button>
      </nav>

      <h3>{state.contador}</h3>
    </div>
  )
}


