// track element
const range = document.getElementById('range');
const label = range.nextElementSibling;

range.addEventListener('input',event=>{
    // fide the value
    const rangeValue = +range.value;

    // find label and range widht
    const rangeWidth = getComputedStyle(event.target).getPropertyValue('width');
    const labelWidth = getComputedStyle(label).getPropertyValue('width');

    // calculate width
    const numWidth = +rangeWidth.substring(0,rangeWidth.length-2);
    const numLabelWidth = +labelWidth.substring(0,labelWidth.length-2);

    // find max and min
    const max = +event.target.max;
    const min =+event.target.min;

    // calculate left value
    const left = rangeValue * (numWidth/max) - numLabelWidth / 2;

    // change label style
    label.style.left =`${left}px`;

    
    // change the value inside the label
    label.innerHTML = rangeValue;
})