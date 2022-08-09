import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const initialState = {
  products: [],
  cart: [],
};

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

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  const data = {
    products: products,
    cart: [],
  };

  // const [state, dispatch] = useReducer(rootReducer, {
  //     products:products,
  //     cart:[]
  // })

  return (
    <ProductStateProvider
      value={data}
    >{children}</ProductStateProvider>
  );
};

export default Context;

export const ProductsState = () => {
  return useContext(Products);
};
