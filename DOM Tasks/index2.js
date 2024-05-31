// Create a new button eleemnt, Give it a text 'click me' where make background
// color red and text white.
// Note: Inset button as first element inside body tag

let btn = document.createElement('button');
btn.innerText = 'click me';

btn.style.backgroundColor = 'red';
btn.style.color = 'white';

document.querySelector('body').prepend(btn);

//Create a <p> tag in html, give it a class and some styling.
//Now create new class in CSS and try to append this class to the <p> element
//Did you notice, how you overwrite the class name when you add a new one?
//Solve this problem using classList.
let para = document.querySelector('p');
para.classList.add('newpara');
