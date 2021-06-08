// track element 
const counters = document.querySelectorAll('.counter-number');

// couting the number
counters.forEach(counter=>{
    // variable we need
    const target = +counter.getAttribute('data-target');
    let interval = null;

    // before update
    counter.innerText = 0;
 
    // update counter function
    function updateCounter(){
        // varibale 
        let start = +counter.innerText;
        const increamentRatio = target/400;
        // update the counter
        if(start < target){
            start += increamentRatio;
            counter.innerText = `${Math.ceil(start)}`
            interval = setInterval(updateCounter,100) 
        }else{
            counter.innerText = target;
            clearInterval(interval);
        }
    }

    // call the function
    updateCounter();
})