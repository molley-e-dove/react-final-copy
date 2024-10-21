import { createSlice } from "@reduxjs/toolkit";

export const repellentSlice = createSlice({
    name: "repellentSlice",
    initialState: [
        {
            name: "oregano",
            image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
            description: "The oregano plants contains compounds that can deter certain insects.",
            cost: "$10"
        },
        {
            name: "Marigold",
            image:"https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
            description: "Natural insect repellent, also adds color to the garden.",
            cost: "$8"
        },
        {
            name: "Geraniums",
            image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
            description: "Known for their insect-repelling properties while adding a pleasant scent.",
            cost: "$20"
        },
        {
            name: "Basil",
            image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
            description: "Repels flies and mosquitoes, also used in cooking.",
            cost: "$9"
        },
        {
            name: "Lavender",
            image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Calming scent, used in aromatherapy.",
            cost: "$20"
        },
        {
            name: "Catnip",
            image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
            description: "Repels mosquitoes and attracts cats.",
            cost: "$13"
        }
    ],
    reducers: {
        incrementrepellantQuantitity: (state, action ) => {
            const item = state[action.payload];
            if(item) {
                item.quantity ++; 
            }
        },
        decrementrepellantQuantity: (state, action) => {
            const item = state[action.payload];
            if(item[index] && item[index].quantity >0) {
                item.quantity --;
            }
        },
    },
});

export const {incrementrepellantQuantitity, decrementrepellantQuantity} = repellentSlice.actions;

export default repellentSlice.reducer;