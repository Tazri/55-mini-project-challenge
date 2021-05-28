// track element
const labels = document.querySelectorAll('label');

// modify the labels
labels.forEach(label => {
    let text = label.innerText;

    // create html text for label
    let htmlForLabel = text.split('').map((charecter,index)=>{
        let span = document.createElement('span');
        span.innerText = charecter;
        span.style.transitionDelay = 50 * index + 'ms';

        return span
    })

    label.innerHTML = ''
    htmlForLabel.forEach(span => {
        label.appendChild(span);
    })
})