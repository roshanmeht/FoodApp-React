import { createSlice } from "@reduxjs/toolkit";

export const CartSlice= createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItem:(state,action)=>{
          state.cartItems.push(action.payload)
        },
        removeItem:(state,action)=>{
         state.cartItems.pop()
        },
        clearCart:(state,action)=>{
             state.cartItems.length=0;
        }
    }
});


export default CartSlice.reducer;
export const {addItem , removeItem , clearCart} = CartSlice.actions;