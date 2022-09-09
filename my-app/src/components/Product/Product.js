import React from "react";
import './Product.css'
const Products = ({ productItems, handleAddProduct,handleCartClearance}) => {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="cart">
          <div>
            <img
              className="product-img"
              src={productItem.img}
              name={productItem.name}
            />
          </div>
          <div>
            <h3 className="product-name pd">{productItem.name}</h3>
          </div>
          <div className="product-price pd">${productItem.price} </div>
          <div>
            <button className="addcart pd" onClick={() => handleAddProduct(productItem)}>+ Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products;