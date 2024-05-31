let heading = document.getElementById('heading-1');
let classname = document.getElementsByClassName('para-1');

// console.log(heading);
// console.dir(heading);

// console.log(classname);
// console.dir(classname);

// Task 1
let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + ' from Muhammad Ahmed';
console.log(h2); 

//Task 2
let divs = document.querySelectorAll('.box');
console.log(divs);
divs[0].innerText = "Div-1 Updated";
divs[1].innerText = "Div-2 Updated";
divs[2].innerText = "Div-3 Updated";
console.log(divs);

let attr = document.querySelector('p');
console.log(attr.getAttribute('class'));
console.log(attr.setAttribute('class','newPara'));

// Adding element using JS
let newBtn = document.createElement('button');
newBtn.innerText = "click here";
newBtn.classList.add('js-button');


//add after my Div 2
let div2 = document.querySelectorAll('.box');
console.log(div2[1]);

div2[1].after(newBtn)

