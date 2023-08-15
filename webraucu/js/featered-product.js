let listItems = document.querySelectorAll(".featured-product .col-sm-6");
let listBtnAddToCart = document.querySelectorAll(
  ".featured-product button.add-to-cart"
);
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "detail.html";
  });
});
