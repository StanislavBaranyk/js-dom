// Завдання 1
let btnName = document.querySelector('#btnName');
let btnEmail = document.querySelector('#btnEmail');

btnName.addEventListener('click', Name);
function Name(x) {
    document.querySelector('#input').placeholder = "Name";
}

btnEmail.addEventListener('click', Email);
    function Email(x) {
        document.querySelector('#input').placeholder = "Email";
    }
    // Завдання 2
let btn = document.querySelector('#btnText');
    let inputText  = document.querySelector('#text');

    btn.addEventListener('click', clickBtn);
    function clickBtn(x) {
        alert("Цей текст в інпуті:  " + inputText.value);
    }

