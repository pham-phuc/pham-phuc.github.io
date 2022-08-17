let btnPlaceOrder = document.querySelector(".summary .place-order");
console.log(btnPlaceOrder)
let listFormMessage = document.querySelectorAll(
  "#check-out .input-box .form-message"
);
let listInput = document.querySelectorAll("#check-out .input-box input");
let listSelectMessage = document.querySelectorAll("#check-out .select-message");
let listSelect = document.querySelectorAll("#check-out .input-box select");
let note = document.querySelector("#check-out .input-box textarea");

let customerInfo = JSON.parse(localStorage.getItem("customerInfo")) || [];
btnPlaceOrder.addEventListener("click", () => {
  //reset lại arr
  customerInfo.splice(0);

  // lấy giá trị của input
  listInput.forEach((input, index) => {
    let message = listFormMessage[index];
    if (input.value == "") {
      message.style.display = "block";
    } else {
      message.style.display = "none";
      let inputValue = input.value;
      customerInfo.push(inputValue);
      localStorage.setItem("customerInfo", JSON.stringify(customerInfo));
    }
  });

  //lấy giá trị của select
  listSelect.forEach((select, index) => {
    let message = listSelectMessage[index];
    if (select.options.selectedIndex == 0) {
      message.style.display = "block";
    } else {
      message.style.display = "none";
      let selectValue = select.value;
      customerInfo.push(selectValue);
      localStorage.setItem("customerInfo", JSON.stringify(customerInfo));
    }
  });

  customerInfo.push(note.value);
  localStorage.setItem("customerInfo", JSON.stringify(customerInfo));

  if (customerInfo && customerInfo.length > 6) {
    window.location.href = "confirm.html";
  }
});

function renderCheckOut() {
  let cartCost = localStorage.getItem("totalCost");
  let cartCheckOut = document.querySelector("#check-out .list-items-order");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let listProduct =  document.querySelector('.list-products');
  Object.values(cartItems).map((item) => {
    listProduct.innerHTML += `<div class="item-order">
        <div class="wrap-item-order-info">
          <div class="item-order-img">
            <img
              src="${item.img}"
              alt=""
              width="100%"
            />
          </div>
          <div class="item-order-info">
            <div class="item-order-name bold">${item.name}</div>
            <div class="item-order-unit-price">
              <span>Đơn giá: </span><span>${item.price}</span>
            </div>
            <div class="item-order-weight">
              <span>Khối lượng:</span> <span>${item.incart}</span>
            </div>
          </div>
        </div>
        <div class="remove-item-order">
        <i class="fa-solid fa-trash"></i>
        </div>
      </div>`;
  });
  document.getElementById('total-price').innerHTML = cartCost;
  document.getElementById('total-bill').innerHTML = parseInt(cartCost) + 5;
}
renderCheckOut();
