import React from "react";
import { ProductsState } from "../context/Context";
import { ProductCard } from "../components/ProductCard";
//import { ProductListComponent } from "../components/app.style";
import Layout from "../components/Layout";
import styled from "styled-components";
import { FilterComponent } from "../components/Filters";
import { FaSpinner } from "react-icons/fa";
import Spinner from "react-bootstrap/Spinner";
import { Dropdown } from "react-bootstrap";

const Products: React.FC = (): React.ReactElement => {
  const { state, dispatch } = ProductsState();

  const { products } = state ? state : [];

  const ProductListComponent = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    margin: 0;
    @media (min-width: 768px) {
      width: 70%;
      //margin-left:9%
    }
  `;

  const ProductListListWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
      //margin-left:9%
    }
  `;

  const StyledLoader = styled(Spinner)`
    position: relative;
    top: 50%;
  `;

  const sortBy = (sort: string):void =>{
    dispatch({
      type:sort,
      payload:null
    })
  }

  return (
    <Layout>
      <ProductListListWrapper>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item  onClick={()=> sortBy('SORT_BY_TITLE_ASC')}>Product Name [A-Z]</Dropdown.Item>
            <Dropdown.Item  onClick={()=> sortBy('SORT_BY_TITLE_DESC')}>Product Name [Z-A]</Dropdown.Item>
            <Dropdown.Item  onClick={()=> sortBy('SORT_BY_PRICE_ASC')}>Price Low to High</Dropdown.Item>
            <Dropdown.Item  onClick={()=> sortBy('SORT_BY_PRICE_DESC')}>Price High to Low</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
