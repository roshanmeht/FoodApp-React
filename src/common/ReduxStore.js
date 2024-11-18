import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

// console.log('love',cartReducer);
const ReduxStore = configureStore({
    reducer:{
        cart:cartReducer
    },
});

export default ReduxStore;