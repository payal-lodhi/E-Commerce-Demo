import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import {rootReducer, initialState} from "./Reducer";
import {IProduct} from "../interface/product"


// const initialState = {
//   products: [],
//   cart: [],
// };

const Products = createContext(initialState);

interface IContextProps {
  children: ReactElement;
}

interface IAppGlobalState {
    products:any;
    cart:any;
}

const Context: React.FC<IContextProps> = ({ children }): React.ReactElement => {
  const ProductStateProvider = Products.Provider;
  const [products, setProducts] = useState([]);
  var test:any =[];

  const [state, dispatch] = useReducer(rootReducer, {
    products,
    cart:[]
  })

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => { 
        setProducts(response)
        dispatch({ type:'SET_PRODUCTS_DATA', payload:response})
        
      })
      
  }, []);


  // const data = {
  //   products: products,
  //   cart: [],
  // };
  

  

  //console.log('**** products ', products, state, test)

  return (
    <ProductStateProvider
      value={{state, dispatch}}
    >{children}</ProductStateProvider>
  );
};

export default Context;

export const ProductsState = () => {
  return useContext(Products);
};
