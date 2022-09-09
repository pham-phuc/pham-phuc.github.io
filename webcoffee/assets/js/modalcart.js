let btnCart1 = document.querySelector(".header .nav-cart");
let close = document.querySelector("span.close");
let modalCart = document.querySelector(".modal-cart");
let modalCartContent = document.querySelector(".modal-cart-content");
let countItemCart = document.querySelector(".header .nav-cart span");

// nav cart
btnCart1.addEventListener("click", () => {
  modalCart.style.display = "block";
  displayCart();
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
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers > 0) {
    document.querySelector(
      ".modal-cart .gr-button"
    ).innerHTML = `<a href="cart.html" class="hide">
      <button>Xem giỏ hàng</button>
    </a>
    <a href="checkout.html" class="hide">
      <button>Thanh toán</button>
    </a>`;

    countItemCart.classList.remove("hide");
    document.querySelector(".modal-cart .sub-total").classList.remove("hide");
    document.querySelector(".header .nav-cart span").textContent =
      Object.values(cartItems).length;
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
      <button>Tiếp tục mua hàng</button>
    </a>`;
    document.querySelector(".modal-cart .sub-total").classList.add("hide");
  }
  document.querySelector(".header .nav-cart span").textContent =
    Object.values(cartItems).length;
}
renderCart();
