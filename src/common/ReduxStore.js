import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const ReduxStore = configureStore({
    reducer:{
        cart:cartReducer
    },
});

export default ReduxStore;