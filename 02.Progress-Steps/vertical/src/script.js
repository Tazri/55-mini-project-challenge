// track element
const progress = document.getElementById('progress');
const upBtn = document.getElementById('up');
const downBtn = document.getElementById('down');
const circles = document.querySelectorAll('.circle');

// variable 
const status = ['0','0.33','0.66','0.99'];
let active = 1;
let circleIndex = [3,2,1,0];

// up functionality
upBtn.addEventListener('click',event=>{
    active < 4 && active++;
    
    if(active == 4){
        upBtn.classList.add('disable');
    }

    downBtn.classList.remove('disable');

    update()
})


// down functionality
downBtn.addEventListener('click',event=>{
    active > 1 && active--
    
    if(active == 1){
        downBtn.classList.add('disable');
    }

    upBtn.classList.remove('disable');

    update();
})


// update functionality
function update(){
    circles.forEach((circle,index)=>{
        if(index >= circleIndex[active-1]){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

    progress.style.transform = 'translateX(-50%) scaleY('+status[active-1]+')'
}