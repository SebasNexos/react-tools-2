import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        //active: null  
    },
    reducers: {
        savingNewNote: (state) => { 
            state.isSaving = true; 
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload ); 
            state.isSaving = false; 
        }, 
        setActiveNote: (state, action) => { 
            state.active = action.payload; 
            state.messageSaved = ''; 
        }, 
        setNotes: (state, action) => { // aqui es donde se igualan las notas en el journal 
            state.notes = action.payload; 
        },
        setSaving: (state) => {
            state.isSaving = true; 
            state.messageSaved = '';  
        },
        updateNote: (state, action) => { // actualizar la nota localmente
            state.isSaving = false; 
            state.notes = state.notes.map( note => {

                if ( note.id === action.payload.id ) {
                    return action.payload; 
                }

                return note; 
            }); 

            state.messageSaved = `${ action.payload.title }, actualizada correctamente`
        }, 
        deleteNodeById: (state, action) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNodeById, } = journalSlice.actions;
