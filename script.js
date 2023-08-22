const detailsBtn = document.getElementsByClassName("details-btn");
const details = document.getElementsByClassName("details");


let isOpened = false;

for (let i = 0; i < detailsBtn.length; i++) {
    detailsBtn[i].addEventListener("click", () => {
        
        if (isOpened ===false) {
            details[i].style.display = "inline";
            isOpened = true;
            detailsBtn[i].textContent = "Moins de détails";
        } else if (isOpened === true) {
            details[i].style.display = "none";
            isOpened = false;
            detailsBtn[i].textContent = "Détails";
        }
        console.log(isOpened);

    }
    )
}


