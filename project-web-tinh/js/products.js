// let perPage = 12;
// let currentPage = 1;
// let start = 0;
// let end = perPage;
const btnNext = document.querySelector(".cus-pagination .next");
const btnPrev = document.querySelector(".cus-pagination .prev");
let searchProduct = document.querySelector(`.form-search input[type="search"]`);

// function render product
function renderProduct(arr) {
  const content = arr.map(function (e, index) {
    return `<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div class="product-item">
                    <div class="product-container">
                      <div class="discount">${e.sale}%</div>
                      <div class="product-img">
                        <img
                          src="${e.img}"
                          alt=""
                        />
                      </div>
                      <p class="product-name cus-margin-top-bot-8px">
                        ${e.name}
                      </p>
                      <div class="product-price cus-margin-top-bot-8px">
                        <span class="old-price">${e.price.toFixed(2)} VNĐ</span>
                        <span class="current-price">${parseFloat(
                          e.price * (1 - e.sale / 100)
                        ).toFixed(2)} VNĐ</span>
                      </div>
                      <p class="product-origin cus-margin-top-bot-8px">
                        <span class="bold">Xuất xứ:</span> ${e.origin}
                      </p>
                      <p class="product-type cus-margin-top-bot-8px">
                        <span class="bold"> Loại sản phẩm:</span> <span>${
                          e.type
                        }</span>  
                      </p>
                      <p class="product-weight cus-margin-top-bot-8px">
                        <span class="bold">Khối lượng:</span> ${e.weight} Kg
                      </p>
                    </div>
                    <button class="add-to-cart">
                      Thêm vào giỏ hàng <i class="fa-solid fa-basket-shopping"></i>
                    </button>
                  </div>
                </div>`;
  });
  document.querySelector("#product-category .category-main .row").innerHTML =
    content.join("");
}

renderProduct(products);

// onSearchProduct();
// add to cart
let listItems = document.querySelectorAll(".category-main .col-sm-6");
let listBtnAddToCart = document.querySelectorAll("button.add-to-cart");

listItems.forEach((item) => {
  item.onclick = function () {
    window.location.href = "./detail.html";
  };
});
// function tim kiem
function onSearchProduct() {
  let x = searchProduct.value.toLowerCase();
  console.log(x);
  listItems.forEach((item) => {
    item.classList.add("hide");
    let nameProduct = item
      .querySelector(".product-name")
      .innerText.toLocaleLowerCase();
    if (nameProduct.includes(x)) {
      item.classList.remove("hide");
    }
  });
}

searchProduct.addEventListener("keyup", onSearchProduct);

function filterType(x) {
  listItems.forEach((item) => {
    item.classList.add("hide");
    let type = item.querySelector(".product-type").textContent;
    if (type.includes(x)) {
      item.classList.remove("hide");
    }
  });
}

function showAllItem() {
  listItems.forEach((item) => {
    item.classList.remove("hide");
  });
}

//function loc xuat xu Viet Nam
function filterOrigin1(x) {
  listItems.forEach((item) => {
    item.classList.add("hide");
    let origin = item.querySelector(".product-origin").textContent;
    if (origin.includes(x)) {
      item.classList.remove("hide");
    }
  });
}
//function filter xuat xu ko phai Viet nam
function filterOrigin2(x) {
  listItems.forEach((item) => {
    item.classList.add("hide");
    let origin = item.querySelector(".product-origin").textContent;
    if (!origin.includes(x)) {
      item.classList.remove("hide");
    }
  });
}

//fuction sort gia tu cao xuong thap

function filterPrice1() {
  listItems.forEach((item) => {
    item.classList.add("hide");
    let price = item.querySelector(".current-price").textContent;
    if (parseFloat(price) < 10) {
      item.classList.remove("hide");
    }
  });
}

function filterPrice2() {
  listItems.forEach((item) => {
    item.classList.add("hide");
    let price = item.querySelector(".current-price").textContent;
    if (parseFloat(price) >= 10 && parseFloat(price) < 20) {
      item.classList.remove("hide");
    }
  });
}

function filterPrice3() {
  listItems.forEach((item) => {
    item.classList.add("hide");
    let price = item.querySelector(".current-price").textContent;
    if (parseFloat(price) >= 20) {
      item.classList.remove("hide");
    }
  });
}

//add to cart
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
      main.appendChild(toast);
      setTimeout(() => {
        main.removeChild(toast);
      }, 3000);
    }
  });
});

// pagination
// let listItems = document.querySelectorAll(".category-main .col-sm-6");
