import React, { useReducer } from 'react'


const initialState = { contador: 0 }; // estado inicial

const init = (initialState) => {
    return {
        contador: initialState.contador + 100
    }
}

const types = {
    increment: 'increment',
    increment_5: 'increment_5', 
    decrement: 'decrement',
    decrement: 'decrement_5',
    reset: 'reset',
}

const reducer = (state, action) => {

    switch(action.type){
        case types.increment: 
            return { contador: state.contador + 1} // este es el estado 
        case types.increment_5: 
            return {contador: state.contador + action.payload}
        case types.reset: 
            return initialState
        case types.decrement: 
            return { contador: state.contador - 1}
        case types.decrement_5: 
            return {contador: state.contador - action.payload}
        default: 
            return state
    }
}

export const NewContador = () => {

    const [state, dispatch] = useReducer(reducer, initialState, init); 

    const sumar = () => dispatch({ type: types.increment} ); 
    const sumar_5 = () => dispatch({ type: types.increment_5, payload: 5} ); 
    const reset = () => dispatch({ type: types.reset})
    const restar = () => dispatch({ type: types.decrement} ); 
    const restar_5 = () => dispatch({ type: types.decrement_5, payload: 5} );  

  return (
    <div style={ {textAlign: 'center'} }>
      <h2>Contador</h2>
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


