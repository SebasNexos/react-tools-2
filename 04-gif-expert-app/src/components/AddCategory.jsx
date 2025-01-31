import { useState } from "react"


export const AddCategory = ( { onNewCategory } ) => {


    const [inputValue, setInputValue] = useState(''); // Este es el valor inicial del inputValue

    const onInputChanged = ({ target }) => { {/**Esta es la menera para poder hacer el uso del cambio de valor del input */}
        setInputValue( target.value ); 
    }

    const onSubmit = ( event ) => { // de esta manera se agrega atraves de evento agrager un nuevo elemento 
        event.preventDefault(); // Esto es directo del sistema 

        
        if( inputValue.trim().length <= 1) return; // Esto se hace para que no ingresemos valores nulos 

        //setCategories( categories => [...categories, inputValue]);
        setInputValue( '' ); 
        onNewCategory( inputValue.trim() ); 
        
        
        
    }

    {/**Aquí es donde se realiza el cambio en el onChange 
        en el input value hay como valor inicial el valor de One Punch y luego de esto se puede cambiar con onChange
        */}

    return (
        <form onSubmit={ onSubmit }>
            <input
              type="text" 
              placeholder="Buscar Gif"
              value={inputValue}
              onChange={ onInputChanged } 
            />
        </form>
    )
}


