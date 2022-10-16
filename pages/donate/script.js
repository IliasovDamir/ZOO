
// бургер-меню

const burgerBtn = document.querySelector('.header-burger')
const close = document.querySelector('.close-burger')
const burgerMenu = document.querySelector('.burger-menu')
const transparentList = document.querySelector('.transparent-list')
const burgerMenuItems = document.querySelectorAll('.burger-menu li')

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('burger-menu-active');
    transparentList.classList.add('display-block');
})

close.addEventListener('click', closeBurger);
transparentList.addEventListener('click', closeBurger);
for (let i = 0; i < burgerMenuItems.length; i++) {
    burgerMenuItems[i].addEventListener('click', closeBurger)
}

function closeBurger() {
    burgerMenu.classList.remove('burger-menu-active');
    transparentList.classList.remove('display-block');
}


// радиокнопки


const periods = document.querySelectorAll('.real-radio-btn')

periods.forEach(el => {
    el.addEventListener('click', paint)
})

function paint() {
    document.querySelector('.real-radio-btn')
        .parentElement.classList.remove('checkbox-label--color');
    document.querySelector('.real-radio-btn:checked')
        .parentElement.classList.add('checkbox-label--color');
}

// amount checked

const radiobtns = document.querySelectorAll('.real-amount-radio-btn');
const amountInput = document.querySelector('.amount-input');
const amountLabels = document.querySelectorAll('.amount-label');

// function isChecked() {
//     if (window.screen.width <= 999) {
//         for (let i = 0; i < radiobtns.length; i++) {
//             if (radiobtns[i].value === '100') {
//                 radiobtns[i].checked = true;
//                 amountInput.value = radiobtns[i].value;
//                 paintLabel()
//             }
//         }
//     } else if (window.screen.width > 999) {
//         for (let i = 0; i < radiobtns.length; i++) {
//             if (radiobtns[i].value === '1000') {
//                 radiobtns[i].checked = true;
//                 amountInput.value = radiobtns[i].value;
//                 paintLabel()
//             }
//         }
//     }
// }
// isChecked()
// setTimeout(isChecked(), 1000)

function paintLabel() {
    for (let i = 0; i < radiobtns.length; i++) {
        if (radiobtns[i].checked === true) {            
            amountLabels[i].classList.add('orange')
        } else {
            amountLabels[i].classList.remove('orange')
        }
    }
}

radiobtns.forEach(el => {
    el.addEventListener('click', () => {
        for (let i = 0; i < radiobtns.length; i++) {
            if (radiobtns[i].checked === true) {
                let currentAmount = radiobtns[i].value;
                amountInput.value = currentAmount;
                paintLabel()
            }
        }
    })
})

// проверка инпута number...

amountInput.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
    for (let i = 0; i < radiobtns.length; i++) {
        if (this.value === radiobtns[i].value) {
            radiobtns[i].checked = true;
            paintLabel()            
        }
    }
}

// проверка корректности e-mail

const email = document.querySelector('.inputemail');
const submitbtn = document.querySelector('.submitbtn');

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    let emailValue = email.value;

    if (validateEmail(emailValue)) {
        email.classList.remove('invalid-input')
        email.classList.add('valid-input')
        submitbtn.classList.remove('submitbtn-invalid')
        submitbtn.classList.add('submitbtn-valid')
    } else {
        email.classList.remove('valid-input')
        email.classList.add('invalid-input')
        submitbtn.classList.remove('submitbtn-valid')
        submitbtn.classList.add('submitbtn-invalid')
    }
    return false;
}

submitbtn.addEventListener("click", validate);



