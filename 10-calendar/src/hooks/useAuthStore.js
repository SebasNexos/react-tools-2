// realizar cualquier interación con el auth de la aplicación 

import { useDispatch, useSelector } from "react-redux"  // conectar el auth con el backend
import calendarApi from "../api/calendarApi";
import { clearErrorMessage, onChecking, onLogin, onLogout, onLogoutCalendar } from "../store";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch(); 

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() ); 

        try { // realizar la petición http al backend 
            const { data } = await calendarApi.post('/auth', { email, password }); 
            // uso del localStore para guardar el token del usuario 
            localStorage.setItem('token', data.token); 
            localStorage.setItem('token-init-date', new Date().getTime()); 
            dispatch( onLogin({ name: data.name, uid: data.uid }) ); 

        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas'))
            setTimeout( () => {
                dispatch( clearErrorMessage() ); 
            }, 10); 
        }

    }

    const startRegister = async({ name, email, password }) => {
        dispatch( onChecking() ); 
        try { // realizar la petición http al backend 
            const { data } = await calendarApi.post('/auth/new', { name, email, password }); 
            // uso del localStore para guardar el token del usuario 
            localStorage.setItem('token', data.token); 
            localStorage.setItem('token-init-date', new Date().getTime()); 
            dispatch( onLogin({ name: data.name, uid: data.uid }) ); 

        } catch (error) {
            dispatch( onLogout( error.response.data?.msg || '----'))
            setTimeout( () => {
                dispatch( clearErrorMessage() ); 
            }, 10); 
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token'); 
        if ( !token ) return dispatch( onLogout() ); 

        try {
            const { data } = await calendarApi.get('/auth/renew'); 
            console.log({ data });
            localStorage.setItem('token', data.token); 
            localStorage.setItem('token-init-date', new Date().getTime()); 
            dispatch( onLogin({ name: data.name, uid: data.uid}))
        } catch (error) {
            localStorage.clear(); 
            dispatch( onLogout() ); 
        }
    }

    const startLogout = () => {
        localStorage.clear(); 
        dispatch( onLogoutCalendar() );
        dispatch( onLogout() ); 
    }


    return {
        // Propiedades 
        status,
        user, 
        errorMessage, 


        // Metodos 
        startLogout,
        checkAuthToken, 
        startLogin, 
        startRegister, 
    }
}