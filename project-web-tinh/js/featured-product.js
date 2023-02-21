let listItems = document.querySelectorAll(".featured-product .col-sm-6");
let listBtnAddToCart = document.querySelectorAll(
  ".featured-product button.add-to-cart"
);
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "detail.html";
  });
});
listBtnAddToCart.forEach((btn, index) => {
  let product = listItems[index];
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    let nameProduct = product.querySelector(".product-name").innerText;
    products.forEach((element) => {
      if (element.name.toLocaleLowerCase() == nameProduct.toLowerCase()) {
        checkItem(element);
      }
    });
    document.querySelector(".header .nav-cart span").textContent = cart.length;
    if (cart.length) {
      renderCart();
      totalModal();
    }
  });
  btn.addEventListener("click", () => {
    const main = document.querySelector("#cus-toast");
    if (main) {
      const toast = document.createElement("div");
      toast.classList.add("cus-toast");
      toast.innerHTML = `<div class="toast__icon">
      <i class="fa-solid fa-circle-check"></i>
    </div>
    <div class="toast__body">
      <h5 class="toast__tittle">Thành công</h5>
      <p class="toast__msg">Bạn đã thêm sản phẩm vào giỏ hàng!</p>
    </div>
   `;
    main.appendChild(toast)
    setTimeout(()=>{
      main.removeChild(toast)
    },3000)
    }
  });
});
