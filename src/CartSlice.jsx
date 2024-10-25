import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost, quantity } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    calculatetotalcount: (state, action) => {
        let totalcount = 4;
        state.totalcount ++;
        console.log(totalcount);
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
        



        //return state.items !== action.target.value;
    },

    decreaseQuantity: (state, action)=> {
        const {name, quantity} = action.payload;
        const itemtoChange = state.items.find(item => item.name === name)
        if(itemtoChange && itemtoChange.quantity > 1) {
            itemtoChange.quantity --;
        }
        
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name)
        if (itemToUpdate) {
            itemToUpdate.quantity ++;

        }
    },

  },
});

export const { addItem, removeItem, updateQuantity, decreaseQuantity, TotalAmount, calculatetotalcount } = CartSlice.actions;

export default CartSlice.reducer;
