import { createSlice } from "@reduxjs/toolkit";

export const aromaticSlice = createSlice({
    name: "maintenance",
    initialState: [
        {
            name: "Lavender",
            image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Calming scent, used in aromatherapy.",
            cost: "20"
        },
        {
            name: "Jasmine",
            image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Sweet fragrance, promotes relaxation.",
            cost: "18"
        },
        {
            name: "Rosemary",
            image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
            description: "Invigorating scent, often used in cooking.",
            cost: "15"
        },
        {
            name: "Mint",
            image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
            description: "Refreshing aroma, used in teas and cooking.",
            cost: "$12"
        },
        {
            name: "Lemon Balm",
            image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
            description: "Citrusy scent, relieves stress and promotes sleep.",
            cost: "$14"
        },
        {
            name: "Hyacinth",
            image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
            description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
            cost: "$22"
        }
    ],
    reducers: {
        incrementaromaticQuantity: (state, action ) => {
            const item = state[action.payload];
            if(item) {
                item.quantity ++; 
            }
        },
        decrementaromaticQuantity: (state, action) => {
            const item = state[action.payload];
            if(item[index] && item[index].quantity >0) {
                item.quantity --;
            }
        },
    },
});

export const {incrementaromaticQuantity, decrementaromaticQuantity} = aromaticSlice.actions;

export default aromaticSlice.reducer;
