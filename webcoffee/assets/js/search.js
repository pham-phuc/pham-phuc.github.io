function search() {
  var valueProduct = document.getElementById("search");
  if (valueProduct != null) {
    valueProduct = valueProduct.value;
    var product = document.querySelectorAll(".product-list-shop");
    for (var i = 0; i <= product.length; i++) {
        var nameProduct =product[i].getElementsByTagName('h5')[0].innerText;
        if(nameProduct.indexOf(valueProduct) >=0){
            product[i].style.display = 'block';
            // product[i].style.cssFloat = "left";
        }else{
            product[i].parentElement.style.display = 'none';
        }
    }
  }
}
// function searchFunc() {
//     var search = document.getElementById("search");
//     var product = document.querySelectorAll(".product-list-shop");
//     search.addEventListener("keyup", (e) => {
//       e.preventDefault();
//       const value = search.value.toLowerCase().trim();
//       for (var i = 0; i <= product.length; i++) {
//         if (product[i].classList.contains(value)) {
//           product[i].style.display = "block";
//         } else if ((value = "")) {
//           product[i].style.display = "block";
//         } else {
//           product[i].style.display = "none";
//         }
//       }
//     });
//   }