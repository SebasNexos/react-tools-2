
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModelOpen: true
    },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModelOpen = false; 
        },
        onCloseDateModal: ( state ) => {
            state.isDateModelOpen = false; 
        }
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
