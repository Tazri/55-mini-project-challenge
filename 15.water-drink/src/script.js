// track element
const smallCups = document.querySelectorAll('.small-cup');
const remain = document.getElementById('remain');
const parcentage = document.getElementById('parcentage');
const remainedProgress = document.getElementById('remained-progress');

// call function
updateBigCup();

// add event listener to small cups
smallCups.forEach((smallCup,smallCupIndex)=>{
    smallCup.addEventListener("click",event => highlightSmallCup(smallCupIndex));
})

// highlightSmallCup function
function highlightSmallCup(index){
    // check it or next cup already highlight or not
    let isAlreadyHighLight = smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full');

    isAlreadyHighLight && index--;

    smallCups.forEach((cup,cupIndex)=>{
        if(cupIndex <= index){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }
    })
    updateBigCup();
}

// updateBigCup function
function updateBigCup(){
    // need variable
    const fullCupsNumber = document.querySelectorAll(".small-cup.full").length;
    const totalCups = smallCups.length;

    //  full cups if 0
    if(fullCupsNumber == 0){
        parcentage.style.visibility = 'hidden';
        parcentage.style.height = 0;
    }else{
        parcentage.style.visibility = 'visible';
        parcentage.style.height = `${fullCupsNumber / totalCups * 330}px`;
        parcentage.innerText = `${fullCupsNumber / totalCups * 100}%`;
    }

    // update the remainedProgress style
    if(fullCupsNumber == totalCups){
        remainedProgress.style.visibility = 'hidden';
        remainedProgress.style.height = 0;
    }else{
        remainedProgress.style.visibility = 'visible';
        remain.innerText = `${2 - (250 * fullCupsNumber / 1000)}L`   
    }
}