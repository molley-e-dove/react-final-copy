import { createSlice } from "@reduxjs/toolkit";

export const medicinalSlice = createSlice({
    name: "medicinal",
    initialState: [
        {
            name: "Aloe Vera",
            image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
            description: "Soothing gel used for skin ailments.",
            cost: "$14"
        },
        {
            name: "Echinacea",
            image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
            description: "Boosts immune system, helps fight colds.",
            cost: "$16"
        },
        {
            name: "Peppermint",
            image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
            description: "Relieves digestive issues and headaches.",
            cost: "$13"
        },
        {
            name: "Lemon Balm",
            image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
            description: "Calms nerves and promotes relaxation.",
            cost: "$14"
        },
        {
            name: "Chamomile",
            image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
            description: "Soothes anxiety and promotes sleep.",
            cost: "$15"
        },
        {
            name: "Calendula",
            image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
            description: "Heals wounds and soothes skin irritations.",
            cost: "$12"
        }
    ],
    reducers: {
        incrementmedicinalQuantitity: (state, action ) => {
            const item = state[action.payload];
            if(item) {
                item.quantity ++; 
            }
        },
        decrementmedicinalQuantity: (state, action) => {
            const item = state[action.payload];
            if(item[index] && item[index].quantity >0) {
                item.quantity --;
            }
        },
    },
});

export const {incrementmedicinalQuantitity, decrementmedicinalQuantity} = medicinalSlice.actions;

export default medicinalSlice.reducer;