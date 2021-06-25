// track element
const button = document.getElementById('button');
const boxContainer = document.getElementById('boxes');


// nessacary variable
let isSplit = false;

// add event listener on button
button.addEventListener('click',event=>{
    // check condition is split or not
    if(isSplit){
        // if is split remove split class in boxContainer and change button text
        button.innerText = 'Split';
        boxContainer.classList.remove('split');
        isSplit = false;
    }else{
        // if is not split add split class in boxContainer and change button text
        button.innerText = 'Join';
        boxContainer.classList.add('split');
        isSplit = true;
    }
})