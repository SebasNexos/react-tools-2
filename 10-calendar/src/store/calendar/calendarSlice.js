import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(), 
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el paste', 
  start: new Date(),
  end: addHours( new Date(), 2),
  bgcolor: '#fafafa',
  user: {
    _id: '123',
    name: 'Juan'
    } 
  }


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: ( state, {payload} ) => {
            state.activeEvent = payload; 
        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice;
