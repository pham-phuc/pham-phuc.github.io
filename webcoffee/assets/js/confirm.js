let customerInfo = JSON.parse(localStorage.getItem("customerInfo")) || [];

let ojectConfirm = {
  name: customerInfo[0],
  phone: customerInfo[1],
  email: customerInfo[2],
  address: customerInfo[3],
  district: customerInfo[5],
  city: customerInfo[4],
  note: customerInfo[6],
};
customerInfo.push(ojectConfirm);
customerInfo.splice(0, 7);

function renderCustomerInfo() {
  let confirm = document.querySelector(
    "#confirm .wrap-confirm-right .customer-detail"
  );
  let content = customerInfo.map((item) => {
    return `<h5>Thông tin khách hàng</h5>
        <p>Họ tên: ${item.name}</p>
        <p>Email: ${item.email}</p>
        <p>Điện thoại: ${item.phone}</p>
        <p>Địa chỉ: ${item.address}, ${item.district}, ${item.city}</p>
        <p>Ghi chú: ${item.note}</p>`;
  });
  confirm.innerHTML = content.join("");
}
renderCustomerInfo();

function renderOrderDetail() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let tableProduct = document.querySelector("#confirm .order-detail table");
  let content = Object.values(cartItems).map((item) => {
    return `<tr>
            <td>${item.name}</td>
            <td>${item.price} $</td>
            <td>${item.incart}</td>
            <td>${item.price * item.incart} $</td>
          </tr>`;
  });
  tableProduct.innerHTML += content.join("");
}
renderOrderDetail();

function totalPriceCheckOut() {
  let cartCost = localStorage.getItem("totalCost");
  let totalPrice = document.querySelector(".bill-total-temporary span");
  let priceShipping = document.querySelector(".bill-total-shipping span");
  let grandTotal = document.querySelector(".bill-total-rerult span");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (Object.values(cartItems).length) {
    let price = Object.values(cartItems).reduce((total, item) => {
      return cartCost;
    }, 0);
    totalPrice.textContent = `${price}$`;
    if (
      parseFloat(totalPrice.textContent) < 200 &&
      parseFloat(totalPrice.textContent) > 0
    ) {
      priceShipping.textContent = `5$`;
    } else {
      priceShipping.textContent = `0$`;
    }
    grandTotal.textContent =
      parseFloat(totalPrice.textContent) +
      parseFloat(priceShipping.textContent) +
      "$";
  }
}
totalPriceCheckOut();
let btnContinueShopping = document.querySelector(
  "#confirm .continue-shopping "
);
btnContinueShopping.onclick = function () {
  localStorage.clear();
};
