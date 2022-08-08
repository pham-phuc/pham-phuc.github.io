const btnCart = document.getElementsByClassName("addtocard");
const products = [];
for (var i = 0; i < btnCart.length; i++) {
  let addCart = btnCart[i];
  addCart.addEventListener("click", () => {
    let product = {
      image: event.target.parentElement.children[0].src,
      name: event.target.parentElement.children[1].children[0].textContent,
      price: event.target.parentElement.children[2].children[0].textContent,
      totalprice: parseInt(
        event.target.parentElement.children[2].children[0].textContent
      ),
      quantity: 1,
    };
    addItemToLocal(product);
  });
}
function addItemToLocal(product) {
  let cartItem = JSON.parse(localStorage.getItem("prdInCart"));
  if (cartItem === null) {
    products.push(product);
    localStorage.setItem("prdInCart", JSON.stringify(products));
    console.log(cartItem);
  } else {
    cartItem.forEach((item) => {
      if (product.name == item.name) {
        product.quantity = item.quantity += 1;
        product.totalprice = item.totalprice += product.totalprice;
      } else {
        products.push(item);
      }
    });
    products.push(product);
  }
  localStorage.setItem("prdInCart", JSON.stringify(products));
  window.location.reload();
}
function dispCartItem() {
  let html = "";
  let cartItem = JSON.parse(localStorage.getItem("prdInCart"));
  cartItem.forEach((item) => {
    html += `<tr>
        <td data-th="Product">
          <div class="row">
            <div class="col-sm-3 hidden-xs">
              <img
                src="${item.image}"
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
          <input
            class="form-control text-center"
            value="${item.quantity}"
            min="1"
            type="number"
          />
        </td>
        <td data-th="Subtotal" class="text-center"> <span>${item.totalprice}</span>.00 $</td>
        <td class="actions" data-th="">
          <button class="btn btn-sm edit">
            <i class="fa fa-edit"></i>
          </button>
          <button class="btn btn-sm remove">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>`;
  });
  document.querySelector("tbody").innerHTML = html;
}
dispCartItem();


