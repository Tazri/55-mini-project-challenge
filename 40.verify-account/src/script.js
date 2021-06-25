// track element
let boxes = document.querySelectorAll('.code');

// focus the first element
boxes[0].focus();

// add event listener on box
boxes.forEach((box,boxIndex)=>{
    box.addEventListener('keydown',(event)=>inputNumber(box,boxIndex,event));
})

// function inputNumber
function inputNumber(box,boxIndex,event){
    // needVariable
    const key = event.key;
    const isKeyNumber = key >= 0 && key <= 9;
    const nextBoxExist = !!box.nextElementSibling;

    // if  key is number and next siblig is exist
    if(isKeyNumber && nextBoxExist){
        
        // empty the box, enter the number and  focus the next box
        box.value = '';
        setTimeout(()=>boxes[boxIndex+1].focus(),10);
    }
    // if it only number but nextBox is not exist
    else if(isKeyNumber){
        box.value = ''
    }
    // if key is backspace and it is not first box
    else if(key == 'Backspace' && boxIndex !== 0){
        // focus the prevouse box
        setTimeout(()=>boxes[boxIndex-1].focus(),10);
    }
    
}