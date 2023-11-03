document.getElementById('sub').addEventListener('click', subNumber);
document.getElementById('add').addEventListener('click', addNumber);

var number = document.getElementById('num');

function subNumber() {
    var num = parseInt(number.textContent);
    var newNum = num - 1;
    number.textContent = newNum;
}

function addNumber() {
    var num = parseInt(number.textContent);
    var newNum = num + 1;
    number.textContent = newNum;
}