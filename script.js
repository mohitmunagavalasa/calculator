let result = document.getElementById("result");
function appendToDisplay(value) {
 result.value += value;
}
function clearDisplay() {
 result.value = "";
}
function calculate() {
 try {
   result.value = eval(result.value);
 } catch (error) {
   result.value = "Error";
 }
}