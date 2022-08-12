import React from "react";
import { Accordion } from "react-bootstrap";
import { ProductsState } from "../context/Context";

export const FilterComponent: React.FC = (): React.ReactElement => {
    const { state, dispatch } = ProductsState();

    const filterProducts = (filter:string) =>{
        dispatch({
            type: filter,
            payload:null
        })
    }
  return (
    <div className="col-lg-3" style={{padding:'20px'}}>
      <h1 className="h2 pb-4">Categories</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Gender</Accordion.Header>
          <Accordion.Body>
            <ul className="collapse show list-unstyled pl-3">
              <li>
                <a className="text-decoration-none" href="#" onClick={()=>filterProducts('FILTER_BY_MEN')}>
                  Men
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#" onClick={()=>filterProducts('FILTER_BY_WOMEN')}>
                  Women
                </a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Product</Accordion.Header>
          <Accordion.Body>
            <ul className="collapse show list-unstyled pl-3">
              <li>
                <a className="text-decoration-none" href="#" onClick={()=>filterProducts('FILTER_BY_JEWELERY')}>
                  Jewelery
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#" onClick={()=>filterProducts('FILTER_BY_ELECTRONICS')}>
                  Electronics
                </a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
