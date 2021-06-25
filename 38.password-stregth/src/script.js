// track element
const password = document.getElementById('password');
const background = document.getElementById('background');

// add event listener on password 
password.addEventListener('keyup',event=>{
    const input = event.target.value;
    const length = input.length;
    let blurVlaue = 20 - length * 2;

    if(blurVlaue < 0){
        blurVlaue = 0;
    }

    background.style.filter = `blur(${blurVlaue}px)`;
})