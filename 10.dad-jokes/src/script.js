// track element
const textField = document.querySelector('.jokes');
const btn = document.querySelector('.btn');

generateJokes();

// function generateJokes
function generateJokes(){
    const config = {
        headers : {
            'Accept' : 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com',config)
    .then(res => res.json())
    .then(({joke}) =>{
        textField.innerText = joke;
    })
}

// add event listener
btn.addEventListener('click',generateJokes);