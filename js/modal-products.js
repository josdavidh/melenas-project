let closeModal = document.querySelectorAll(".close-modal")[0];
let productLinks = document.querySelectorAll(".product-link");
let modal = document.querySelectorAll(".modal-products")[0];
let modalContainer = document.querySelectorAll(".modal-container")[0];

let container = document.querySelector(".products-container");


let bandera = [];

productLinks.forEach(element => {
    bandera.push(element);
    
});

container.addEventListener('click', function(e){
    findProduct(bandera,e.target)
})

function findProduct (bandera,target) {


    for (let i = 0; i < bandera.length; i++) {
        
        if (target === bandera[i]) {
            openModal()
        }
        
    }
}

closeModal.addEventListener("click", function(e){
    hiddenModal();
});

function hiddenModal(){
    modal.classList.toggle("modal-show-hiden");

    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
}

function openModal () {
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-show-hiden"); //remove class "modal-show", if use this method again, the class "modal-show" it adds
}


window.addEventListener("click", function (e){ //function to close modal in case clik on "modal-container"
    if (e.target == modalContainer) { //case clik on "modal-container"
        hiddenModal();
    }
});
