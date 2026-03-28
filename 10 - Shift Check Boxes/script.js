let checkboxes = document.querySelectorAll("input");

let lastChecked;

function handleCheck(event){
    let inBetween = false;
    if(event.shiftKey && this.checked){
        for(let checkbox of checkboxes){
            if(checkbox == this || checkbox == lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween){
                checkbox.checked = true;
            }
        }
    }
    lastChecked = this;
}

for(let checkbox of checkboxes){
    checkbox.addEventListener('click', handleCheck);
}