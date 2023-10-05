let firstInput = document.getElementById("firstInput");
let result = document.getElementById("result");
let select = document.getElementById("select");
function convert() {
  if (select.value === "Fahrenheit") {
    result.innerHTML = ((firstInput.value - 32) * (5/ 9)).toFixed(2) + "  °C" ;
  } else if (select.value === "celsius"){
    result.innerHTML = ((firstInput.value *(9/5)) + 32).toFixed(2)  + "  °F";
  }
}
