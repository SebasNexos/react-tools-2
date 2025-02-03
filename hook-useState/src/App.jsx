import { act, useReducer } from 'react';

const reducer = (state, action) => { // esta función se ejecuta cada vez que se ejecuta el dispatch y envia la acción 
  switch (action.type) { // uso del switch para realizar una logica con los datos que tenemos en initialState 
    case 'increment_age': { 
      return {
        name: state.name, 
        age: state.age + 1
      }; 
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: action.age
      }; 
    }
  }
}

const inititalState = {name: 'Fernado', age:18}; 

export const App = () => {
  
  const [state, dispatch] = useReducer(reducer, inititalState); 

  const handleButtonClick = () => {
    dispatch({type: 'incremented_age'}); 
  }

  const handleInputChange = (e) => {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value // se pueden crear variables que nos sirvan de apoyo y no solo la acción 
    })
  }

  return (
    <>

      <input 
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Incrementar edad
      </button>

      <p>Hola, {state.name}. Tu tienes {state.age}</p>
      
    </>
  );
}
