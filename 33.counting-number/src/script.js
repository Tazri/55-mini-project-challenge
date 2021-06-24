// track element
const numbers = document.querySelectorAll('.number');
const counterContainer = document.querySelector('.counter-container');
const finalMessage = document.querySelector('.final-message');
const replyButton = document.getElementById('reply');


// call function
runAnimation();

// runAnimation function
function runAnimation(){
    // add animation event listener every number
    numbers.forEach((number,numberIndex) => {
        // add animation 
        addAnimation(number,numberIndex)
    });
}

// addAnimation function
function addAnimation(number,numberIndex){
    // last number index
    let lastIndex = numbers.length -1;

    number.addEventListener('animationend',(event)=>{
        let animationName = event.animationName;
        let nextNumber = number.nextElementSibling
        
        // if  animation is goIn it not last number
        if(animationName === 'goIn' && numberIndex != lastIndex){
            number.classList.remove('in');
            number.classList.add('out');
        }

        // if animation is goOut and next number exist
        else if(animationName === 'goOut' && nextNumber){
            nextNumber.classList.add('in');
        }

        // if next sibling is not exist
        else{
            counterContainer.classList.add('hide');
            finalMessage.classList.add('final-show');
        }
    })
}

// resetDom function
function resetDom(){
    // remove all animation
    numbers.forEach(number=>{
        number.classList.remove('out');
        number.classList.remove('in');
    })

    // show counterContainer
    counterContainer.classList.remove('hide');

    // hide final message
    finalMessage.classList.remove('final-show');

    // add in in first element of numbers
    numbers[0].classList.add('in');
}

// add event listener on replyButton
replyButton.addEventListener('click',()=>{
    resetDom();
    runAnimation();
})