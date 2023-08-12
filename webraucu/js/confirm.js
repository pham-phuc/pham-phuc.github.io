let customerInfo = JSON.parse(localStorage.getItem("customerInfo")) || [];

let ojectConfirm = {
  name: customerInfo[0],
  phone: customerInfo[1],
  email: customerInfo[2],
  address: customerInfo[3],
  district: customerInfo[5],
  city: customerInfo[4],
  note: customerInfo[6],
};
customerInfo.push(ojectConfirm);
customerInfo.splice(0, 7);

function renderCustomerInfo() {
    let confirm = document.querySelector(
      "#confirm .wrap-confirm-right .customer-detail"
    );
    let content = customerInfo.map((item) => {
      return `<h5>Thông tin khách hàng</h5>
          <p>Họ tên: ${item.name}</p>
          <p>Email: ${item.email}</p>
          <p>Điện thoại: ${item.phone}</p>
          <p>Địa chỉ: ${item.address}, ${item.district}, ${item.city}</p>
          <p>Ghi chú: ${item.note}</p>`;
    });
    confirm.innerHTML = content.join("");
  }
  renderCustomerInfo();
  
  function renderOrderDetail() {
    let tableProduct = document.querySelector("#confirm .order-detail table");
    let content = cart.map((item) => {
      return `<tr>
              <td>${item.name}</td>
              <td>${parseFloat(item.price * (1 - item.sale / 100)).toFixed(
                2
              )} VNĐ</td>
              <td>${item.weight} Kg</td>
              <td>${(
                parseFloat(item.price * (1 - item.sale / 100)).toFixed(2) *
                parseFloat(item.weight)
              ).toFixed(2)} VNĐ</td>
            </tr>`;
    });
    tableProduct.innerHTML += content.join("");
  }
  renderOrderDetail();
  
  
  