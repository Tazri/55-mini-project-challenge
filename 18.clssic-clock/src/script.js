// track element
const modeBtn = document.getElementById('mode-btn');
const html = document.querySelector('html');
const dateObject = {
    secoundNeedle : document.querySelector('.secound'),
    mintueNeedle : document.querySelector('.mintue'),
    hourNeedle : document.querySelector('.hour'),
    time: document.querySelector('.time'),
    date: document.querySelector('.date')
}


// nessecary varibale
const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// call function
updateClock();

// toggle the theme function
modeBtn.addEventListener('click',event=>{
    html.classList.toggle('dark');
    if(html.classList.contains('dark')){
        modeBtn.innerText = 'Light Mode';
    }else{
        modeBtn.innerText = 'Dark Mode';
    }
})

// update the clock every one secound
setInterval(updateClock,1000);

// nessecary function
function updateClock(){
    // create new date
    const newDateObject = new Date();

    // get time information
    const month = monthName[newDateObject.getMonth()];
    const day = dayName[newDateObject.getDay()];
    const date = newDateObject.getDate();
    const hour = newDateObject.getHours()%12;
    const pmOrAm = newDateObject.getHours() >= 12 ? 'PM' : 'AM';
    const mintue = newDateObject.getMinutes();
    const secound = newDateObject.getSeconds();

    // get informatin for needle
    const hourNeedle = convertRange(hour,12);
    const mintueNeedle = convertRange(mintue,60);
    const secoundNeedle = convertRange(secound,60);

    // update time information
    dateObject.time.innerText = `${hour}:${mintue < 10 ? '0' + mintue: mintue} ${pmOrAm}`;
    dateObject.date.innerHTML = `${day}, ${month} <span>${date}</span>`;

    // update the needle of clock
    // dateObject.hourNeedle.style.transform = `translate(-50%,-100%) rotate(${hourNeedle}deg)`;
    // dateObject.mintueNeedle.style.transform = `translate(-50%,-100%) rotate(${mintueNeedle}deg)`;
    // dateObject.secoundNeedle.style.transform = `translate(-50%,-100%) rotate(${secoundNeedle}deg)`
    updateNeedle(dateObject.hourNeedle,hourNeedle,12);
    updateNeedle(dateObject.mintueNeedle,mintueNeedle,60);
    updateNeedle(dateObject.secoundNeedle,secoundNeedle,60);
}

// function convert range 
function convertRange(value,Max){
    return (value * 360) / Max;
}

// updateNeedle function
function updateNeedle(needle,deg,Max){
    const turn = 360 - (360/Max);

    if( deg < turn){
        needle.style.transitionDuration = '0.3s';
        needle.style.transform = `translate(-50%,-100%) rotate(${deg}deg)`;
    }else{
        needle.style.transform = `translate(-50%,-100%) rotate(${360}deg)`;

        // rutate value
        setTimeout(()=>{
            needle.style.transitionDuration = '0s';
            needle.style.transform = `translate(-50%,-100%) rotate(${0}deg)`;
        },350)
    }
}