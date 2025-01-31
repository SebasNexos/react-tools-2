

const initialState = [{ // Estado inicial del reducer
    id: 1, 
    todo: 'Recolectar la piedra del Alma', 
    done: false
}]; 


const todoReducer = ( state = initialState, action = {} ) => { // se le envía dos partes el estado y la acción de como cambie el estado y retorna un nuevo estado 

    // Regresar un nuevo estado este es la acción 

    // nunca podemos utilizar push() por que muta el estate y menos en React es mejor hacerlo de la siguiente manera

    if ( action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }



    return state; 

}


let todos = todoReducer(); 

// Hacer una modificación a un reducer 

const newTodo = {
    id: 2, 
    todo: 'recolectar la piedra del poder',
    done: false
}


// haci más o menos se hace una acción 

const addTodoAction = {
    type: '[TODO] add todo', 
    payload: newTodo
}


todos = todoReducer(todos, addTodoAction)

console.log(todos);  



