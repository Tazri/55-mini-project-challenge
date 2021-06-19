// track element
const tab = document.querySelector('.tab');

// nessecary variable
const totalObject = object.length;
const totalColor = color.length; 

// add event listner
tab.addEventListener('click',showObject);

// showObject function
function showObject(event){
    // find the position
    let windowX = event.clientX;
    let windowY = event.clientY;

    let targetPositionX = tab.offsetLeft;
    let targetPositionY = tab.offsetTop;

    let insideX = windowX - targetPositionX;
    let insideY = windowY - targetPositionY

    // create the object
    let i = document.createElement('i');
    i.className = object[Math.floor(Math.random()*totalObject)];
    i.style.color = color[Math.floor(Math.random()*totalColor)];
    i.style.left = insideX+'px';
    i.style.top = insideY+'px';

    // append child
    tab.appendChild(i);

    setTimeout(()=>{
        i.remove();
    },700);
}