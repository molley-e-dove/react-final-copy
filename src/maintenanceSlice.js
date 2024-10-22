import { createSlice } from "@reduxjs/toolkit";

export const maitenanceSlice = createSlice({
    name: "maintenance",
    initialState: [
        {
            name: "ZZ Plant",
            image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Thrives in low light and requires minimal watering.",
            cost: "$25"
        },
        {
            name: "Pothos",
            image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
            description: "Tolerates neglect and can grow in various conditions.",
            cost: "$10"
        },
        {
            name: "Snake Plant",
            image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
            description: "Needs infrequent watering and is resilient to most pests.",
            cost: "$15"
        },
        {
            name: "Cast Iron Plant",
            image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
            description: "Hardy plant that tolerates low light and neglect.",
            cost: "$20"
        },
        {
            name: "Succulents",
            image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
            description: "Drought-tolerant plants with unique shapes and colors.",
            cost: "$18"
        },
        {
            name: "Aglaonema",
            image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
            description: "Requires minimal care and adds color to indoor spaces.",
            cost: "$22"
        }
    ],
    reducers: {
        incrementmaintenanceQuantity: (state, action ) => {
            const item = state[action.payload];
            if(item) {
                item.quantity ++; 
            }
        },
        decrementmaintenanceQuantity: (state, action) => {
            const item = state[action.payload];
            if(item[index] && item[index].quantity >0) {
                item.quantity --;
            }
        },
    },
});

export const {incrementmaintenanceQuantity, decrementmaintenanceQuantity} = maitenanceSlice.actions;

export default maitenanceSlice.reducer;