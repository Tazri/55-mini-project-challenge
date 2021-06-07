// track the element
const btns = document.querySelectorAll('.btn');


// add eventlistener in btns
btns.forEach(btn=>{
    btn.addEventListener('click',event=>{
        btn.parentNode.classList.toggle('active');
    })
})