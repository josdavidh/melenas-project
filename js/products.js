let closeModal = document.querySelectorAll(".close-modal")[0];
let openModal = document.querySelectorAll(".product-link")[0];
let modal = document.querySelectorAll(".modal-products")[0];
let modalContainer = document.querySelectorAll(".modal-container")[0];

openModal.addEventListener("click", function(e){
    e.preventDefault();
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-show-hiden"); //remove class "modal-show", if use this method again, the class "modal-show" it adds
});

function hiddenModal(){
    modal.classList.toggle("modal-show-hiden");

    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
}

closeModal.addEventListener("click", function(e){
    hiddenModal();
});

window.addEventListener("click", function (e){ //function to close modal in case clik on "modal-container"
    if (e.target == modalContainer) { //case clik on "modal-container"
        hiddenModal();
    }
});
