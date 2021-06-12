// track element 
const rippleButtons = document.querySelectorAll('.ripple');

// add event listener on ripples buttons
rippleButtons.forEach(button=>{
    button.addEventListener('click',event=>{
        const x = event.clientX;
        const y = event.clientY;

        const xOfButton = event.target.offsetLeft;
        const yOfButton = event.target.offsetTop;

        const left = x - xOfButton;
        const top = y - yOfButton;

        const span = document.createElement('span');
        span.classList.add('circle');

        span.style.left = left +'px';
        span.style.top = top + 'px';

        button.appendChild(span);

        setTimeout(()=>{
            span.remove();
        },400);
    })
})