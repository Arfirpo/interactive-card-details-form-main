//VARIABLES

//CARDHOLDER NAME
let nameCard = document.querySelector('.details__name');
let nameInput = document.querySelector('#cardHolder');
let nameErrorDiv = document.querySelector('.form__input-cardHolder--error');

//CARD NUMBER
let numberCard = document.querySelector('.card-front__numbers');
let numberInput = document.querySelector('#cardNumbers');
let numberErrorDiv = document.querySelector('.form__input-cardNumber--error');

//MONTH CARD
let monthCard = document.querySelector('.expiration-date__month');
let monthInput = document.querySelector('#expirationMonth');
let monthErrorDiv = document.querySelector('.form__input-mm--error');

//YEAR CARD
let yearCard = document.querySelector('.expiration-date__year');
let yearInput = document.querySelector('#expirationYear');
let yearErrorDiv = document.querySelector('.form__input-yy--error');

//CVC CARD
let cvcCard = document.querySelector('.card-back__cvc');
let cvcInput = document.querySelector('#cardCvc');
let cvcErrorDiv = document.querySelector('.form__input-cvc--error');

//FORM SECTION
let formSection = document.querySelector('.form');
//THANKS SECTION
let thaksSection = document.querySelector('.confirmation');
//CONFIRM BUTTON
let confirmButton = document.querySelector('.form__confirm-button');

let validateName = false;
let validateNumber = false;
let validateMonth = false;
let validateYear = false;
let validateCvc = false;

//ingreso dinamico del cardholder
nameInput.addEventListener('input', () =>{
    validateNumbers(nameInput, nameErrorDiv);
    if(nameInput.value == ''){
        nameCard.innerText = 'Jane Appleseed';
    } else{
        nameCard.innerText = nameInput.value;
    }
});

//ingreso dinamico de numeros
numberInput.addEventListener('input', event=>{
    let inputValue = event.target.value;
    if(numberInput.value == ''){
     //mostrando los 0´s por defecto en input vacio
        numberCard.innerText = '0000 0000 0000 0000';
    } else{
    //actualizando graficamente la tarjeta
        numberCard.innerText = numberInput.value;
    }

    //validad si hay una letra
    let regEx = /[A-z]/g;
    if(regEx.test(numberInput.value)){
        //agregando msg de error cuando hay letras
        showError(numberInput, numberErrorDiv, 'Wrong format, numbers only');
    } else {
        numberInput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        //quitando el error cuando no hay letras
        showError(numberInput,numberErrorDiv, '', false);
    }
});

//ingreso dinamico de mes
monthInput.addEventListener('input', ()=>{
    validateLetters(monthInput, monthErrorDiv);
    if(monthInput.value == ''){
        monthCard.innerText = '00'
    } else{
        monthCard.innerText = monthInput.value;
    }
})

//ingreso dinamico de año
yearInput.addEventListener('input', ()=>{
    validateLetters(yearInput, yearErrorDiv);
    if(yearInput.value == ''){
        yearCard.innerText = '00';
    } else{
        yearCard.innerText = yearInput.value;
    }
});

//ingreso dinamico del cvc
cvcInput.addEventListener('input', ()=>{
    validateLetters(cvcInput, cvcErrorDiv);
    if(cvcInput.value == ''){
        cvcCard.innerText = '000';
    } else{
        cvcCard.innerText = cvcInput.value;
    }
});

confirmButton.addEventListener('click', event=>{
    event.preventDefault();
    //validate name
    if(verifyIsFilled(nameInput, nameErrorDiv)){
        validateName = true;
    } else{
        validateName = false;
    };
    //validate number
    if(verifyIsFilled(numberInput, numberErrorDiv)){
        //validate the correct length of the card numbers
        if(numberInput.value.length == 19){
            showError(numberInput, numberErrorDiv, '', false);
            validateNumber = true;
        } else {
            showError(numberInput, numberErrorDiv, 'Wrong length');
            validateNumber = false;
        }
    };
    //validate month
    if(verifyIsFilled(monthInput, monthErrorDiv) == true){
        if(parseInt(monthInput.value) > 0 && parseInt(monthInput.value) <= 12){
            showError(monthInput, monthErrorDiv, '', false);
            validateMonth = true;
        } else{
            showError(monthInput, monthErrorDiv, 'Wrong Month');
            validateMonth = false;
        }
    };
    //validate year
    if(verifyIsFilled(yearInput, yearErrorDiv)){
        if(parseInt(yearInput.value) >= 23 && parseInt(yearInput.value) <= 28){
            showError(yearInput, yearErrorDiv, '', false);
            validateYear = true;
        } else{
            showError(yearInput, yearErrorDiv, 'Wrong year');
            validateYear = false;
        }
    };
    //validate cvc
    if(verifyIsFilled(cvcInput, cvcErrorDiv) == true){
        if(cvcInput.value.length >= 3){
            showError(cvcInput, cvcErrorDiv, '', false);
            validateCvc = true;
        } else{
            showError(cvcInput, cvcErrorDiv, 'Wrong length');
            validateCvc = false;
        }
    };
    if(validateName == true && validateNumber && true && validateMonth == true && validateYear == true && validateCvc == true){
        console.log('todo ok');
        formSection.style.display = 'none';
        thaksSection.style.display = 'block';
    }
});







//FUNCIONES
function showError(divInput, divError, msgError, show = true){
    if(show){
        divError.innerText =  msgError;
        divInput.style.borderColor = '#ff0000';
    } else{
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(270, 3%, 87%)';
    }
};

function verifyIsFilled(divInput, divError){
    if(divInput.value.length > 0){
        showError(divInput, divError, '', false);
        return true;
    } else{
        showError(divInput, divError, "Can't be blanck");
        return false;
    }
};

function validateLetters(divInput, divError){
    let regEx = /[A-z]/g;
    if(regEx.test(divInput.value)){
        showError(divInput, divError, 'Wrong format, numbers only');
    } else {
        showError(divInput, divError, '', false);
    }
};

function validateNumbers(divInput, divError){
    let regExp = /[0-9]/g;
    if(regExp.test(divInput.value)){
        showError(divInput, divError, 'Wrong format, letters only');
    } else {
        showError(divInput, divError, '', false);
    }
};