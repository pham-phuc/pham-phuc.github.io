let addBtn = document.querySelector("button.plus-quantity-detail-product");
let minusBtn = document.querySelector("button.minus-quantity-detail-product");
let inputQuantity = document.querySelector("input.quantity-product-weight");
let btnBuyNow = document.querySelector("button.buy-now");
let btnAddToCart = document.querySelector("button.add-to-cart");

addBtn.addEventListener("click", add);
minusBtn.addEventListener("click", minus);

function add() {
  let currentValue = parseInt(inputQuantity.value) + 1;
  inputQuantity.value = currentValue;
}
function minus() {
  let currentValue = parseInt(inputQuantity.value) - 1;
  if (currentValue < 1) {
    inputQuantity.value = 1;
  } else {
    inputQuantity.value = currentValue;
  }
}

let detailProduct = document.querySelector(
  "#detail-product .wrap-detail-product-info"
);
btnBuyNow.addEventListener("click", () => {
  let name = detailProduct.querySelector(".name").innerText;
  let objectDetail = {};
  products.forEach((element) => {
    if (element.name.toLocaleLowerCase() == name.toLocaleLowerCase()) {
      objectDetail = element;
      console.log(objectDetail);
    }
  });
  objectDetail.weight = parseFloat(
    document.querySelector("#detail-product .quantity-product-weight").value
  );
  document.querySelector("#detail-product .quantity-product-weight").value = 1;
  checkItem(objectDetail);
  document.querySelector(".header .nav-cart span").textContent = cart.length;
});
btnBuyNow.addEventListener("click", function () {
  window.location.href = "checkout.html";
});

