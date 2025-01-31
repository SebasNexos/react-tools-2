import { checkingCredentials, login, logout } from './'; // importar las funciones que queremos despachar 
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
import { LogoutOutlined } from '@mui/icons-material';

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => { // el dispatch viene de forma predeterminada para despachar las funciones 

        dispatch( checkingCredentials() ); // despachamos la función del authSlice.js

    }
}

// podemos hacer mas de este tipo de funciones que pueden enviar más de una función 

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() ); 

        const result = await singInWithGoogle(); 
        
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) )
        
        dispatch( login( result ) ); 
        
    }
}


export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {

        dispatch( checkingCredentials() ); 

        const { ok, uid, photoURL } = await registerUserWithEmailPassword({ email, password, displayName}); 

        if ( !ok ) return dispatch( logout( { errorMessage} ) )
        
        dispatch( login({ uid, displayName, email, photoURL }))
        
    }

}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async(dispatch) => {

        dispatch( checkingCredentials() ); 

        const result = await loginWithEmailPassword({ email, password }); 
        console.log(result); 

        if ( !result.ok ) return dispatch( logout( result ) ); 
        dispatch( login( result ))

        
    }

}

export const startLogout = () => {
    return async( dispatch ) => {

        await logoutFirebase(); 

        dispatch( logout({}) ); 
        
    }
}