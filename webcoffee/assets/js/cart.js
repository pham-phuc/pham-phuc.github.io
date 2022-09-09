function renderCartMain() {
  let cartContent = document.querySelector("tbody");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let content = Object.values(cartItems).map((item) => {
    return `
      <tr>
        <td data-th="Product">
          <div class="row">
            <div class="col-sm-3 hidden-xs">
              <img
                src="${item.img}"
                alt="Sản phẩm 1"
                class="img-responsive"
                width="100%"
              />
            </div>
            <div class="col-sm-9">
              <h4 class="nomargin">${item.name}</h4>
            </div>
          </div>
        </td>
        <td data-th="Price"><span class="price">${item.price}</span>$</td>
        <td class="qly" data-th="Quantity">
        <form action="#" class="display-flex">
          <div class="qtyminus">-</div>
          <input type="text" name="quantity" value= ${
            item.incart
          } class="qty" />
          <div class="qtyplus">+</div>
        </form>                            
        </td>
        <td data-th="Subtotal" class="text-center"> <span>${
          item.price * item.incart
        }</span>.00 $</td>
        <td class="actions" data-th="">
          <button class="btn btn-sm edit">
            <i class="fa fa-edit"></i>
          </button>
          <button class="btn btn-sm remove" onclick ="removeItem(${
            item.name
          })" >
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>`;
  });
  let cartCost = localStorage.getItem("totalCost");
  document.querySelector(".text-center strong span").innerHTML = cartCost;
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers > 0) {
    cartContent.innerHTML = content.join("");
    countItemCart.classList.remove("hide");
  } else {
    countItemCart.classList.add("hide");

    cartContent.innerHTML = `<div class="img-empty-cart">
    src="assets/images/empty-cart.webp" alt=""
    </div>`;
    document.querySelector(
      ".cart-content .total-price span:last-child"
    ).textContent = "0$";
    document.querySelector(
      ".cart-content .shipping-cost span:last-child"
    ).textContent = "0$";

    document.querySelector(".cart-content .total span:last-child").textContent =
      "0$";
    let btnCheckOut = document.querySelector(".cart-content .check-out");
    btnCheckOut.style.opacity = "0.3";
    btnCheckOut.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
}
renderCartMain();
$(document).ready(function () {
  $(".qtyminus").on("click", function () {
    var now = $(".qty").val();
    console.log(now);
    if ($.isNumeric(now)) {
      if (parseInt(now) - 1 > 0) {
        now--;
      }
      $(".qty").val(now);
    }
  });
  $(".qtyplus").on("click", function () {
    var now = $(".qty").val();
    if ($.isNumeric(now)) {
      $(".qty").val(parseInt(now) + 1);
    }
  });
});
