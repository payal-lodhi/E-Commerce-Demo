import React from "react";

interface ISortingComponent {
    onChange :(event: React.ChangeEvent<HTMLSelectElement>)=> void
}

export const SortingComponent:React.FC<ISortingComponent> = ({onChange}): React.ReactElement => {
  return (
    <>
      <div
        style={{
          float: "right",
          paddingBottom: "1.5rem !important",
          width: "16%",
          padding: '20px'
        }}
      >
        <select className="form-control" onChange={onChange}>
          <option>Sort By</option>
          <option value="SORT_BY_TITLE_ASC">Product Name [A-Z]</option>
          <option value="SORT_BY_TITLE_DESC">Product Name [Z-A]</option>
          <option value="SORT_BY_PRICE_ASC">Price Low to High</option>
          <option value="SORT_BY_PRICE_DESC">Price High to Low</option>
        </select>
      </div>
    </>
  );
};
