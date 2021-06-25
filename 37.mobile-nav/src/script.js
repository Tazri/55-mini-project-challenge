// track element
const images = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('li');

// add event listener on every list items
listItems.forEach(listItem=>{
    listItem.addEventListener('click',()=>{
        // find out list item
        let optionName = listItem.querySelector('p').innerText.toLowerCase();

        // remove all active class from list item
        listItems.forEach(item => item.classList.remove('active'));

        // add active class which click the user
        listItem.classList.add('active');

        // find out which photo alternative name similar to optionName and show it.
        images.forEach(img=>{
            let alt = img.alt;
            // if option name and alt similar
            if(optionName === alt){
                img.classList.add('show')
            }else{
                // not similar
                img.classList.remove('show');
            }
        })
    })
})