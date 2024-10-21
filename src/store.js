import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import purifyingReducer from './purifyingSlice';
import repellantReducer from './repellantSlice';


 const store = configureStore({
    reducer: {
        cart: cartReducer,
        purifying: purifyingReducer,
        repellant: repellantReducer,
    },
});
export default store