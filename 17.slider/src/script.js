// track element
const slides = document.querySelectorAll('.slide');
const body = document.body;
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');

// variable
let active = 0;

// call function
updateSlide();

// right btn event listener
rightBtn.addEventListener('click',event=>{
    active++;

    if(active > slides.length - 1){
        active = 0;
    }

    updateSlide();
})

// left btn event listener
leftBtn.addEventListener('click',event=>{
    active--

    if( active < 0){
        active = slides.length -1;
    }

    updateSlide();
})

// updateSlide function
function updateSlide(){
    body.style.backgroundImage = slides[active].style.backgroundImage;

    slides.forEach(slide=>{
        slide.classList.remove('active');
    })

    slides[active].classList.add('active');
}

// setinterval
setInterval(()=>{
    active++;
    if(active > slides.length - 1){
        active = 0;
    }

    updateSlide();
},7000);