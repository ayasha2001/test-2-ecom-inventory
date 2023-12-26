import React, { useState } from "react";
import "./ProductForm.css";

const ProductForm = ({ onProdAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const handleChangeName = (event) => {
    if (event.target.value.trim().length > 0) {
      setName(event.target.value);
    }
  };
  const handleChangePrice = (event) => {
    if (event.target.value.trim().length > 0) {
      setPrice(event.target.value);
    }
  };
  const handleChangeQty = (event) => {
    if (event.target.value.trim().length > 0) {
      setQty(event.target.value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onProdAdd({
      name: name,
      price: price,
      qty: qty,
      key: Math.random(),
    });
    setName("");
    setPrice("");
    setQty("");
  };
  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="label-input-container">
          <label>Product Name</label>
          <input type="text" value={name} onChange={handleChangeName} />
        </div>
        <div className="label-input-container">
          <label>Quantity</label>
          <input type="number" value={qty} onChange={handleChangeQty} />
        </div>
        <div className="label-input-container">
          <label>Price</label>
          <input type="number" value={price} onChange={handleChangePrice} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
