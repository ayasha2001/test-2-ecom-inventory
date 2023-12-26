import React from "react";
import "./ProductListItem.css";

const ProductListItem = ({ ele , onDelete}) => {
  const handleDelete = () => {
    onDelete(ele)
  };
  return (
    <div className="diplayed-list-item">
      <p>{`prod-${ele.name}, quantity-${ele.qty}, price-${ele.price}`}</p>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default ProductListItem;
