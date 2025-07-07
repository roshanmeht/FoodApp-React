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
         //state.cartItems.pop()
         state.cartItems= state.cartItems.filter((item)=>{return item.prop.card.info.id!== action.payload});
        },
        clearCart:(state,action)=>{
             state.cartItems.length=0;
        }
    }
});


export default CartSlice.reducer;
export const {addItem , removeItem , clearCart} = CartSlice.actions;