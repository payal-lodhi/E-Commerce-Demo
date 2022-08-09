import React from "react";
import { ProductsState } from "../context/Context";
import { ProductCard } from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { ProductListComponent } from "../components/app.style";
import Layout from "../components/Layout";

const Products: React.FC = (): React.ReactElement => {
  const { products } = ProductsState();

  return (
    <Layout>
      <ProductListComponent>
        {products ? (
          products.map((product, index) => <ProductCard product={product} key={index}/>)
        ) : (
          <p> loading....</p>
        )}
      </ProductListComponent>
    </Layout>
  );
};

export default Products;
