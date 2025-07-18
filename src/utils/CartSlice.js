// Redux slice for managing cart store.

import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        items: [],
    },
    reducers: {

        // Add product to cart
        addItems: (state, action) => {
            const isDuplicate = state.items.find(item => item.id === action.payload.id)
            if (isDuplicate) {
                alert("Product already there in cart")
            } else {
                state.items.push({...action.payload,totalPrice:action.payload.price,quantity:1})
            }

        },
        
        // Increase price
        increasePrice:(state,action)=>{
           const item=state.items.find(item=> item.id==action.payload)
           if(item){
            item.totalPrice+=item.price
            item.quantity+=1
           }
        },
        
        // Decrease price
        decreasePrice:(state,action)=>{
            const item=state.items.find(item=> item.id==action.payload)
            if(item && item.totalPrice>item.price+0.01){
             item.totalPrice-=item.price
             item.quantity-=1
            }
         },
         
         // Deelete item from the cart
         deleteItems: (state) => {
            state.items=[]
        }, 
        
        // Remove / Clear the cart
        removeItems: (state,action) => {
            state.items=state.items.filter(item=> item.id!==action.payload.id)
        },

    }
})

export const { addItems, removeItems, increasePrice, decreasePrice, deleteItems } = CartSlice.actions;
export default CartSlice.reducer;