let num1 = document.getElementById("input1");
let num2 = document.getElementById("input2");
let resultcheck = document.getElementById("result");
function random() {
  num1.value = Math.floor(Math.random() * 10);
  num2.value = Math.floor(Math.random() * 10);
}
random();
console.log(num1.value);
let result = num1.value + num2.value*1;
function checkResult() {
  if (resultcheck.value == result) {
    alert("True");
    random();
    resultcheck.value = '';
  } else if (resultcheck != result) {
    alert("False");
    document.getElementById("result").value = '';
  }
}
document.getElementById("check").addEventListener("click", checkResult);
