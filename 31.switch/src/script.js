// track element
const html = document.querySelector('html');
const dark = document.getElementById('dark');
const light = document.getElementById('light');
const cool = document.getElementById('cool');

// nessecary variable
let darkAndLightTheme = [dark,light];
let coolTheme= ['cool-green-yellow','cool-purple-pink','cool-blue-green-orange']

// add event listener on dark
dark.addEventListener('change',darkEvent);
light.addEventListener('change',lightEvent);
cool.addEventListener('change',coolEvent);

// function darkEvent function
function darkEvent(){
    if(dark.checked){
        // change theme and turn off all check except dark
        html.className = 'dark'
        light.checked = false;
        cool.checked = false;
    }else{
        html.className = 'light'
        light.checked = true;
    }
}

// function lightEvent function
function lightEvent(){
    if(light.checked){
        // change theme to light and turn off all check exept dark
        html.className = 'light';
        dark.checked = false;
        cool.checked = false;
    }else{
        html.className = 'dark';
        dark.checked = true;
    }
}

// function coolEvent function
function coolEvent(){
    if(cool.checked){
        // turn off check except cool
        dark.checked = false;
        light.checked = false;

        // change cool theme randomly
        let randomTheme = coolTheme[Math.floor(Math.random()*coolTheme.length)];
        html.className = randomTheme;
    }else{
        // turn on random check except cool check
        let randomCheck = darkAndLightTheme[Math.floor(Math.random()*2)];
        randomCheck.checked = true;
        html.className = randomCheck.name;
    }
}