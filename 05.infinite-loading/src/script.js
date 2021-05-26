// track element
const cards = document.querySelectorAll('.card');


// add event listener
window.addEventListener('scroll',showCard);


// showCard functionality
function showCard(){
    const triggerBottom = window.innerHeight/5 *4.5;

    cards.forEach(card =>{
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom ){
            card.classList.add('show-me');
        }else{
            card.classList.remove('show-me');
        }
    })
}

// showCard call once
showCard();