// track the element
const boxes = document.querySelectorAll('.box');
const fill = document.querySelector('.fill');
const playBtn = document.getElementById('play-btn');
const doors = document.querySelectorAll('.door');
const messageBox = document.querySelector('.message-box');

// nessecary variable
let turn = 1;
let isGameFinish = false;

// add event listener on fill
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

// add event listener on every boxes
boxes.forEach(box=>{
    box.addEventListener('dragenter',dragEnter);
    box.addEventListener('dragover',dragOver);
    box.addEventListener('dragleave',dragLeave);
    box.addEventListener('drop',dragDrop);
});

// add event listener on playBtn
playBtn.addEventListener('click',play);

// add event listener on door 
doors.forEach(door=>{
    door.addEventListener('click',doorKnock);
})

// play function
function play(){
    // stop the draggable, close the all door, shuffle the box and send the message
    turn = 1;
    turnDraggable(false);
    doorCommand();
    setTimeout(shuffle,300);
    sendMessage('firstTurn');
}

// shuffle function
function shuffle(){
    let numberArray = createRandomOrderArray();
    
    // center the box
    boxes.forEach(box=>{
        box.id = 'center'
    })

    // spread the box
    setTimeout(()=>{
        boxes.forEach((box,index)=>{
            box.id =  numberArray[index];
        });
    },300);

}

// doorNock function
function doorKnock(){
    const parent = this.parentElement;

    if(parent.contains(fill) && !isGameFinish){
        // send winner message and reset the game
        this.classList.remove('close'); 
        sendMessage('win');
        isGameFinish = true
        resetGame();
    }else if(!isGameFinish){
        // check on turn is exist
        if(turn !== 0){
            // send the message and open the door
            sendMessage('secoundTurn');
            this.classList.remove('close');
            turn = 0;
        }
         // no turn left
        else{
            // send lose the message, and reset the game
            sendMessage('lose');
            this.classList.remove('close');
            isGameFinish = true;
            resetGame()
        }
    }
}

// doorCommand Function
function doorCommand(command){
    if(command){
        doors.forEach(door=>{
            door.classList.remove('close');
        })
    }else{
        doors.forEach(door=>{
            door.classList.add('close');
        })
    }
}

// drag start and end function
function dragStart(){
    if(fill.draggable){
        fill.className += ' hold';

        setTimeout(()=>{
            fill.className = 'invisiable';
        },10);
    }
}

function dragEnd(){
    fill.className = 'fill';
}

// drag hover, enter, leave event function
function dragEnter(e){
    e.preventDefault();

    if(fill.draggable){
        this.className += " hover";
    }
}

function dragOver(e){
    e.preventDefault();
}

function dragLeave(){
    this.className = "box";
}

// drop event function
function dragDrop(){
    this.className = "box";
    if(fill.draggable){
        this.appendChild(fill);
    }
}

// turnDraggable function
function turnDraggable(isOn){
    if(isOn){
        fill.draggable = true;
        fill.ondragstart = true;
        fill.style.userSelect = 'auto';
        fill.style.cursor = 'grab';
    }else{
        fill.draggable = false;
        fill.ondragstart = false;
        fill.style.userSelect = 'none';
        fill.style.cursor = 'auto';
    }
}

// message function
function sendMessage(status){
    messageBox.innerHTML = '' ;
    const messageObject = {
        firstTurn : 'Find the picasso in 2 turn.',
        secoundTurn : 'You have left 1 turn.',
        lose: 'Opps! You lose :(<br /> do you want to try again?',
        win : 'You Win! :)<br /> do you want to try again?'
    }

    // ready the hOne
    const hOne = document.createElement('h1');
    hOne.className = 'message';
    hOne.innerHTML = messageObject[status];
    
    // append the hOne inside the messageBox
    messageBox.appendChild(hOne);
}

// resetGame function
function resetGame(){
    //  open the all door, turn on the draggable and reset the turn to 1
    setTimeout(()=>doorCommand('Open'),600);
    turnDraggable(true);
    turn = 1;
    setTimeout(()=>isGameFinish = false,1000);
}

// nessecary tool function
function createRandomOrderArray(){
    let number = ['one','two','three','four'];
    let currentIndex = number.length;
    let randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;

        // swap the value
        [number[currentIndex],number[randomIndex]] = [number[randomIndex],number[currentIndex]];
    }

    return number;
}