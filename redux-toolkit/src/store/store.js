import { configureStore } from "@reduxjs/toolkit";

// Reducer 

import userReducer from '../reducers/user/userSlice'; 

export default configureStore({
    reducer: userReducer
})


