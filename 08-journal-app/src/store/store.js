import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer // es como un tipo de llamada hacia authSlice solo es eso 
  },
})