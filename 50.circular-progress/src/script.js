// track element
const allProgressCircle = document.querySelectorAll('.progress-circle');

// add event listener on progressCircle
allProgressCircle.forEach(circle=>{
    // need nessecary variable
    let parcent = +circle.dataset.parcent;
    let offset = getOffsetValue(parcent);
    let svgCircle = circle.querySelector('svg circle');
    let progressStatus = circle.querySelector('.progress-status')
    let perSecound = parseInt(1000/parcent);
    let interval = null;
    let currentParcent = 0;
    
    // change progress 
    svgCircle.style.strokeDashoffset = offset;
    
    // update status
    interval = setInterval(()=>{
        // if currentParcent less then parcent
        if(currentParcent <= parcent){
            currentParcent++;
            progressStatus.innerText = currentParcent+'%'
        }else{
            // if currentParcent greater then parcent
            progressStatus.innerText = parcent+'%';
            // clearInterval 
            clearInterval(interval);
        }
    },perSecound);
})

// getOffsetValue function
function getOffsetValue(value){
    let inTotal = (value/100)*380;

    return 380 - inTotal;
}