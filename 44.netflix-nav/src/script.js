// track element
let nav = document.getElementById('nav');
let closeButton = document.querySelector('.close-btn');
let openButton = document.querySelector('.open-btn');


// add event listener on openButton
openButton.addEventListener('click',()=>{
    nav.classList.remove('hide');
})

// add event listener on closeButton
closeButton.addEventListener('click',()=>{
    nav.classList.add('hide');
})
