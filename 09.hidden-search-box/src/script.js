// track element
const searchBox = document.querySelector('.search-box');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');


// add event listener
btn.addEventListener('click',event=>{
    searchBox.classList.toggle('active');
    input.focus();
})