// track element
const emojiContainer = document.querySelector('.emoji-container');
const feedback = document.querySelector('.feedback');
const message = document.querySelector('.message');
const button = document.querySelector('.btn');
let allEmoji = feedback.children[1].children;

// nessecary variable
let isSelectOne = false;
let totalEmoji = allEmoji.length;

// add event listner on feedback
feedback.addEventListener('click',feedBackChange);

// add event listener on button
button.addEventListener('click',()=>{
    // if user select one hide feedback and show message
    if(isSelectOne){
        feedback.classList.add('hide');
        message.classList.remove('hide');
    }
})

// feedBackChange function
function feedBackChange(event){
    // find out siblig and target emoji
    let targetEmoji = findTargetEmoji(event.target);
    let isClickOnEmoji = targetEmoji.classList.contains('emoji');

    // if it click on emoji
    if(isClickOnEmoji){
        // change isSelectOne because user click on emoji
        isSelectOne = true;
        
        // traverse the emoji
        for(let i = 0; i < totalEmoji;i++){
            //  if target emji match inside the emoji
            if(targetEmoji === allEmoji[i]){
                allEmoji[i].classList.add('active');
            }else{
                // if not match
                allEmoji[i].classList.remove('active');
            }
        }
    }
}


// findTargetEmoji function
function findTargetEmoji(element){
    // find the target
    let target = element;
    let itContainsEmoji = target.classList.contains('emoji');

    // if it contains emoji
    if(itContainsEmoji){
        return target;
    }else{
        // return the parenNode
        return target.parentNode;
    }
}