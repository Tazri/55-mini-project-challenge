// track element 
const loadingStatus = document.querySelector('.loading-status');
const bg = document.querySelector('.bg');

// create setInterval
let interval = setInterval(loading,67);

let load = 0;

// loading functionaliy
function loading(){
    load++;

    if(load == 100){
        clearInterval(interval);
    }

    loadingStatus.innerText = load +'%';
    loadingStatus.style.opacity = outScale(load,0,100,1,0);
    bg.style.filter =  `blur(${outScale(load,0,100,70,0)}px)`;
}


// scale functionality
function outScale(number,inMin,inMax,outMin,outMax){
    return (number - inMin) * (outMax-outMin) / (inMax-inMin) + outMin
}