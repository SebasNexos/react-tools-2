import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal';



export const useCheckAuth = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        
        onAuthStateChanged( FirebaseAuth, async( user ) => {
            if ( !user ) return dispatch( logout() );

            const { uid, email, displayName, photoURL } = user;
            dispatch( login({ uid, email, displayName, photoURL }) );
            // aqui es donde se almacena todo lo relacionado como a que el usuario este autenticado 
            // además de que se lleven a cabo las peticiones asincronas globalmente
            dispatch( startLoadingNotes() )
        })
    }, []);

    return status;
}


