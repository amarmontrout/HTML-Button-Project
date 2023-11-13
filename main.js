document.getElementById('sub').addEventListener('click', subNumber);
document.getElementById('add').addEventListener('click', addNumber);
document.getElementById('reset').addEventListener('click', resetNumber);

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

function resetNumber() {
    number.textContent = 0;
}