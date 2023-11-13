document.getElementById('sub').addEventListener('click', subNumber);
document.getElementById('add').addEventListener('click', addNumber);

const number = document.getElementById('num');

function subNumber() {
    const num = parseInt(number.textContent);
    const newNum = num - 1;
    number.textContent = newNum;
}

function addNumber() {
    const num = parseInt(number.textContent);
    const newNum = num + 1;
    number.textContent = newNum;
}