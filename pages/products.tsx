import React, { ReactEventHandler } from "react";
import { ProductsState } from "../context/Context";
import { ProductCard } from "../components/ProductCard";
import Layout from "../components/Layout";
import { FilterComponent } from "../components/Filters";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

import { SortingComponent } from "../components/SortingComponent";



const Products: React.FC = (): React.ReactElement => {

  const ProductListComponent = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  margin: 0;
  /* @media (min-width: 768px) {
    width: 70%;
  } */
`;

 const ProductListListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  //small screen
  @media (max-width: 768px) {
    flex-direction: column;
    //margin-left:9%
  }
`;
 const StyledLoader = styled(Spinner)`
  position: relative;
  top: 50%;
`;
  const { state, dispatch } = ProductsState();

  const { products } = state ? state : [];

  const sortBy = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log(" event ", event.target.value);
    dispatch({
      type: event.target.value,
      payload: null,
    });
  };


  

  return (
    <Layout>
      <SortingComponent  onChange={sortBy}/>
      <ProductListListWrapper>
        <FilterComponent />
        <ProductListComponent>
          {products ? (
            products.map((product: any, index: number) => (
              <ProductCard product={product} key={index} />
            ))
          ) : (
            <StyledLoader animation="border" variant="secondary" size="lg" />
          )}
        </ProductListComponent>
      </ProductListListWrapper>
    </Layout>
  );
};

export default Products;
