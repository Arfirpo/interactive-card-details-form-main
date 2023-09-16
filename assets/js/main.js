// CARDHOLDER NAME
const cardName = document.querySelector('.details__name');
const inputName = document.querySelector('#cardHolder');
const errorName = document.querySelector('.form__input-cardHolder--error error');

// CARD NUMBERS
const cardNumbers = document.querySelector('.card-front__numbers');
const inputNumbers = document.querySelector('#cardNumbers');
const errorNumbers = document.querySelector('.form__input-cardNumber--error');

//MONTH CARD
const cardMonth = document.querySelector('.expiration-date__month');
const inputMonth = document.querySelector('#expirationMonth');
const errorMonth = document.querySelector('.form__input-mm--error error');

//YEAR CARD
const cardYear = document.querySelector('.expiration-date__year');
const inputYear = document.querySelector('#expirationYear');
const errorYear = document.querySelector('.form__input-yy--error error');

//CVC CARD
const cardCvc = document.querySelector('.card-back__cvc');
const inputCvc = document.querySelector('#cardCvc');
const errorCvc = document.querySelector('.form__input-cvc--error error');

// CONFIRM BUTTON
const confirmButton = document.querySelector('.form__confirm-button'); 



//Ingreso dinamico del nombre//
dinamicIncome(inputName, cardName);



//Ingreso dinamico de numero de tarjeta//
dinamicIncome(inputNumbers, cardNumbers);
inputNumbers.addEventListener('input', event=>{
    let inputValue = event.target.value;
    cardNumbers.innerText = inputNumbers.value;
    let regExp = /[A-z]/g;
    if(regExp.test(inputNumbers.value)){
        showError(inputNumbers.value, errorNumbers, 'Wrong format, numbers only');
    } else{
        inputNumbers.value = inputValue.replace(/\s/g, '').replace(/([(0-9]{4})/g, '$1 ').trim();
        hideError(inputNumbers, errorNumbers);
    }
    if(inputNumbers.value == ''){
        cardNumbers.innerText = '0000 0000 0000 0000';
    }
});

//Ingreso dinamico de mes vencimiento de tarjeta//
dinamicIncome(inputMonth, cardMonth);

//Ingreso dinamico de año vencimiento de tarjeta//
dinamicIncome(inputYear, cardYear);

//Ingreso dinamico de cvc//
dinamicIncome(inputCvc, cardCvc);


//BUTTON CONFIRMATION
confirmButton.addEventListener('click', event=>{
    event.preventDefault();
    console.log(parseInt(inputMonth.value));
    let month = parseInt(inputMonth.value);
    if(month > 0 && month <= 12){
        cardMonth.innerText = inputMonth.value;
    } else{
        showError(inputMonth, errorMonth, 'Invalid Month')
    }
})


//FUNCIONES
function showError(inputDiv, errorDiv, errorMessage){
    errorDiv.innerText = errorMessage;
    inputDiv.style.borderColor = '#FF0000';
}

function hideError(inputDiv, errorDiv){
    errorDiv.innerText = '';
    inputDiv.style.borderColor = `hsl(270, 3%, 87%)`;
}

function dinamicIncome(inputDiv, cardDiv){
    inputDiv.addEventListener('input', ()=>{
        cardDiv.innerText = inputDiv.value;
    });
}

function emptyInput(inputDiv, cardDiv, data){
    inputDiv.addEventListener('input', ()=>{
        if(inputDiv.value == ''){
            cardDiv.innerText = 'JANE APPLESSED';
        } 
    })
}

inputName.addEventListener('input', ()=>{
      
});