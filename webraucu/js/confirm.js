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

