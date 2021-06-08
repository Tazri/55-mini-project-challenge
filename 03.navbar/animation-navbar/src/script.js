// track element 
const btn = document.querySelector('.btn');

// add event listener
btn.addEventListener('click',event=>{
    btn.parentNode.classList.toggle('active');
})