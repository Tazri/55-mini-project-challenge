// track element
const toast = document.querySelector('.toast');
const btn = document.querySelector('.button');

// add event listener on button
btn.addEventListener('click',showNotification);


// showNotification
function showNotification(){
    // get random message and create message div
    let randomMessage = data[Math.floor(Math.random()*data.length)];

    let div = createRandomMessage(randomMessage);
    

    // add the meeage inside the toast
    toast.appendChild(div);

    setTimeout(()=>{
        div.classList.add('active-message');
    },300)

    // hide message
    setTimeout(()=>{
        div.classList.add('delete');
    },4000);

    setTimeout(()=>{
        div.remove();
    },4500);
}

// createRandomMessage
function createRandomMessage({title,details}){
    const div = document.createElement('div');
    
    div.classList.add('message');
    div.innerHTML = `<h2>${title}</h2><p>${details}</p>`
    
    return div;
}