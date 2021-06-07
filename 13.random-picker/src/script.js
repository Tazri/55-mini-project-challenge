// track the element
const textarea = document.querySelector('textarea');
const tagContainer = document.querySelector('.tag-container');

// some action after represh the page
textarea.focus();

// add event listenter in text area
textarea.addEventListener('keyup',event=>{
    if(event.key === 'Enter'){
        pickOne(document.querySelectorAll('.tag'));
        textarea.blur();
    }else{
        createSpan(event.target.value);
    }
})

// createSpan function
function createSpan(inputValue){
    tagContainer.innerHTML = '';
    let words = inputValue.split(',').filter(word => word.trim() != ' ').map(word=> word.trim());
    
    if(words.length == 1 && words[0] == ''){
        words = [];
    }

    words.forEach(word=>{
        let span = document.createElement('span');
        span.classList.add('tag');
        span.innerText = word;

        tagContainer.append(span);
    })
}

// pickOne function
function pickOne(tags){
    textarea.value = '';
    const randomTagIndex =  Math.floor(Math.random()*tags.length);
    console.log(randomTagIndex);
    let turn = 0;

    // pick random one
    let randomInterval = setInterval(()=>{
        const randomNumber = Math.floor(Math.random()*tags.length);
        tags[randomNumber].classList.add('highlight');

        // highlight the random pick
        if(randomNumber==randomTagIndex && turn > 10){
            console.log(randomNumber);
            highlight(tags[randomNumber])
            clearInterval(randomInterval);
        }else{
            // unhighlight
            setTimeout(()=>unhighlight(tags[randomNumber]),90);
        }

        // increase the turn
        turn++;
    },100);
}

// highlight function
function highlight(tag){
    tag.classList.add('highlight');
}

// unhighlight function
function unhighlight(tag){
    tag.classList.remove('highlight');
    console.log('hello world');
}