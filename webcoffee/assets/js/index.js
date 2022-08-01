const add = document.querySelectorAll(".addtocard");
add.forEach(function (a, index) {
  a.addEventListener("click", function (event) {
    var aItem = event.target;
    var product = aItem.parentElement;
    var productImg = product.querySelector("img").src;
    var productName = product.querySelector(".name-product").innerText;
    var productPrice = product.querySelector(".price-product span").innerText;
    addCart(productImg, productName, productPrice);
  });
});
function addCart(productImg, productName, productPrice) {
  var addTr = document.createElement("tr");
  var trContent = `<tr>
    <td data-th="Product">
      <div class="row">
        <div class="col-sm-3 hidden-xs">
          <img
            src="${productImg}"
            alt="Sản phẩm 1"
            class="img-responsive"
            width="100%"
          />
        </div>
        <div class="col-sm-9">
          <h4 class="nomargin">${productName}</h4>                        
        </div>
      </div>
    </td>
    <td data-th="Price"><span class="price">${productPrice}</span> $</td>
    <td data-th="Quantity">
      <input
        class="form-control text-center"
        value="1"
        min="1"
        type="number"
      />
    </td>
    <td data-th="Subtotal" class="text-center"> <span>${productPrice}</span> $</td>
    <td class="actions" data-th="">
      <button class="btn btn-sm edit">
        <i class="fa fa-edit"></i>
      </button>
      <button class="btn btn-sm remove">
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>
  </tr>`;
  addTr.innerHTML=trContent
  var cardTable = document.querySelector("tbody");
  cardTable.append(addTr);
  cardTotal()
}
function cardTotal(){
    var cardItem =document.querySelectorAll("tbody tr")
    var totalPrice=0
    for(var i=0;i<cardItem.length;i++){
        var inputvalue = cardItem[i].querySelector("input").value
        var priceProduct = cardItem[i].querySelector("span").innerHTML
        totalPriceProduct= (inputvalue*priceProduct )
        totalPrice = totalPrice + totalPriceProduct
    }
    var cardTotal = document.querySelector(".total-price span")
    cardTotal.innerHTML = totalPrice
}
