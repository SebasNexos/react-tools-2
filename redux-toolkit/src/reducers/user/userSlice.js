
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    fullname: '',
    token: '', 
}

export const userSlice = createSlice({
    name: 'user', // nombre del reducer global 
    initialState: {initialState}, // estado inicial 
    reducers: {
        setUser: (state, action) => { // aqui solo se pasa el payload por que el type toolkit nos evita eso 
            state.email = action.payload.email; 
            state.fullname = action.payload.fullname; 
            state.token = action.payload.token
        }
    }
});


// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions; // esto es oligatorio

export default userSlice.reducer; 