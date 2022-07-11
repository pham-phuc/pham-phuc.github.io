for (let i = 0; i < $(".row_img_small").length; i++) {
    $($(".row_img_small")[i]).click(function () {
      let src = $(this).attr("src");
      $("#preview-product").attr("src", src);
    });
  }

  let cartCount=$('#qty-way-kambas');
  let add=$('#add');
  let minus=$('#minus');
  let currentPrice=$("#current-price").text();
  add.on("click", function add() {
    let cart = JSON.parse(window.localStorage.getItem("cartItem")) || [];
    let currentCount = parseInt(cartCount.text()) + 1;
    cartCount.text(currentCount);
    $("#cartItem").text(currentCount);
    cart[0].qty = currentCount;
    window.localStorage.setItem("cartItem", JSON.stringify(cart));
    total();
  });
  
  minus.on("click", function minus() {
    let cart = JSON.parse(window.localStorage.getItem("cartItem")) || [];
    let currentCount = parseInt(cartCount.text()) - 1;
    if (currentCount > 0) {
      cartCount.text(currentCount);
    }
    $("#cartItem").text(currentCount);
    cart[0].qty = currentCount;
    window.localStorage.setItem("cartItem", JSON.stringify(cart));
    total();
  });
  function total() {
    let x =
      parseInt(currentPrice.replace("Rp ", "").replaceAll(".", "")) *
      parseInt(cartCount.text());
    $("#total-cart").text("RP " + x);
  }
  total();

  function addToCart() {

    let currentProduct = {
      id: 2,
      name: "product 2",
      prices: 200000,
    };
    let numOfItem = parseInt($("#result").val());
    let countCartItem = parseInt($("#cartItem").text());

    if (cart.findIndex((product) => product.id == currentProduct.id) == -1) // Duyet mảng 
    // Loop cart kiểm tra xem có id nào trung với id của product moi thêm vào k 
    {
      // Nếu k có thì add to cart
      console.log("add item to cart");
      currentProduct.qty = numOfItem; // Thêm vào oject sản phẩm
      cart.push(currentProduct); // Thêm vào cart
      window.localStorage.setItem("cartItem", JSON.stringify(cart)); //Luu vao LS
    } else {
      console.log("exist item in cart");
      //update qty cart
      let newCart = cart.map((o) => {
        if (o.id == currentProduct.id) {
          o.qty += numOfItem;
        }
      });
      window.localStorage.setItem("cartItem", JSON.stringify(cart)); //Luu vao LS
    }
    console.log("cart", cart);
    $("#cartItem").text(cart[0].qty);
    $("#cart-count").text(cart[0].qty);
  }
  $("#addToCart").click(addToCart);

  window.onload = addToCart();


  $('#showCart').click(function(){

    // lấy thông tin trong giỏ hàng
    var strCart = window.localStorage.getItem('cartItem');
    var cart = strCart ? JSON.parse(strCart) : [];

    if(cart.length > 0){
      for(let i = 0; i < cart.length; i++){
        let item = cart[i];
        let htmlItem = `<div class="row ">
                <div class="col-xl-8">
                  <div class="row w-100 ">
                    <div class="col-xl-4  padding0 bg-colorf1"><img src="img/image 41.png" alt="" class="max-w100 block m-auto p-3"></div>
                    <div class="col-xl-8 h-100">
                      <p class="font-size-15rem ">Way Kambas Mini Ebony</p>
                      <p id="sale-off-price" class="sale-off-price">Rp 1.280.000</p>
                      <p id="current-price" class="current-price">Rp 1.024.000</p>
                      <p>Custom Engrave</p>
                      <p>“Happy | Birthday | from”</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4  text-xl-end space-between-col">
                  <p class="cus-select-packaging">Select Packaging</p>
                  <select name="cars" id="watches" form="watchform">
                    <option value="volvo">Wooden Packaging (Rp 50.000)</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  <div class="mt-xl-4 mt-4 padding-child-03rem">
                    <button id="cart-add">+</button>
                    <span id="cart-count">0</span>
                    <button id="cart-minus">-</button>
                    <span id="total-cart" class="current-price">RP 1024000</span>
                    <i class="fa-solid fa-trash-can" style="color: #d84727; padding:3px; border:1px solid"></i>
                  </div>
                </div>
              </div>`;
        $('#cartContent').append(htmlItem);
      }


    } else {
       $('#cartContent').append(`<p>không có sản phẩm trong giỏ hàng </p>`);
    }
    

    // hiển thị giỏ hàng
    $("#cartModal").modal("show");
  });

