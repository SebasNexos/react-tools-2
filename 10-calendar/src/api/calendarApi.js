import axios from "axios";
import { getEnvVaraibles } from "../helpers";

const { VITE_API_URL } = getEnvVaraibles(); 

const calendarApi = axios.create({
    baseURL: VITE_API_URL
})

// TODO: configurar interceptores 
// nos permite interceptar las peticiones para configurarla 

calendarApi.interceptors.request.use( config => { // todas las peticiones envian
    // esta petición 

    config.headers = {
        ...config.headers, 
        'x-token': localStorage.getItem('token')
    }

    return config; 
})

export default calendarApi; 


