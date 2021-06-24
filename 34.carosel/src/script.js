// track element
const imgContainer = document.querySelector('.img-container');
const imgs = document.querySelectorAll('img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const body = document.querySelector('body');


// nessecary variable
let currentIndex = 0;
let lastImgIndex = imgs.length -1;
let interval = setInterval(runCarousel,3000);

// runCarousel function
function runCarousel(){
    currentIndex++;
    changeImg();
}

// chagneImg function
function changeImg(){
    // if current index greater then totalImg
    if(currentIndex > lastImgIndex){
        currentIndex = 0;
    } else if(currentIndex < 0){
        // else
        currentIndex = lastImgIndex;
    }

    // change img    
    imgContainer.style.transform = `translate(-${currentIndex*500}px)`

    // change color
    changeColor();
}

// resetInterval function
function resetInterval(){
    clearInterval(interval);
    interval = setInterval(runCarousel,3000);
}


function changeColor(){
    // figure out color and change color
    let color = imgs[currentIndex].dataset.color;

    // update color 
    body.style.backgroundColor = color;
    prevButton.style.color = color;
    nextButton.style.color = color;
}

//  add event listener on nextButton
nextButton.addEventListener('click',()=>{
    currentIndex++;

    changeImg();
    resetInterval();
})

// add event listener on prevButton
prevButton.addEventListener('click',()=>{
    currentIndex--;

    changeImg();
    resetInterval();
})

// intial call
changeColor();