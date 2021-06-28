// track element 
const container = document.querySelector('.container');


// nessecary variable
let row = 30;

// getRandomImgSize function
function getRandomImgURL(){
    // create random url
    const imgURL = 'https://source.unsplash.com/random/';
    let sizeOne = getRandomSize();
    let sizeTwo = getRandomSize();

    return imgURL+sizeOne+'x'+sizeTwo;
}

// getRandomSize function
function getRandomSize(){
    let number = Math.floor(Math.random()*10);

    return number + 300;
}

// generate img and append inside the container
for(let i = 0; i < row*10;i++){
    // create img and append inside the container
    let img = document.createElement('img');

    img.src = getRandomImgURL();

    container.appendChild(img);
}