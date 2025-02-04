import { configureStore } from "@reduxjs/toolkit";

// Reducer 

import userReducer from '../reducers/user/userSlice'; 
import cartSlice from "../reducers/cart/cartSlice";

export default configureStore({
    reducer: {
        user: userReducer, 
        cart: cartSlice,
    }                      
})