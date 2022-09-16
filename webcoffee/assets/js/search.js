// function search() {
//   var valueProduct = document.getElementById("search");
//   if (valueProduct != null) {
//     valueProduct = valueProduct.value;
//     var product = document.querySelectorAll(".product-list-shop");
//     for (var i = 0; i <= product.length; i++) {
//         var nameProduct =product[i].getElementsByTagName('h5')[0].innerText;
//         if(nameProduct.indexOf(valueProduct) >=0){
//             product[i].style.display = 'block';           
//         }else{
//             product[i].parentElement.style.display = 'none';

//         }
//     }
//   }
// }
let searchProduct = document.getElementById("search");
function onSearchProduct() {
  let x = searchProduct.value.toLowerCase();
  listItems.forEach((item) => {
    item.classList.add("hide");
    let nameProduct = item
      .querySelector(".name-product")
      .innerText.toLocaleLowerCase();
    if (nameProduct.includes(x)) {
      item.classList.remove("hide");
    }
  });
}
searchProduct.addEventListener("keyup", onSearchProduct);