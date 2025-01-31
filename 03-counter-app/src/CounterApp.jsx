import PropTypes from "prop-types";

// Se debe importar el hooks 

import { useState } from "react"; // el use indica que es un hook 


export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState( value ); 

    // boton para aumentar el contador 
    const handleAdd = ( ) => { 

        //setCounter( counter + 1); 
        setCounter( (c) => c + 1) 
    
    }

    // boton para disminuir el contador 
    const handleSubtract = () => setCounter( (c) => c - 1 ); 

    // boton para resetear el valor del boton 
    const handleReset = () => setCounter( value ); 


    return ( // devolver los datos que se piden 

        <>

            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubtract }> -1 </button>
            <button onClick={ handleReset }> reset </button>

        </>

    )

}

CounterApp.propTypes = { // volver la propertie como numero y requeridad 
    value: PropTypes.number.isRequired
}

