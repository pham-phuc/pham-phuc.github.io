function renderCartMain() {
  let cartContent = document.querySelector("tbody");
  let cartContentHollow = document.querySelector("table");
  let content = cart.map((item) => {
    return `
      <tr class="product-in-cart">
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
              <h4 class="nomargin product-name">${item.name}</h4>
            </div>
          </div>
        </td>
        <td data-th="Price"><span class="price">${item.price}</span>$</td>
        <td class="qly" data-th="Quantity">
        <div class="quantity-product-weight-group">
          <button class="minus-quantity-detail-product">-</button>
          <input
            type="text"
            class="quantity-product-weight"
            value="${item.quantity}"
          />
          <button class="plus-quantity-detail-product">+</button>
        </div>                           
        </td>
        <td data-th="Subtotal" class="text-center"></td>
        <td class="actions" data-th="">
          <button class="btn btn-sm edit">
            <i class="fa fa-edit"></i>
          </button>
          <button class="btn btn-sm remove-product"  >
          <i class="fa-regular fa-trash-can"></i>
          </button>
        </td>
      </tr>`;
  });

  if (cart.length > 0) {
    cartContent.innerHTML = content.join("");
    countItemCart.classList.remove("hide");
  } else {
    countItemCart.classList.add("hide");

    cartContentHollow.innerHTML = `<div class="img-empty-cart" style = "width : 100%; text-align:center ">
    <img style = "width : 50%" src="assets/images/empty-cart.webp" alt="">
    </div>`;
    document.querySelector(
      ".back-to-shop"
    ).innerHTML = `<a href="shop.html"><i class="fa-solid fa-arrow-left-long"></i> Quay lại trang sản
    phẩm
  </a>`;
    // document.querySelector(".total-price").textContent = "0$";

    // let btnCheckOut = document.querySelector(".check-out");
    // btnCheckOut.style.opacity = "0.3";
    // btnCheckOut.addEventListener("click", (e) => {
    //   e.preventDefault();
    // });
  }
}
renderCartMain();

const listQuantityProductWeight = document.querySelectorAll(
  ".quantity-product-weight"
);
const listBtnAdd = document.querySelectorAll(".plus-quantity-detail-product");
const listBtnMinus = document.querySelectorAll(
  ".minus-quantity-detail-product"
);
const listItemInCartMain = document.querySelectorAll(".product-in-cart");
const listRemoveProduct = document.querySelectorAll(".remove-product");

// btn add cart cap nhat cart
listBtnAdd.forEach((item, index) => {
  let cartItem = listItemInCartMain[index];
  
  let quantityProductWeight = cartItem.querySelector(
    ".quantity-product-weight"
  );
  item.addEventListener("click", () => {
    let currentValue = parseFloat(quantityProductWeight.value) + 1;
    quantityProductWeight.value = currentValue;
  });

  item.addEventListener("click", () => {
    let nameProduct = cartItem.querySelector(".product-name").textContent;

    cart.forEach((element) => {
      if (element.name == nameProduct) {
        element.quantity = parseFloat(quantityProductWeight.value);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    totalPriceCart();
  });
});

//btn minus cap nhat cart
listBtnMinus.forEach((item, index) => {
  let cartItem = listItemInCartMain[index];
  let quantityProductWeight = cartItem.querySelector(
    ".quantity-product-weight"
  );
  item.addEventListener("click", () => {
    let currentValue = parseFloat(quantityProductWeight.value) - 1;
   
    if (currentValue <= 1) {
      quantityProductWeight.value = 1;
    } else {
      quantityProductWeight.value = currentValue;
    }
  });

  item.addEventListener("click", () => {
    let nameProduct = cartItem.querySelector(".product-name").textContent;

    cart.forEach((element) => {
      if (element.name == nameProduct) {
        element.quantity = parseFloat(quantityProductWeight.value);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    totalPriceCart();
  });
});

// Thay doi input cap nhap lai Cart
listQuantityProductWeight.forEach((input, index) => {
  let cartItem = listItemInCartMain[index];
  input.addEventListener("keyup", () => {
    let nameProduct = cartItem.querySelector(".product-name").textContent;

    cart.forEach((element) => {
      if (element.name == nameProduct) {
        element.quantity = parseFloat(input.value);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    totalPriceCart();
  });
});
//remove
listRemoveProduct.forEach((btn, index) => {
  let cartItem = listItemInCartMain[index];
  btn.addEventListener("click", () => {
    cartItem.remove();
    let nameItem = cartItem.querySelector(
      ".product-in-cart .product-name"
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
    if (cart.length == 0) {
      renderCartMain();
    }
    totalPriceCart();
  });
});

//total price

function totalPriceCart() {
  let totalPrice = document.querySelector(".total-price");
  if (cart.length) {
    let price = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    totalPrice.textContent = `${price.toFixed(2)}$`;
  }
}
totalPriceCart();
