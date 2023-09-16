// CARDHOLDER NAME
const cardName = document.querySelector('.details__name');
const inputName = document.querySelector('#cardHolder');
const errorName = document.querySelector('.form__input-cardHolder--error error');

// CARD NUMBERS
const cardNumbers = document.querySelector('.card-front__numbers');
const inputNumbers = document.querySelector('#cardNumbers');
const errorNumbers = document.querySelector('.form__input-cardNumber--error');

//Ingreso dinamico del nombre//
inputName.addEventListener('input', ()=>{
    cardName.innerText = inputName.value;
    if(inputName.value == ''){
        cardName.innerText = 'JANE APPLESSED';
    }
});

//Ingreso dinamico de numero de tarjeta//
inputNumbers.addEventListener('input', ()=>{
    cardNumbers.innerText = inputNumbers.value;
    let regExp = /[A-z]/g;
    if(regExp.test(inputNumbers.value)){
        errorNumbers.innerText = 'Wrong Format, numbers only';
    }
    if(inputNumbers.value == ''){
        cardNumbers.innerText = '0000 0000 0000 0000';
    }
});
