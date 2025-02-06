import { useCallback, useEffect, useState } from "react";


export const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url); 
            if (!response.ok) throw new Error('Error en la respuesta del API'); 
            const result = await response.json(); 
            setData(result); 
            setError(null);  
        } catch (error) {
            throw new Error('Ha ocurrido un error muy grande espera un rato')
        } finally {
            setLoading(false); 
        }

        return { data, loading, error}; 
    }; 

    
    fetchData();

    
}; 

