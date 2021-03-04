let panels = document.querySelectorAll(".panel");

panels.forEach(panel =>{
    panel.addEventListener("click",event=>{
        removeActive();
        event.target.classList.add("active");
    })
})

function removeActive(event){
    let activePanel = document.querySelector(".active");
    console.log(activePanel);
    activePanel.classList.remove("active");
    console.log(activePanel);
}