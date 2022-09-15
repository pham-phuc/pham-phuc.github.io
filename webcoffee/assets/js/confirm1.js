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
    return `<h5>Customer Information</h5>
        <p>Full Name : ${item.name}</p>
        <p>Email : ${item.email}</p>
        <p>Phone : ${item.phone}</p>
        <p>Address : ${item.address}, ${item.district}, ${item.city}</p>
        <p>Note : ${item.note}</p>`;
  });
  confirm.innerHTML = content.join("");
}
renderCustomerInfo();

function renderOrderDetail() {
  let tableProduct = document.querySelector("#confirm .order-detail table");
  let content = cart.map((item) => {
    return `<tr>
            <td>${item.name}</td>
            <td>${parseFloat(item.price ).toFixed(2)}$</td>
            <td>${item.quantity} </td>
            <td>${(parseFloat(item.price * parseFloat(item.quantity)).toFixed(2))}$</td>
          </tr>`;
  });
  tableProduct.innerHTML+=content.join('');
}
renderOrderDetail()

function totalPriceCheckOut() {
    let totalPrice = document.querySelector(
      ".bill-total-temporary span"
    );
    let priceShipping = document.querySelector(
      ".bill-total-shipping span"
    );
    let grandTotal = document.querySelector(
      ".bill-total-rerult span"
    );
    if (cart.length) {
      let price = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      totalPrice.textContent = `${price.toFixed(2)}$`;
      if (
        parseFloat(totalPrice.textContent) < 200 &&
        parseFloat(totalPrice.textContent) > 0
      ) {
        priceShipping.textContent = `5.00$`;
      } else {
        priceShipping.textContent = `0$`;
      }
      grandTotal.textContent =
        (parseFloat(totalPrice.textContent) +
        parseFloat(priceShipping.textContent)).toFixed(2) +
        "$";
    }
  }
  totalPriceCheckOut();
  let btnContinueShopping = document.querySelector('#confirm .continue-shopping ')
  btnContinueShopping.onclick =function(){
    localStorage.clear();
  }