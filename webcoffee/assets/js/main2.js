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

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let btnCart = document.querySelector(".header .nav-cart");
let close = document.querySelector("span.close");
let modalCart = document.querySelector(".modal-cart");
let modalCartContent = document.querySelector(".modal-cart-content");
let countItemCart = document.querySelector(".header .nav-cart span");

// nav cart
btnCart.addEventListener("click", () => {
  modalCart.style.display = "block";
  renderCart();
  removeItemCart();
  totalModal();
});

close.addEventListener("click", () => {
  modalCart.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modalCart) {
    modalCart.style.display = "none";
  }
};

function renderCart() {
  if (cart.length > 0) {
    // nếu có sản phẩm thì render ở đây
    let htmls = cart.map((e) => {
      return `<div class="item">
      <div class="item-main">
        <div class="item-img">
          <img src="${e.img}" alt="">
        </div>
        <div class="item-info">
          <p class="item-info-name">${e.name}</p>
          <p class="item-info-unit-price">Price: <span>${e.price} $</span></p>
          <p class="item-info-weight">Quantity: ${e.quantity}</p>
        </div>
      </div>
      <div class="item-remove">
       <i class="fa-regular fa-trash-can"></i>
      </div>

    </div>
      `;
    });

    document.querySelector(".modal-cart .list-items").innerHTML =
      htmls.join("");
    document.querySelector(
      ".modal-cart .gr-button"
    ).innerHTML = `<a href="cart.html" class="hide">
    <button>View cart</button>
  </a>
  <a href="checkout.html" class="hide">
    <button> Payment </button>
  </a>`;

    countItemCart.classList.remove("hide");
    document.querySelector(".modal-cart .sub-total").classList.remove("hide");
    document.querySelector(".header .nav-cart span").textContent = cart.length;
  } else {
    countItemCart.classList.add("hide");
    document.querySelector(
      ".modal-cart .list-items"
    ).innerHTML = `<span class="close" onclick='modalCart.style.display = "none"'><i class="fa-solid fa-xmark"></i></span>
      <div class="img-empty-cart">
      <img src="assets/images/empty-cart.webp" alt="">
      </div>
      `;
    document.querySelector(
      ".modal-cart .gr-button"
    ).innerHTML = `<a href="shop.html" >
    <button>Continue Shopping</button>
  </a>`;
    document.querySelector(".modal-cart .sub-total").classList.add("hide");
  }

  removeItemCart();
  // renderCart();
  document.querySelector(".header .nav-cart span").textContent = cart.length;
}
renderCart();

//Tinh tong tien
function totalModal() {
  if (cart.length) {
    let total = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    document.querySelector(
      ".modal-cart .sub-total span"
    ).innerHTML = `${total.toFixed(2)}$`;
  }
}

//xoa item
function removeItemCart() {
  let listItemsModal = document.querySelectorAll(".modal-cart .item");
  let btnRemoveItemCart = document.querySelectorAll(".modal-cart .item-remove");

  if (btnRemoveItemCart.length) {
    btnRemoveItemCart.forEach((btn, index) => {
      let item = listItemsModal[index];
      btn.addEventListener("click", () => {
        item.remove();
        let nameItem = item.querySelector(".item .item-info-name").textContent;
        // Lấy index của item
        let indexItem = cart.findIndex((item) => {
          return nameItem == item.name;
        });
        if (indexItem >= 0) {
          cart.splice(indexItem, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
        }

        document.querySelector(".header .nav-cart span").textContent =
          cart.length;
        renderCart();
        totalModal();
      });
    });
  }
}

// check item cart
// check item
function checkItem(objProduct) {
  // Nêu khác tên thì add vào cart
  if (cart.findIndex((arrItem) => arrItem.name === objProduct.name) == -1) {
    cart.push(objProduct);
    console.log(cart.length);
    // span = cai này
    window.localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    // giống tên thì + weight
    cart.forEach((e) => {
      if (e.name == objProduct.name) {
        return (e.quantity = e.quantity + objProduct.quantity);
      }
    });
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }
}
