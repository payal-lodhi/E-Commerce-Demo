import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { rootReducer, initialState } from "./Reducer";
import { IProduct } from "../interface/product";

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

const Context: React.FC<IContextProps> = ({ children }): React.ReactElement => {
  const ProductStateProvider = Products.Provider;
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(rootReducer, {
    products,
    cart: [],
  });
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
      .then((response) => setCategories(response));

    fetch("https://fakestoreapi.com/products?limit=4")
      .then((response) => response.json())
      .then((response) => setfeaturedProducts(response));
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
