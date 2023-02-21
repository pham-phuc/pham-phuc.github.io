const products = [
  {
    id: 1,
    name: "acaiberry grande",
    sale: 20,
    price: 10,
    origin: "England",
    type: "Trái cây",
    weight: 1,
    img: "img/acaiberry grande/1.png",
  },
  {
    id: 2,
    name: "bắp cải",
    sale: 17,
    price: 12,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/bap cai/bap cai trang-502x502.png",
  },
  {
    id: 3,
    name: "bầu sao",
    sale: 20,
    price: 5,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/bau sao/upload_1f43d8c85d4746dca19fdde7ca2371ba_large.png",
  },
  {
    id: 4,
    name: "bí đao xanh",
    sale: 10,
    price: 10,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/bi dao xanh/upload_9fc067dc7f5f4b588c77c35d742ec261_large.png",
  },
  {
    id: 5,
    name: "bí xanh non",
    sale: 17,
    price: 12,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 0.5,
    img: "img/bi xanh non/upload_6081d5ec19714919a95b8133648a60fc_large.png",
  },
  {
    id: 6,
    name: "bưởi da xanh",
    sale: 20,
    price: 15,
    origin: "Việt Nam",
    type: "Trái cây",
    weight: 1,
    img: "img/buoi da xanh/buoi-502x502.png",
  },
  {
    id: 7,
    name: "cải ngọt giống dài",
    sale: 20,
    price: 5,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/cai ngot giong dai/290011364000_b0f4b55dba594dbd9ad4e0024508692c_aead17f5fab64fb4a25f4de858404b2a_master.png",
  },
  {
    id: 8,
    name: "cải thảo",
    sale: 17,
    price: 12,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/cai thao/bap-cai-thao-1.jpg",
  },
  {
    id: 9,
    name: "cam cara úc",
    sale: 10,
    price: 20,
    origin: "Úc",
    type: "Trái cây",
    weight: 1,
    img: "img/cam cara uc/cam-ruot-do-uc-1kg-dac-san-nafarm-502x502.png",
  },
  {
    id: 10,
    name: "cam navel úc",
    sale: 20,
    price: 15,
    origin: "Úc",
    type: "Trái cây",
    weight: 1,
    img: "img/cam navel/Quả-cam-vàng-Navel-Vinfruits-scaled.jpg",
  },
  {
    id: 11,
    name: "chanh leo tím",
    sale: 20,
    price: 20,
    origin: "Việt Nam",
    type: "Trái cây",
    weight: 1,
    img: "img/chanh leo tim/upload_598e8d9373ae4d658b6e93fd03dc787d_large.png",
  },
  {
    id: 12,
    name: "cranberry",
    sale: 20,
    price: 25,
    origin: "Canada",
    type: "Trái cây",
    weight: 1,
    img: "img/cranberry/upload_42adbc426bed4c8f96a2e954f6925637_large.png",
  },
  {
    id: 13,
    name: "damson plums",
    sale: 10,
    price: 20,
    origin: "Mỹ",
    type: "Trái cây",
    weight: 1,
    img: "img/damson plums/upload_7158f37e6dc44409b5088f21da5c4100_large.png",
  },
  {
    id: 14,
    name: "đào tiên úc",
    sale: 17,
    price: 12,
    origin: "úc",
    type: "Trái cây",
    weight: 1,
    img: "img/dao tien uc/upload_29119c10f90342c2b7a018c04455f1f3_large.png",
  },
  {
    id: 15,
    name: "dưa leo",
    sale: 30,
    price: 10,
    origin: "Việt Nam",
    type: "Trái cây",
    weight: 1,
    img: "img/dua leo/acacs__b2c14608960b441a8d22d214f22a1cf8_master.png",
  },
  {
    id: 16,
    name: "dưa lưới vỏ xanh",
    sale: 10,
    price: 20,
    origin: "Việt Nam",
    type: "Trái cây",
    weight: 1,
    img: "img/dua luoi vo xanh/dua luoi xanh qua tron-502x502.png",
  },
  {
    id: 17,
    name: "hành củ",
    sale: 25,
    price: 4,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/hanh cu/upload_46eb12192ba94e91ac524896e0d68bb5_large.png",
  },
  {
    id: 18,
    name: "Hạt macca",
    sale: 20,
    price: 20,
    origin: "Úc",
    type: "Hạt",
    weight: 1,
    img: "img/hat macca/HAT-MACADAMIA-UC-MUA-O-DAU.jpg",
  },
  {
    id: 19,
    name: "Hạt óc chó",
    sale: 10,
    price: 20,
    origin: "Cuba",
    type: "Hạt",
    weight: 1,
    img: "img/hat oc cho/Superfoods-Hartley-Walnuts.jpg",
  },
  {
    id: 20,
    name: "Hạt rẻ",
    sale: 10,
    price: 10,
    origin: "Thái lan",
    type: "Hạt",
    weight: 1,
    img: "img/hat re/kisspng-ice-cream-hazelnut-flavor-praline-hazelnuts-5b21b10ddb9c54.4587866615289346698995-removebg-preview.png",
  },
  {
    id: 21,
    name: "Hạt rẻ cười",
    sale: 10,
    price: 20,
    origin: "Việt Nam",
    type: "Hạt",
    weight: 1,
    img: "img/hat re cuoi/e24b2d4a3ad1f576d4736e76de35eb2d.jpg",
  },
  {
    id: 22,
    name: "khoai môn",
    sale: 10,
    price: 10,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/khoai mon/upload_8840c0bebe414c6ab3b9a7d245e91e1e_large.png",
  },
  {
    id: 23,
    name: "lựu đỏ peru",
    sale: 10,
    price: 20,
    origin: "Peru",
    type: "Trái cây",
    weight: 1,
    img: "img/luu peru/94381856-238914210685758-8739762748004499456-n.webp.png",
  },
  {
    id: 24,
    name: "măng tây",
    sale: 10,
    price: 1,
    origin: "Mỹ",
    type: "Rau xanh",
    weight: 1,
    img: "img/mang tay/1.png",
  },
  {
    id: 25,
    name: "nấm hương",
    sale: 10,
    price: 10,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/nam/upload_e7af60c1ded54622928ec21b9d0fad03_large.png",
  },
  {
    id: 26,
    name: "ớt chuông",
    sale: 20,
    price: 5,
    origin: "Úc",
    type: "Rau xanh",
    weight: 1,
    img: "img/ot chuong/ot-chuong-vang_5da19014c08e42e992ac7e74cd6e6cfc_master.png",
  },
  {
    id: 27,
    name: "ớt sừng",
    sale: 10,
    price: 10,
    origin: "Trung quốc",
    type: "Rau xanh",
    weight: 1,
    img: "img/ot sung/upload_4c8d95ef5ef7499fab59b265179c8641_large.png",
  },
  {
    id: 28,
    name: "phúc bồn tử",
    sale: 20,
    price: 20,
    origin: "Úc",
    type: "Trái cây",
    weight: 1,
    img: "img/phuc bon tu/upload_8cbf1cd18a0b4e3bafd5778b6eaa23cd_large.png",
  },
  {
    id: 29,
    name: "rau càng cua",
    sale: 30,
    price: 10,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/rau cang cua/cc_bbcf7c16d6de4b2791fbd50995897c41_master.png",
  },
  {
    id: 30,
    name: "rau muống",
    sale: 30,
    price: 10,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/rau muong/1.png",
  },
  {
    id: 31,
    name: "su su non",
    sale: 10,
    price: 10,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/su su non/upload_ff8919654f3e4c5a8109f3fe2a98f95d_grande.png",
  },
  {
    id: 32,
    name: "súp lơ",
    sale: 10,
    price: 10,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/sup lo/2644087000000_4d01a1d188bd4069ae4988d787c72bbb.png",
  },
  {
    id: 33,
    name: "Củ tỏi",
    sale: 20,
    price: 5,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/toi/upload_fdd84c27439a406680b755a4051d1093_large.png",
  },
  {
    id: 34,
    name: "xà lách",
    sale: 20,
    price: 5,
    origin: "Việt Nam",
    type: "Rau xanh",
    weight: 1,
    img: "img/xa lach/c1_771e32e8dc414ac6bd0123187e3e4405_master.jpg",
  },
  {
    id: 35,
    name: "xoài cát",
    sale: 10,
    price: 20,
    origin: "Việt Nam",
    type: "Trái cây",
    weight: 1,
    img: "img/xoai cat/upload_6988d367d0254e8e8252636ea14b4c04_large.png",
  },
  {
    id: 36,
    name: "nho mỹ",
    sale: 30,
    price: 30,
    origin: "Mỹ",
    type: "Trái cây",
    weight: 1,
    img: "img/17.jpg",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let btnCart = document.querySelector(".header .nav-cart");
let close = document.querySelector("span.close");
let modalCart = document.querySelector(".modal-cart");
let modalCartContent = document.querySelector(".modal-cart-content");
let countItemCart = document.querySelector(".header .nav-cart span");
// go to top
mybutton = document.getElementById("go-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// nav cart
btnCart.addEventListener("click", () => {
  modalCart.style.display = "block";
  renderCart();
  removeItemCart();
  totalModal();
});

close.addEventListener("click", () => {
  modalCart.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modalCart) {
    modalCart.style.display = "none";
  }
};

function renderCart() {
  if (cart.length > 0) {
    // nếu có sản phẩm thì render ở đây
    let htmls = cart.map((e) => {
      return `<div class="item">
      <div class="item-main">
        <div class="item-img">
          <img
            src="${e.img}"
            alt=""
          />
        </div>
        <div class="item-info">
          <p class="item-info-name">${e.name}</p>
          <p class="item-info-unit-price">Đơn giá: <span>${parseFloat(
            e.price * (1 - e.sale / 100)
          ).toFixed(2)} VNĐ</span></p>
          <p class="item-info-weight">Khối lượng: ${e.weight}Kg</p>
        </div>
      </div>
      <div class="item-remove">
        <i class="fa-solid fa-trash-can"></i>
      </div>
    </div>
      `;
    });

    document.querySelector(".modal-cart .list-items").innerHTML =
      htmls.join("");
    document.querySelector(
      ".modal-cart .gr-button"
    ).innerHTML = `<a href="cart.html" class="hide">
    <button>Xem giỏ hàng</button>
  </a>
  <a href="checkout.html" class="hide">
    <button>Thanh toán</button>
  </a>`;

    countItemCart.classList.remove("hide");
    document.querySelector(".modal-cart .sub-total").classList.remove("hide");
    document.querySelector(".header .nav-cart span").textContent = cart.length;
  } else {
    countItemCart.classList.add("hide");
    document.querySelector(
      ".modal-cart .list-items"
    ).innerHTML = `<span class="close" onclick='modalCart.style.display = "none"'><i class="fa-solid fa-xmark"></i></span>
      <div class="img-empty-cart">
      <img src="img/empty-cart.png" alt="">
      </div>
      `;
    document.querySelector(
      ".modal-cart .gr-button"
    ).innerHTML = `<a href="products.html" >
    <button>Tiếp tục mua hàng</button>
  </a>`;
  document.querySelector(".modal-cart .sub-total").classList.add("hide");
  }

  removeItemCart();
  // renderCart();
  document.querySelector(".header .nav-cart span").textContent = cart.length;
}
renderCart();

//Tinh tong tien
function totalModal() {
  if (cart.length) {
    let total = cart.reduce((total, item) => {
      return total + item.price * (1 - item.sale / 100) * item.weight;
    }, 0);
    document.querySelector(
      ".modal-cart .sub-total span"
    ).innerHTML = `${total.toFixed(2)} VNĐ`;
  }
}

//xoa item
function removeItemCart() {
  let listItemsModal = document.querySelectorAll(".modal-cart .item");
  let btnRemoveItemCart = document.querySelectorAll(".modal-cart .item-remove");

  if (btnRemoveItemCart.length) {
    btnRemoveItemCart.forEach((btn, index) => {
      let item = listItemsModal[index];
      btn.addEventListener("click", () => {
        item.remove();
        let nameItem = item.querySelector(".item .item-info-name").textContent;
        // Lấy index của item
        let indexItem = cart.findIndex((item) => {
          return nameItem == item.name;
        });
        if (indexItem >= 0) {
          cart.splice(indexItem, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
        }

        document.querySelector(".header .nav-cart span").textContent =
          cart.length;
        renderCart();
        totalModal();
      });
    });
  }
}

// check item cart
// check item
function checkItem(objProduct) {
  // Nêu khác tên thì add vào cart
  if (cart.findIndex((arrItem) => arrItem.name === objProduct.name) == -1) {
    cart.push(objProduct);
    console.log(cart.length);
    // span = cai này
    window.localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    // giống tên thì + weight
    cart.forEach((e) => {
      if (e.name == objProduct.name) {
        return (e.weight = e.weight + objProduct.weight);
      }
    });
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }
}