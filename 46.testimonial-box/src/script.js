// track element
const progress = document.querySelector('.progress');
const userName = document.getElementById('name');
const userSkill = document.getElementById('skill');
const qouteParagraph = document.querySelector('.qoute-paragraph');
const userImg = document.getElementById('img');

// nessecary variable
let totalQoute = data.length;
let currentQoute = 0;

// changeQoute function
function changeQoute(){
    // extarct current qoute
    let {
        name,
        skill,
        imgUrl,
        qoute
    } = data[currentQoute++];

    // update qoute
    userName.innerText = name;
    userSkill.innerText = skill;
    userImg.src = imgUrl;
    userImg.alt = name;
    qouteParagraph.innerText = qoute;

    // update current qoute
    if(currentQoute > totalQoute -1){
        currentQoute = 0;
    }
}

// add event listener on progress bar
progress.addEventListener('animationiteration',changeQoute);

// intial call
changeQoute();