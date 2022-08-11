import React from "react";
import { IProduct } from "../interface/product"


interface IAction {
    type: string;
    payload: any;
}

interface IInitialState {
    products: IProduct[]
    allProducts: IProduct[]
    cart: IProduct[]
}

export const initialState: any = {
    products: [],
    allProducts: [],
    cart: [],
    categories: [],
    featuredProducts: []

}
export const rootReducer = (state = initialState, action: IAction) => {
    console.log(' state in the root reducer ', state, action)
    switch (action.type) {
        case 'FILTER_BY_MEN':
            return {
                ...state,
                products: state.allProducts.filter((data: IProduct) => data.category === "men's clothing")

            }
        case 'FILTER_BY_WOMEN':
            return {
                ...state,
                products: state.allProducts.filter((data: IProduct) => data.category === "women's clothing")

            }
        case 'FILTER_BY_JEWELERY':
            return {
                ...state,
                products: state.allProducts.filter((data: IProduct) => data.category === "jewelery")

            }
        case 'FILTER_BY_ELECTRONICS':
            return {
                ...state,
                products: state.allProducts.filter((data: any) => data.category === "electronics")

            }
        case 'SET_PRODUCTS_DATA':
            return {
                ...state,
                products: action.payload,
                allProducts: action.payload
            }

        case 'SORT_BY_TITLE_ASC':
            return {
                ...state,
                products: state.products.sort((a: IProduct, b: IProduct) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
            }

        case 'SORT_BY_TITLE_DESC':
            return {
                ...state,
                products: state.products.sort((a: IProduct, b: IProduct) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0))
            }

        case 'SORT_BY_PRICE_ASC':
            return {
                ...state,
                products: state.products.sort((a: IProduct, b: IProduct) => a.price - b.price)
            }
        case 'SORT_BY_PRICE_DESC':
            return {
                ...state,
                products: state.products.sort((a: IProduct, b: IProduct) => b.price - a.price)
            }

        case 'GET_PRODUCTS_DATA':
            return state
        default: return state



    }

}