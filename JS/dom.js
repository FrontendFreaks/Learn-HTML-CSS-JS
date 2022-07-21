// // method to access html elements inside javascript
// const para = document.getElementById('para');
// const heading = document.getElementsByClassName('heading1');
// const allPara = document.getElementsByTagName('p');
// const cardHeading = document.querySelector('.card .heading1');
// const cardsHeading = document.querySelectorAll('.card .heading1');
// const card = document.getElementsByClassName('card');
// // for(let i=0; i<card.length; i++){
// //     console.log(card[i].getElementsByClassName('heading1'));
// // }

// // console.log(cardHeading);
// // console.log(cardsHeading)
// // console.log(allPara)
// // console.log(heading[0])
// // console.log(para);

// // properties
// // para.innerHTML = "this is my first para in js"
// para.innerText = "this is my first para in js"

// // task 1: make show and hide card program
// // const button = document.getElementById('showHideButton');
// // const container = document.getElementsByClassName('container')[0];

// // function showHideCard(){
// //     if(container.style.display == 'block'){
// //         container.style.display = 'none';
// //         button.innerText = 'Show Card';
// //         button.style.backgroundColor = 'green';
// //     }
// //     else{
// //         container.style.display = 'block';
// //         button.innerText = 'Hide Card';
// //         button.style.backgroundColor = 'red';
// //     }
// // }
// // button.addEventListener('click', () => showHideCard())


// task 2: create a counter program

const spanNumber = document.getElementsByTagName('span')[0];
const increamentButton = document.getElementById('increament');
const setZero = document.getElementById('setZero');
const decreamentButton = document.getElementById('decreament');
let num = 0;

increamentButton.addEventListener('click', () => {
    num++;
    spanNumber.innerText = num;
})

decreamentButton.addEventListener('click', () => {
    num--;
    spanNumber.innerText = num;
})

setZero.addEventListener('click', () => {
    num = 0;
    spanNumber.innerText = num;
})


