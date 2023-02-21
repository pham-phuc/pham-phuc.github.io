function renderCheckOut() {
  let cartCheckOut = document.querySelector("#check-out .list-items-order");
  let content = cart.map((item) => {
    return `<div class="item-order">
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
              <span>Đơn giá: </span><span>${parseFloat(
                item.price * (1 - item.sale / 100)
              ).toFixed(2)} VNĐ</span>
            </div>
            <div class="item-order-weight">
              <span>Khối lượng:</span> <span>${item.weight}kg</span>
            </div>
          </div>
        </div>
        <div class="remove-item-order">
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>`;
  });
  if (cart.length) {
    cartCheckOut.innerHTML += content.join("");
    countItemCart.classList.remove("hide");
  } else {
    countItemCart.classList.add("hide");
    cartCheckOut.innerHTML += `<div class="img-empty-cart">
    <img src="img/empty-cart.png" alt="" />
  </div>`;
    document.querySelector(
      "#check-out .total-price span:last-child"
    ).textContent = "0 VNĐ";
    document.querySelector(
      "#check-out .shipping-cost span:last-child"
    ).textContent = "0 VNĐ";

    document.querySelector("#check-out .total span:last-child").textContent =
      "0$";
    let btn = document.querySelector("#check-out .place-order");
    btn.textContent = "Quay lại trang sản phẩm";
    btn.addEventListener("click", (e) => {
      window.location.href = "products.html";
    });
  }
}
renderCheckOut();

let listItemCheckOut = document.querySelectorAll("#check-out .item-order");
let listBtnRemoveCheckOut = document.querySelectorAll(
  "#check-out .remove-item-order"
);
listBtnRemoveCheckOut.forEach((btn, index) => {
  let item = listItemCheckOut[index];
  btn.addEventListener("click", () => {
    item.remove();
    let nameItem = item.querySelector(
      ".item-order .item-order-name "
    ).textContent;
    console.log(nameItem);
    // Lấy index của item
    let indexItem = cart.findIndex((item) => {
      return nameItem == item.name;
    });
    if (indexItem >= 0) {
      cart.splice(indexItem, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    document.querySelector(".header .nav-cart span").textContent = cart.length;
    // renderCheckOut();
    // renderCheckOut();
    if (cart.length == 0) {
      renderCheckOut();
    }
    totalPriceCheckOut();
    // renderCheckOut();
  });
});

function totalPriceCheckOut() {
  let totalPrice = document.querySelector(
    "#check-out .wrap-content-summary .total-price span:last-child"
  );
  let priceShipping = document.querySelector(
    "#check-out .wrap-content-summary .shipping-cost span:last-child"
  );
  let grandTotal = document.querySelector(
    "#check-out .wrap-content-summary .total span:last-child"
  );
  if (cart.length) {
    let price = cart.reduce((total, item) => {
      return total + item.price * (1 - item.sale / 100) * item.weight;
    }, 0);
    totalPrice.textContent = `${price.toFixed(2)} VNĐ`;
    if (
      parseFloat(totalPrice.textContent) < 200 &&
      parseFloat(totalPrice.textContent) > 0
    ) {
      priceShipping.textContent = `5.00 VNĐ`;
    } else {
      priceShipping.textContent = `0 VNĐ`;
    }
    grandTotal.textContent =
      (
        parseFloat(totalPrice.textContent) +
        parseFloat(priceShipping.textContent)
      ).toFixed(2) + " VNĐ";
  }
}
totalPriceCheckOut();

let btnPlaceOrder = document.querySelector("#check-out .summary .place-order");
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
