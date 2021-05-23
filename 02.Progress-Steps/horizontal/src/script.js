// track element
const progress = document.getElementById('progress');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const circles = document.querySelectorAll('.circle');

let active = 1;


// next functionality
nextBtn.addEventListener('click',event=>{
    active < circles.length && active++;

    if(active == circles.length){
        nextBtn.classList.add('disable');
    }

    prevBtn.classList.remove('disable');

    update();
})

// prev functionality
prevBtn.addEventListener('click',event=>{
    active > 1 && active--;

    if(active == 1){
        prevBtn.classList.add('disable');
    }

    nextBtn.classList.remove('disable');

    update();
})

// update function
function update(){
    circles.forEach((circle,index)=>{
        if(index<active){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })


    progress.style.width = (active-1) /(circles.length -1) * 98 + '%';
}