const message1 = document.querySelector('.error-message')
const message2 = document.querySelector('.error-message2')
const message3 = document.querySelector('.error-message3')
const message4 = document.querySelector('.error-message4')
const message5 = document.querySelector('.error-message5')
const message6 = document.querySelector('.error-message6')

const card_name = 'Jane Appleseed'
document.querySelector('.name').innerText = card_name

const card_number = '0000 0000 0000 0000'
document.querySelector('.atm-number').innerText = card_number

const card_month = '00'
document.querySelector('.month').innerText = card_month

const card_year = '00'
document.querySelector('.year').innerText = card_year

const card_cvv = '000'
document.querySelector('.cvv').innerText = card_cvv

const cardName = document.getElementById('name');
const nameInput = document.getElementById('card_Name');

const cardNumber = document.getElementById('number');
const numberInput = document.getElementById('card_Number');

const cardMonth = document.getElementById('month');
const monthInput = document.getElementById('card_Month');

const cardYear = document.getElementById('year');
const yearInput = document.getElementById('card_Year');

const cardCvv = document.getElementById('cvv');
const cvvInput = document.getElementById('card_Cvv');

const submitBtn = document.getElementById('submit_bnt')

const completed = document.querySelector('.thank');
const Form = document.querySelector('form');

nameInput.addEventListener("keyup", setcardName);
numberInput.addEventListener("keyup", setcardNumber);
yearInput.addEventListener("keyup", setcardYear);
monthInput.addEventListener("keyup", setcardMonth);
cvvInput.addEventListener("keyup", setcardCvv);

nameInput.addEventListener("input", () => {
   nameInput.value = nameInput.value.replace(/[0-9]/g, "");

   // check if the form input is empty
    if(!nameInput.value){
        nameInput.classList.add('error')
        message1.classList.remove('hidden')
    }else{
        nameInput.classList.remove('error')
        message1.classList.add('hidden')
    }
});

nameInput.addEventListener("paste", (e) => {
    const pastText = e.clipboardData.getData('text')
    const filterText = pastText.replace(/[0-9]/g, "");

    setTimeout(() => {
        nameInput.value = filterText;
    }, 0);

    e.preventDefault();
});

// check if the form input contains a letter and not a digit and is empty then it displays the error message automatically
numberInput.addEventListener("input", () => {
    const inputVal = numberInput.value

    if (onlyNumber(inputVal)) {
        numberInput.classList.remove('error')
        message3.classList.add('hidden')
    } else if (!onlyNumber(inputVal)) {
        numberInput.classList.add('error')
        message3.classList.remove('hidden')
    }

    if (!numberInput.value) {
        numberInput.classList.add('error')
        message2.classList.remove('hidden')
        message3.classList.add('hidden')
    } else if (numberInput.value) {
        numberInput.classList.remove('error')
        message2.classList.add('hidden')
    }
});


monthInput.addEventListener("input", () => {
    const maxLength = monthInput.maxLength;
    const inpValue = monthInput.value;

    if (!monthInput.value) {
        monthInput.classList.add('error')
        message4.classList.remove('hidden')
    } else if (monthInput.value) {
        monthInput.classList.remove('error')
        message4.classList.add('hidden')
    }

    if (inpValue.length < 2) {
        const paddedValue = inpValue.concact("0");
        monthInput.value = paddedValue
    } else if (inpValue.length === maxLength && inpValue.charAt(0) === "0") {
        monthInput.value = inpValue.substring(1);
    }
});

yearInput.addEventListener("input", () => {
    const maxLength = yearInput.maxLength;
    const inpValue = yearInput.value;

    if (inpValue.length < maxLength) {
        yearInput.value = inpValue + '0';
    } else if (inpValue.length === maxLength) {
        const newValue = inpValue.replace(/0+$/, "");
        yearInput.value = newValue;

        if (e.inputType === 'deleteContentBackward' && newValue !== '') {
            yearInput.value = '';
        }
    }
});

// cvvInput.addEventListener("input", () => {
//     const CVV = cvvInput.value;
//     const len = CVV.length;

//     if (len < 3) {
//         cvvInput.value = "0" + CVV
//     } else if (len === 3 && inpValue.charAt(0) === "0") {
//         cvvInput.value = inpValue.substring(1);
//     }
// });

submitBtn.addEventListener("click", handleSubmit);

// Get the value from the form input into the card
function setcardNumber(e) {
    var number = format(e.target.value);
    var len = number.length
    if(len == 0){
        cardNumber.innerText = card_number;
    }else{
        cardNumber.innerText = number;
    }
}

// Get the value from the form input into the card
function setcardName(e) {
    var name = e.target.value;
    var len = name.length;
    if(len == 0){
        cardName.innerText = card_name;
    }else{
        cardName.innerText = name;
    }
}

// Get the value from the form input into the card
function setcardMonth(e) {
    var month = e.target.value;
    var len = month.length;
    if(len == 0){
        cardMonth.innerText = card_month;
    }else{
        cardMonth.innerText = month;
    }
}

// Get the value from the form input into the card
function setcardYear(e) {
    var year = e.target.value;
    var len = year.length;
    if(len == 0){
        cardYear.innerText = card_year;
    }else{
        cardYear.innerText = year;
    }
}

// Get the value from the form input into the card
function setcardCvv(e) {
    var cvv = e.target.value;
    var len = cvv.length;
    if(len == 0){
        cardCvv.innerText = card_cvv;
    }else{
        cardCvv.innerText = cvv;
    }
}

// For spacing the card number in group of four
function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}

// A simple rejex for checking an input if it contains a digit
function onlyNumber(inp){
    let num = /^[0-9]+$/;
    return num.test(inp)
}


function handleSubmit(e) {
    e.preventDefault();

     // check if the form input is empty
    if(!nameInput.value){
        nameInput.classList.add('error')
    }else{
        nameInput.classList.remove('error')
    }

    // check if the form input is empty
    if(!numberInput.value){
        numberInput.classList.add('error')
    }else{
        numberInput.classList.remove('error')
    }

    // check if the form input is empty
    if(!yearInput.value){
        yearInput.classList.add('error')
    }else{
        yearInput.classList.remove('error')
    }

    // check if the form input is empty
    if(!monthInput.value){
        monthInput.classList.add('error')
    }else{
        monthInput.classList.remove('error')
    }

    // check if the form input is empty
    if(!cvvInput.value){
        cvvInput.classList.add('error')
    }else{
        cvvInput.classList.remove('error')
    }

    // check if the form input is complete befor submitting
    if(nameInput.value && numberInput.value && yearInput.value && monthInput.value && cvvInput.value){
        completed.classList.remove('hidden')
        Form.classList.add('hidden')
    }
}

// check if the form input has reach is maxlength before going to the next input
function nextInput(currentInput, nextInput){
    if(currentInput.value.length >= currentInput.maxLength){
        document.getElementById(nextInput).focus()
    }
}