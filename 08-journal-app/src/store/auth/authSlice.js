import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth', // nombre entre comillas del Slice y es como se llama en el store.js 
    initialState: { 
        status: 'not-authenticated',  // 'not-authenticated', 'authenticated'
        uid:null, 
        email: null,
        displayName: null,
        photonURL: null, 
        errorMessage: null, 
    },
    reducers: {
        login: ( state, {payload} ) => {
            state.status = 'not-authenticated',  // 'not-authenticated', 'authenticated'
            state.uid = payload.uid; 
            state.email = payload.email; 
            state.displayName = payload.displayName; 
            state.photonURL = payload.photonURL; 
            state.errorMessage = null; 

        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated',  // 'not-authenticated', 'authenticated'
            state.uid = null; 
            state.email = null; 
            state.displayName = null; 
            state.photonURL = null; 
            state.errorMessage = payload?.errorMessage;  
        }, 
        checkingCredentials: ( state ) => {
            state.status = 'checking'
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
