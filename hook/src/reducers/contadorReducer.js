import { types } from "../actions/contadorActions";

export const contadorInitialState = { contador: 0 }; // estado inicial

export const contadorInit = (initialState) => {
    return {
        contador: initialState.contador + 100
    }
}


export const contadorReducer = (state, action) => {

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
            return contadorInitialState
    }
}