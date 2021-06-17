// data
const data = {
    headerText : 'Piano in The Sky',
    contentText : 'Do you like pinao? I am like piano. but funny thing is i can not play piano.But I want to learn piano. I fill good when i hear piano sound. It fill me good.One day I will learn piano.',
    avaterUrl : 'url(./../asset/img/avater/vector-format-avater.png)',
    imgHTML: '<img src="./../asset/img/anime-img/piano.jpg" alt="pinao">',
    nameText : 'Md Tazri',
    titleText : 'Programmer,'
}

// track the element 
const elementObject = {
    card : document.getElementById('card'),
    header : document.getElementById('header'),
    content : document.getElementById('content'),
    img : document.getElementById('img'),
    avater : document.getElementById('avater'),
    name : document.getElementById('name'),
    title : document.getElementById("title")
}

setTimeout(()=>{
    // extract data object
    const {
        headerText,
        contentText,
        avaterUrl,
        imgHTML,
        nameText,
        titleText
    } = data;

    // extract elementObject object
    const {
        card,
        header,
        content,
        img,
        avater,
        name,
        title
    } = elementObject;


    // set the card content
    header.innerText =headerText
    content.innerText = contentText;
    avater.style.backgroundImage = avaterUrl;
    img.innerHTML = imgHTML;
    name.innerText = nameText;
    title.innerText = titleText;

    // remove loading class from card
    card.classList.remove('loading');
},5000);