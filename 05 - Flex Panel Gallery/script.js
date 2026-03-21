const panels = document.querySelectorAll(".panel");

// Here we have used toggle instead of add because we need to get the transitions when the panel gets clicked once and needs to go back to normal when it was clicked the second time.

function toggleOpen(){
    this.classList.toggle('open');  
}
function toggleActive(event){
    if(event.propertyName === 'flex-grow'){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));