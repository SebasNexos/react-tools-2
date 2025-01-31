import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse( localStorage.getItem('todos') || [] ); // con esto obtenemos los todos del localStorage sin que se pierdan 
                                                              // aunque recargemos el navegador
  }
  

export const useTodos = () => {
  const [ todos, dispatch ] = useReducer( todoReducer, [], init ); 
  
    // necesitamos cuando nuestro todos cambien 
  
    useEffect(() => { // Con esto guardamos los todos en el localStorage pero no se guardan complemente ya que los todos se reinician
      localStorage.setItem('todos',  JSON.stringify( todos)); 
      
    }, [ todos ]) // si hay un cambio en los todos ejecuta lo de arriba 
  
    const handleNewTodo = ( todo ) => {
  
      // Creación del tipo de acción del useReducer
  
      const action = {
        type: '[TODO] Add todo',
        payload: todo
      }
  
      dispatch( action ); // de esta manera envío la acción al reducer 
  
    }
  
  
    const handleDeleteTodo = ( id ) => {
  
      dispatch({
        type: '[TODO] Remove todo',
        payload: id
      })
  
    }
  
    const handleToggleTodo = ( id ) => { // para marcar que la tarea se ha completado 
      
      dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
      })
    }

    return {
        todos, 
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo
    }
  
}

