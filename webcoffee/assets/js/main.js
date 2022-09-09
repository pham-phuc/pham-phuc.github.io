let btnCart = document.querySelectorAll(".addtocard");
let products = [
  {
    name: "ETHIOPIA COFFEE",
    tag: "ethiopiacoffee",
    img: "assets/images/product-img-1.png",
    price: 15,
    quantity: 1,
    incart: 0,
  },
  {
    name: "KENYA COFFEE",
    tag: "kenyacoffee",
    img: "assets/images/product-img-3.png",
    price: 14,
    quantity: 1,
    incart: 0,
  },
  {
    name: "COLUMBIA COFFEE",
    tag: "columbiacoffee",
    img: "assets/images/product-img-5.png",
    price: 13,
    quantity: 1,
    incart: 0,
  },
  {
    name: "GUATEMALA COFFEE",
    tag: "guatemalacoffee",
    img: "assets/images/product-img-8.png",
    price: 12,
    quantity: 1,
    incart: 0,
  },
  {
    name: "FRENCH PRESS",
    tag: "frenchpress",
    img: "assets/images/product-img-2.jpg",
    price: 12,
    quantity: 1,
    incart: 0,
  },
  {
    name: "DOLCE GUSTO",
    tag: "dolcegusto",
    img: "assets/images/product-img-4.jpg",
    price: 15,
    quantity: 1,
    incart: 0,
  },
  {
    name: "COFFEE KETTLE",
    tag: "coffeekettle",
    img: "assets/images/product-img-6.jpg",
    price: 15,
    quantity: 1,
    incart: 0,
  },
  {
    name: "FILTER HANDLE",
    tag: "filterhandle",
    img: "assets/images/product-img-9.jpg",
    price: 15,
    quantity: 1,
    incart: 0,
  },
  {
    name: "ESPRESSO MACHINE",
    tag: "espressomachine",
    img: "assets/images/product-img-7.jpg",
    price: 15,
    quantity: 1,
    incart: 0,
  },
];

function onLoadCartNumber() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".nav-link span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".nav-link span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".nav-link span").textContent = 1;
  }
  setItems(product);
}
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].incart += 1;
  } else {
    product.incart = 1;

    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
function displayCart() {
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".list-items");
  if (cartItems && productContainer) {
    productContainer.innerHTML = ``;
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `<div class="item">
      <div class="item-main">
        <div class="item-img">
          <img src="${item.img}" alt="">
        </div>
        <div class="item-info">
          <p class="item-info-name">${item.name}</p>
          <p class="item-info-unit-price">Đơn giá: <span>${item.price} $</span></p>
          <p class="item-info-weight">Khối lượng: ${item.incart}</p>
        </div>
      </div>
      <div class="item-remove">
        <i class="fa-solid fa-trash-can"></i>
      </div>

    </div>`;
    });
    document.querySelector(".sub-total p span").innerHTML = cartCost;
  }
}
for (let i = 0; i < btnCart.length; i++) {
  btnCart[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}
onLoadCartNumber();

for (let i = 0; i < btnCart.length; i++) {
  btnCart[i].addEventListener("click", () => {
    renderCart();
  });
}
