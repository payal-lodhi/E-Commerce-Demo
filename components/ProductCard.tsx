import React from "react";
import Link from "next/link";
import { IProduct } from "../interface/product";
import {
  StyledCard,
  StyledCardImage,
  StyledCardOverlay,
  FilledStarIcon,
  MutedStarIcon,
  OverlayButton,
} from "./ProductCard.sytle";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

interface ICardProps {
  product: IProduct;
}

export const ProductCard: React.FC<ICardProps> = ({
  product,
}): React.ReactElement => {
  return (
    <StyledCard key={product.id}>
      <div className="card rounded-0">
        <StyledCardImage src={product.image} />
        <StyledCardOverlay className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
          <ul className="list-unstyled">
            <li>
              <Link href="/">
                <OverlayButton>
                  <FaHeart />
                </OverlayButton>
              </Link>
            </li>
            <li>
              <Link href="/">
                <OverlayButton><FaEye /></OverlayButton>
              </Link>
            </li>
            <li>
              <Link href="/">
                <OverlayButton>
                  <FaShoppingCart />
                </OverlayButton>
              </Link>
            </li>
          </ul>
        </StyledCardOverlay>
      </div>
      <div className="card-body">
        {product.title}

        <p>M/L/X/XL</p>
        <div className="text-center mb-0">
          {[...Array(5)].map((data, index) =>
            index < Math.floor(product.rating.rate) ? (
              <FilledStarIcon key={index} />
            ) : (
              <MutedStarIcon key={index} />
            )
          )}
        </div>
        <p className="text-center mb-0">${product.price}</p>
       
      </div>
    </StyledCard>
  );
};
