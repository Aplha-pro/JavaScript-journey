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