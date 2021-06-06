// track element
const message = document.getElementById('message');
const container = document.querySelector('.container');
const codeBlock = {
    key : document.getElementById('key'),
    code : document.getElementById('code'),
    keyCode : document.getElementById('keyCode')
}


// event listener for window
window.addEventListener('keydown',event=>{
    // show the container
    message.style.display = 'none';
    container.style.display = 'flex';

    // update the code
    codeBlock.code.innerText = event.code;
    codeBlock.key.innerText = event.key == ' ' ? 'space' : event.key;
    codeBlock.keyCode.innerText = event.keyCode;
})