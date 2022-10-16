// бургер-меню

const burgerBtn = document.querySelector('.header-burger'),
    close = document.querySelector('.close-burger'),
    burgerMenu = document.querySelector('.burger-menu'),
    transparentList = document.querySelector('.transparent-list'),
    burgerMenuItems = document.querySelectorAll('.burger-menu li')

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

// всплывающие надписи на карточках животных

const petsitems = document.querySelectorAll('.pets-item'),
    petsbtn = document.querySelectorAll('.pets-btn')

for (let i = 0; i < petsitems.length; i++) {
    petsitems[i].addEventListener('mouseover', () => {
        petsbtn[i].classList.toggle('pets-btn-hover')
    })
    petsitems[i].addEventListener('mouseout', () => {
        petsbtn[i].classList.remove('pets-btn-hover')
    })
}

// карточки животных

let petsCards, petsTitle, petsNative, petsType, petsWrapperWidth, petsWidth, marginLeft;
const swipeRight = document.querySelector('.arrow-right-button'),
    swipeLeft = document.querySelector('.arrow-left-button'),
    petsWrapper = document.querySelector('.pets-cards-wrapper'),
    petsSlider = document.querySelector('.pets');
import petsList from "../../assets/images/pets/pets.js";
let petsNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

shuffle(petsNumArr);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function fillPetsCards() {
    petsCards = document.querySelectorAll('.pets-item');
    petsTitle = document.querySelectorAll('.pets-btn h3');
    petsNative = document.querySelectorAll('.pets-btn p');
    petsType = document.querySelectorAll('.pets-type');
    console.log(petsNumArr)
    for (let i = 0; i < petsCards.length; i++) {
        petsCards[i].style.backgroundImage = `url('${petsList[petsNumArr[i] - 1].src}')`;
        petsTitle[i].innerHTML = petsList[petsNumArr[i] - 1].title;
        petsNative[i].innerHTML = petsList[petsNumArr[i] - 1].native;
        petsType[i].style.backgroundImage = `url('${petsList[petsNumArr[i] - 1].type}')`;
    }
}
fillPetsCards()

let petItemWidth = document.querySelector('.pets-item').offsetWidth;

// window.addEventListener('resize', event => {
//     if (window.screen.width === 975) {
//         console.log('975');
//         location.reload()
//     }
//     if (window.screen.width === 1280) {
//         console.log('1281');
//         location.reload()
//     }
//     petItemWidth = document.querySelector('.pets-item').offsetWidth;
//     setSizes();
// }, false);

window.onresize = function (event) {    
    if (document.documentElement.clientWidth > 1279 && document.documentElement.clientWidth < 1281) {
        console.log('1280');
        location.reload();
    } else if (document.documentElement.clientWidth > 974 && document.documentElement.clientWidth < 976) {
        console.log('975');
        location.reload();
    }
    petItemWidth = document.querySelector('.pets-item').offsetWidth;
    setSizes();
};

function setSizes() {
    if (window.screen.width >= 999) {
        petsWrapperWidth = petItemWidth * 3 + 30 * 2 + 30 / 2;
        marginLeft = (-1) * (petItemWidth * 3 + 30 * 2 + 30);
    } else if (window.screen.width < 999 && window.screen.width >= 640) {
        petsWrapperWidth = petItemWidth * 2 + 30 * 1 + 30 / 2;
        marginLeft = (-1) * (petItemWidth * 4 + 30 * 2 + 30);
    } else if (window.screen.width < 640) {
        petsWrapperWidth = petItemWidth * 1;
        marginLeft = 0;
    }

    petsWidth = petItemWidth * 9 + 30 * 8 + 30 / 2;
    petsWrapper.style.width = petsWrapperWidth + 'px';
    petsSlider.style.width = petsWidth + 'px';
    petsSlider.style.marginLeft = marginLeft + 'px';

    // console.log('petsCards.length', petsCards.length);
    // console.log('petsWrapperWidth', petsWrapperWidth);
    // console.log('petsWidth', petsWidth);
    // console.log('marginLeft', marginLeft);
}
setSizes()

swipeRight.addEventListener('click', () => {
    // for (let i = 0; i < 6; i++) {
    //     createNewPet()
    //     petsSlider.append(newPets);
    // }
    // for (let i = 0; i < 6; i++) {
    //     petsCards[i].remove();
    // }
    // console.log("petsSlider длина", petsCards.length);
    // console.log("petsWrapperWidth", petsWrapperWidth);
    console.log("marginLeft было", marginLeft);
    if (marginLeft < 0) {
        shuffle(petsNumArr);
        fillPetsCards();
        setTimeout(swipetoright(), 3000);
    } else swipetoleft()
    console.log("marginLeft стало", marginLeft);
})

swipeLeft.addEventListener('click', () => {
    console.log("marginLeft было", marginLeft);
    if (marginLeft > -1884) {
        shuffle(petsNumArr);
        fillPetsCards();
        setTimeout(swipetoleft(), 3000);
    } else swipetoright()

    console.log("marginLeft стало", marginLeft);

    // petsSlider.classList.add('swiped')
    // for (let i = 0; i < 6; i++) {
    //     createNewPet()
    //     fillPetsCards();
    //     petsSlider.append(newPets);
    // }
    //     petsCards[0].remove()
    //     petsCards[1].remove()
    //     petsCards[2].remove()
    //    petsCards[12].remove()
    //     petsCards[13].remove()
    //     petsCards[14].remove()
    // shuffle(petsNumArr);
    // fillPetsCards();
    // console.log("petsSlider длина 2", petsCards.length);
    // console.log("petsWrapperWidth", petsWrapperWidth);
    // console.log("marginLeft было", marginLeft);
    // console.log("marginLeft стало", marginLeft);
})

function swipetoright() {
    petsSlider.style.marginLeft = marginLeft + petsWrapperWidth + 15 + 'px';
    marginLeft = marginLeft + petsWrapperWidth + 15;
}

function swipetoleft() {
    petsSlider.style.marginLeft = marginLeft - petsWrapperWidth - 15 + 'px';
    marginLeft = marginLeft - petsWrapperWidth - 15;
}

let newPets;

function createNewPet() {
    newPets = document.createElement('div');
    newPets.className = 'pets-item';
    newPets.innerHTML = `<button class="pets-btn">
        < div class="pets-btn-desc" >
        <h3></h3>
        <p></p>    
        <div class="pets-type"></div>                        
        </button > `;
    return newPets;
}

// отзывы

const testimonialItems = document.querySelectorAll('.testimonial-item'),
    avatar = document.querySelectorAll('.avatar'),
    username = document.querySelectorAll('.username h4'),
    usercity = document.querySelectorAll('.username p'),
    userreview = document.querySelectorAll('.user-text p'),
    reviewRange = document.querySelector('.testimotionals-range'),
    testimonials = document.querySelector('.testimonials'),
    reviewWidth = document.querySelector('.testimonial-item').offsetWidth,

    fullreview = document.querySelector('.fullreview'),
    closereview = document.querySelector('.close-review'),
    fullreviewAvatar = document.querySelector('.fullreview-avatar'),
    fullreviewUsername = document.querySelector('.fullreview-user h4'),
    fullreviewUsercity = document.querySelector('.fullreview-user p'),
    fullreviewUserreview = document.querySelector('.fullreview-user-text p');

import reviewsList from "../../assets/usersreviews/reviews.js";

for (let i = 0; i < testimonialItems.length; i++) {
    avatar[i].style.backgroundImage = `url('${reviewsList[i].avatar}')`;
    username[i].innerHTML = `${reviewsList[i].username}`;
    usercity[i].innerHTML = `${reviewsList[i].usercity} &#149; ${reviewsList[i].date}`;
    userreview[i].innerHTML = `${reviewsList[i].userreview}`;
}

reviewRange.addEventListener('input', () => {
    let newValue = reviewRange.value;
    // console.log("newValue", newValue);
    if (window.screen.width <= 1280) {
        reviewRange.setAttribute('max', 8);
    }
    testimonials.style.marginLeft = newValue * (-1) * (reviewWidth + 16) + 'px';
})


for (let i = 0; i < testimonialItems.length; i++) {
    if (window.screen.width <= 975) {
        testimonialItems[i].addEventListener('click', () => showReview(i))
    }
}

function showReview(i) {
    transparentList.classList.add('display-block');
    fullreview.classList.remove('display-none');
    fullreviewAvatar.style.backgroundImage = `url('${reviewsList[i].avatar}')`;
    fullreviewUsername.innerHTML = `${reviewsList[i].username}`;
    fullreviewUsercity.innerHTML = `${reviewsList[i].usercity} &#149; ${reviewsList[i].date}`;
    fullreviewUserreview.innerHTML = `${reviewsList[i].userreview}`;
    disableScrolling()
    // document.querySelector('body').classList.add('active-full-review')
}

closereview.addEventListener('click', closeFullReview);
transparentList.addEventListener('click', closeFullReview);
fullreview.addEventListener('click', closeFullReview);

function closeFullReview() {
    transparentList.classList.remove('display-block');
    fullreview.classList.add('display-none');
    enableScrolling()
    // document.querySelector('body').classList.remove('active-full-review')

}

function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
}

function enableScrolling() {
    window.onscroll = function () { };
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



