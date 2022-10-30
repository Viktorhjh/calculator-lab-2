"use strict";
const input = document.getElementById('res');
function addNumber(n) {
    input.value += n;
}
function clearAll() {
    input.value = "";
}
function result() {
    var b = new back.Calculator();
    input.value = b.Calculator(input.value).toString();
}
