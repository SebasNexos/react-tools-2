import { useState } from "react";


export const useForm = ( initialForm = {}) => {
  
    const [formState, setFormState] = useState( initialForm ); 


    const onInputChange = ({target}) => { // esto es lo que produce el evento 
        const { name, value } = target; 

        setFormState({
            ...formState, 
            [ name ]: value  
        });
    }   

    const onResetForm = () => {
        setFormState( initialForm ); 
    }

    return {
        ...formState, 
        formState, 
        onInputChange, 
        onResetForm
    }
}

