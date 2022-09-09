import React from "react";
import "./Cart.css";
const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items">
      <div className="header-cart"> Cart Item</div>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button
            className="clear-cart-all"
            onClick={() => handleCartClearance()}
          >
            Clear All Cart
          </button>
        )}
      </div>
      <div className="info-item">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-list">
            <img className="cart-item-img" src={item.img} name={item.name} />
            <div className="cart-item-name">
              <h3>{item.name}</h3>
            </div>
            <div className="cart-item-function">
              <button
                className="cart-item-add button-css button-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button className="cart-item-quantity button-css">
                {item.quantity}
              </button>
              <button
                className="cart-item-remove button-css button-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-item-price">
              {" "}
              ${item.quantity * item.price}{" "}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-item-totalPrice"> Total Price : ${totalPrice} </div>
    </div>
  );
};
export default Cart;
