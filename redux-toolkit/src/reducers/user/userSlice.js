
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: 'anosdesoledad@gmailcom',
    fullName: 'Nadie soleda',
    token: '987456321', 
}

export const userSlice = createSlice({
    name: 'user', // nombre del reducer global 
    initialState: initialState, // estado inicial 
    reducers: {
        setUser: (state, action) => { // aqui solo se pasa el payload por que el type toolkit nos evita eso 
            state.email = action.payload.email; 
            state.fullName = action.payload.fullName; 
            state.token = action.payload.token
        }, 
        unsetUser: (state) => { // no tiene payload 
            state.email = ''; 
            state.fullName = ''; 
            state.token = ''; 
        }
    }
});


// Action creators are generated for each case reducer function
export const { unsetUser, setUser } = userSlice.actions; // esto es oligatorio

export default userSlice.reducer; 