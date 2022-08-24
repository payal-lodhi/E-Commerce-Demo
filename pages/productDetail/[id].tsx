import React, { useState } from "react";
import {
  FilledStarIcon,
  MutedStarIcon,
} from "../../components/ProductCard.sytle";
import { ProductsState } from "../../context/Context";
import { IProduct } from "../../interface/product";

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const paths = data.map((productDetail: { id: { toString: () => any } }) => {
    return {
      params: { id: productDetail.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await res.json();

  return {
    props: { productDetail: data },
  };
};

interface IProductDetailsProps {
  productDetail: IProduct;
}

const ProductDetails: React.FC<IProductDetailsProps> = ({
  productDetail,
}): React.ReactElement => {
  const [counter, setCounter] = useState(1);
  //console.log(productDetail.rating.rate)

  const { state, dispatch } = ProductsState();

  const { cart } = state;

  const addProductToCart = (): void => {
    console.log("***** in the addProductToCart", productDetail);
    cart.push(productDetail);
    dispatch({
      type: "ADD_TO_CART",
      payload: cart,
    });
  };

  console.log("state ", state);
  return (
    <section className="bg-light">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img
                className="mx-auto d-block"
                src={productDetail.image}
                alt={productDetail.title}
                height="500px"
                width="400px"
              />
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h1 className="h2">Active Wear</h1>
                <p className="h3 py-2">${productDetail.price}</p>
                <ul className="list-unstyled d-flex justify-content-between">
                  <div className="text-center mb-0">
                    {[...Array(5)].map((data, index) =>
                      index < Math.floor(productDetail.rating.rate) ? (
                        <FilledStarIcon key={index} />
                      ) : (
                        <MutedStarIcon key={index} />
                      )
                    )}
                  </div>
                </ul>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Brand:</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">
                      <strong>Easy Wear</strong>
                    </p>
                  </li>
                </ul>

                <h6>Description:</h6>
                <p>{productDetail.description}</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Avaliable Color :</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">
                      <strong>White / Black</strong>
                    </p>
                  </li>
                </ul>

                <h6>Specification:</h6>
                <ul className="list-unstyled pb-3">
                  <li>{productDetail.title}</li>
                  <li>Lorem ipsum dolor sit</li>
                  <li>Amet, consectetur</li>
                  <li>Dolore magna aliqua</li>
                </ul>

                <>
                  <div className="row">
                    <div className="col-auto">
                      <ul className="list-inline pb-3">
                        <li className="list-inline-item">
                          Size :
                          <input
                            type="hidden"
                            name="product-size"
                            id="product-size"
                            value="S"
                          />
                        </li>
                        <li className="list-inline-item">
                          <span className="btn btn-light btn-size btn-outline-success">
                            S
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="btn btn-light btn-size btn-outline-success">
                            M
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="btn btn-light btn-size btn-outline-success">
                            L
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="btn btn-light btn-size btn-outline-success">
                            XL
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-auto">
                      <ul className="list-inline pb-3">
                        <li className="list-inline-item text-right">
                          Quantity
                          <input
                            type="hidden"
                            name="product-quanity"
                            id="product-quanity"
                            value="1"
                          />
                        </li>
                        <li className="list-inline-item">
                          <span
                            className="btn btn-light btn-outline-success"
                            id="btn-minus"
                            onClick={() => {
                              setCounter(Math.max(counter - 1, 1));
                            }}
                          >
                            -
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge bg-secondary" id="var-value">
                            {counter}
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span
                            className="btn btn-light btn-outline-success"
                            id="btn-plus"
                            onClick={() => {
                              setCounter(Math.max(counter + 1));
                            }}
                          >
                            +
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row pb-3">
                    <div className="col d-grid">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg"
                        name="submit"
                        value="buy"
                      >
                        Buy
                      </button>
                    </div>
                    <div className="col d-grid">
                      <button
                        //type="submit"
                        className="btn btn-success btn-lg"
                        //name="submit"
                        //value="addtocard"
                        disabled={cart.find((data:IProduct)=>data.id === productDetail.id)}
                        onClick={addProductToCart}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
