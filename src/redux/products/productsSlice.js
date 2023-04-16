import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "product",
    initialState: {
        productsData: [
            {
                productId: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
                productName: "John",
                productCategory: "Doe",
                imageOfProduct: "Doe",
                productFreshness: "Doe",
                additionalDescription: "Doe",
                productPrice: "Doe",
            },
            {
                productId: "b6ce2b87-d0c1-4a75-9c1d-e6dfc9541838",
                productName: "Kezy",
                productCategory: "Doe",
                imageOfProduct: "Doe",
                productFreshness: "Doe",
                additionalDescription: "Doe",
                productPrice: "Doe",
            }
        ]
       
    }, //nilai awal state/store
    reducers: {
        addProduct: (state, actions) => {
            return {
                ...state,
                productsData: [...state.productsData, actions.payload]
            };
        },
        deleteProduct: (state, actions) => {
            if (window.confirm("Do you want to delete data?")) { 
                state.productsData = state.productsData.filter(product => product.productId != actions.payload)
            }
        },
        editProduct: (state, actions) => {
            state.productsData = state.productsData.map(product => product.productId === actions.payload.productId ? actions.payload : product)
        }
    }
})

//export action
export const {addProduct, deleteProduct, editProduct} = productsSlice.actions

//export reducer
export default productsSlice.reducer