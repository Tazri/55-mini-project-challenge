// track element 
const boxContainer = document.querySelector('.box-container');
const buttton = document.querySelector('.btn')

// nesseccary variable
let modStatus = false;
const color = ['#C0392B','#E74C3C','#9B59B6','#2980B9','#3498DB','#45B39D','#52BE80','#58D68D','#F4D03F','#F4D03F','#F5B041','#EB984E','#DC7633','#F0F3F4','#F0F3F4'];
const colorLength = color.length;

// boxMouseEnter function
function boxMouseEnter(box){
    let randomColor = getRandomColor();

    box.style.backgroundColor = randomColor;
    box.style.boxShadow = `0px 0px 2px ${randomColor},0px 0px 10px ${randomColor}`;
} 

// boxMouseLeave funciton
function boxMouseLeave(box){;
    // if modStatus off
    if(!modStatus){
        box.style.backgroundColor = '#1d1d1d';
        box.style.boxShadow = '0px 0px 4px #000';
    }
}

// changeMod function
function changeMod(){
    // if mod is off so turn on the button and turn on the mod
    if(!modStatus){
        let randomColor = getRandomColor();
        modStatus = true;

        // change button style
        buttton.style.backgroundColor = randomColor;
        buttton.style.color = 'aliceblue';
        buttton.style.boxShadow = `0px 0px 4px ${randomColor}, 0px 0px 10px ${randomColor},0px 0px 15px ${randomColor},0px 0px 20px ${randomColor}`;
        buttton.innerText = 'ON';
    }else{
        // off modStatus and change button style
        modStatus = false;

        buttton.style.backgroundColor ='#1d1d1d';
        buttton.style.color = '#444444';
        buttton.style.boxShadow = 'none';
        buttton.innerText = 'OFF';
        // remove all color
        removeAllColor();
    }
}

// removeAllColor function
function removeAllColor(){
    let boxes = document.querySelectorAll('.box');

    boxes.forEach(box=>{
        box.style.backgroundColor = '#1d1d1d';
        box.style.boxShadow = '0px 0px 4px #000';
    })
}

// createBoxes function
function createBoxes(boxNumber){
    // create box and append child inside the boxContainer
    for(let i = 0; i < boxNumber; i++){
        let box = document.createElement('div');

        // add class and append inside the boxContainer
        box.classList.add('box');

        // add mouse enter event listener on box
        box.addEventListener('mouseenter',()=>boxMouseEnter(box));

        // add mouse leave event listener on box
        box.addEventListener('mouseout',()=>boxMouseLeave(box));


        boxContainer.appendChild(box);
    }
}

// getRandomColor function
function getRandomColor(){
    return color[Math.floor(Math.random()*colorLength)];
}

// add event listener on button
buttton.addEventListener('click',()=>{
    changeMod();
})

// intial call function
createBoxes(400)