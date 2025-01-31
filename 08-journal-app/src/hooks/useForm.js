import { FormatColorFillRounded, FormatColorFillTwoTone } from '@mui/icons-material';
import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidations] = useState({})

    useEffect( () => {
        createValidators(); 
    }, [ formState ])


    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null) return false
        }

        return true; 

    }, [ formValidation ]) // memorizar valor 

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const formCheckValues = {}; 
        
        for ( const formField of Object.keys( formValidations )) {
            
            const [fn, errorMessage = 'Errores de validación'] = formValidations[formField]; 

            formCheckValues[`${ formField }Valid`] = fn( formState[formField] ) ? null: errorMessage

        }

        setFormValidations( formCheckValues ); 

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation, 
        isFormValid
    }
}