// track element
const password = document.getElementById('password');
const copyButton = document.getElementById('copy');
const generateButton = document.getElementById('btn');
const lengthInput = document.getElementById('number-input');
const checkBox = {
    upper : document.getElementById('upper'),
    lower : document.getElementById('lower'),
    number : document.getElementById('number'),
    symbol : document.getElementById('symbol')
}

// nessecary variable
let length = '';
let checked = 0;
let checkBoxValue = {
    upper : [false,randomUpperCase],
    lower : [false,randomLowerCase],
    number : [false,randomNumber],
    symbol : [false,randomSymbol]
}

// add change event listener on lengthInput
lengthInput.addEventListener('keydown',numberInput);
lengthInput.addEventListener('keypress',numberInput)
lengthInput.addEventListener('keyup',numberInput);
lengthInput.addEventListener('change',numberInput);

// function numberInput
function numberInput(){
    let value = +lengthInput.value;

    // if value is integer
    length = Number.isInteger(value) ? value : length;

    lengthInput.value = length
}

// add event listener every checkbox
Object.values(checkBox).forEach(box=>{
    box.addEventListener('click',()=>{
        // set checkBoxValue and increase the checked value;
        checkBoxValue[box.name][0] = box.checked;
        box.checked ? checked++ : checked --;
    })
})

// add event listener on generate button 
generateButton.addEventListener('click',()=>{
    // reset the length under 6 to 30 and reset the value numberInput
    length = length < 6 ? 6 : length > 30 ? 30 : length;
    lengthInput.value = length;
    
    if(checked){
        // create the password
        const passwordString = createPassword();
        
        // show the password
        password.innerText = passwordString;
    }
})

// add click event listener on copy button
copyButton.addEventListener('click',()=>{
    let textarea = document.createElement('textarea');
    const passwordString = password.innerText;
    
    // if password is not exist
    if(!passwordString){
        return '';
    }

    // create textarea and set the value and copy
    textarea.value = passwordString;
    textarea.textContent = 'copied text';
    textarea.style.userSelect = 'all';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.execCommand('copy');
    textarea.remove();

    navigator.clipboard.writeText(passwordString)
    .then(()=> console.log('complate'));

    // add animation on button
    copyButton.classList.add('key-animation');
    // remove animation
    setTimeout(()=>copyButton.classList.remove('key-animation'),450);
})

// nessacary function
// randomUpperCase Function
function randomUpperCase(){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.split('')[Math.floor(Math.random()*letters.length)];
}

// randomLowerCase function
function randomLowerCase(){
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters.split('')[Math.floor(Math.random()*letters.length)];
}

// randomNumber function
function randomNumber(){
    return Math.floor(Math.random()*10);
}

// randomSymbol function
function randomSymbol(){
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'
    return symbols.split('')[Math.floor(Math.random()*symbols.length)];
}

// createPassword function
function createPassword(){
    let password = '';

    // filter the checked function
    let functionNames= Object.values(checkBoxValue).filter(array=> array[0]).map(array=> array[1]);
    let lastIndex = functionNames.length-1;
    let startIndex = 0;
    
    // create sorted password
    for(let i = 0; i < length;i++){
        password += functionNames[startIndex++]();
        startIndex = startIndex > lastIndex ? 0 : startIndex;
    }

    // shuffle the password
    password = shuffleString(password);

    return password;
}

// shuffleString function
function shuffleString(string){
    // convert the string to array
    let stringArray = string.split('');
    let stringLength = stringArray.length;

    // shuffle the array
    for(let i = 0 ; i < stringLength; i++){
        let randomIndex = Math.floor(Math.random()*stringLength);

        // shuffle the current index
        [stringArray[0],stringArray[randomIndex]] = [stringArray[randomIndex],stringArray[0]];
    }

    return stringArray.join('');
}