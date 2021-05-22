let panels = document.querySelectorAll('.panel');

panels.forEach(panel=>{
    panel.addEventListener('click',event=>{
        removeActive();
        if(event.target.tagName == 'DIV'){
            event.target.classList.add('active');
        }else{
            event.target.parentElement.classList.add('active');
        }
    })
})

function removeActive(){
    let activePanel = document.querySelector('.active');
    activePanel.classList.remove('active');
}