import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductListItem from "./ProductListItem";

const HomePage = () => {
  const [inventoryArr, setInventoryArr] = useState([]);
  const [cost, setCost] = useState(0);

  const onProdAdd = (newProd) => {
    localStorage.setItem(newProd.key, JSON.stringify(newProd));
    setInventoryArr((prevState) => {
      return [newProd, ...prevState];
    });
    setCost(cost + Number(newProd.price));
  };
  const onDelete = (ele) => {
    const id = ele.key
    localStorage.removeItem(id);
    const filteredArr = inventoryArr.filter((ele) => {
      return ele.key !== id;
    });
    setInventoryArr(filteredArr);
    setCost(cost-Number(ele.price))
  };

  return (
    <div>
      <ProductForm onProdAdd={onProdAdd} />
      {inventoryArr.map((ele) => {
        return <ProductListItem ele={ele} key={ele.key} onDelete={onDelete} />;
      })}
      <h2>The total cost of inventory is {cost}</h2>
    </div>
  );
};

export default HomePage;
