import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { productsReducer, homeReducer, initialState } from "./Reducer";

// const initialState = {
//   products: [],
//   categories: [],
//   featuredProducts: [],
//   cart: [],
// };

const Products = createContext(initialState);

interface IContextProps {
  children: ReactElement;
}

interface IAppGlobalState {
  products: any;
  cart: any;
}

const combineReducers = (...reducers: any) => (state: any, action: any) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};


const Context: React.FC<IContextProps> = ({ children }): React.ReactElement => {
  const [state, dispatch] = useReducer(combineReducers(productsReducer, homeReducer), initialState);
  const ProductStateProvider = Products.Provider;
  const [products, setProducts] = useState([]);
  // const [state, dispatch] = useReducer(productsReducer, {
  //   products,
  //   cart: [],
  // });

  const [categories, setCategories] = useState([]);
  const [featuredProducts, setfeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())

      .then((response) => {
        setProducts(response);
        dispatch({ type: "SET_PRODUCTS_DATA", payload: response });
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((response) => {
        setCategories(response);
        dispatch({ type: "GET_ALL_CATEGORY", payload: response });
      });

    fetch("https://fakestoreapi.com/products?limit=4")
      .then((response) => response.json())
      .then((response) => {
        setfeaturedProducts(response);
        dispatch({ type: "GET_ALL_FEATURED_PRODUCTS", payload: response });
      });
    // .then((response) => setfeaturedProducts(response));
  }, []);

  const data = {
    //products: products,
    categories: categories,
    featuredProducts: featuredProducts,
    cart: [],
  };

  return (
    <ProductStateProvider value={{ state, dispatch }}>
      {children}
    </ProductStateProvider>
  );
};

export default Context;

export const ProductsState = () => {
  return useContext(Products);
};
