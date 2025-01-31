
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({ // esta es la base de la api de la url del api que queremos consumir 
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({ 

        getTodos: builder.query({ // estos son los endpoints que nosotros bamos a necesitar para completar ese baseUrl 
            query: () => '/todos' // osea es solo concatenar y ya 
        }), 
    })

})


export const { useGetTodosQuery, useGetTodoQuery } = todosApi; // y esta es el custom hook que va a consumir esa 
// petición http 








