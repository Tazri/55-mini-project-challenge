// track element 
const nav = document.getElementById('nav');

// add event listener on window
window.addEventListener('scroll',(event)=>{
    if(window.scrollY > nav.offsetHeight + 100){
        nav.classList.add('active-nav')
    }else{
        nav.classList.remove('active-nav');
    }
})