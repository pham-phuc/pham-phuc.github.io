import React from "react";
import data from "./components/Datalist";
import Header from "./components/Header";
import Routes from "./components/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";
function App() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id == product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id == product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id == product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCartClearance = () => {
    setCartItems([]);
  };
  return (
    <div className="App">
      <Router>
        <Header cartItems={cartItems} />
        <Routes
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />
      </Router>
    </div>
  );
  
}

export default App;
