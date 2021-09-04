// 'data base' products
const products = [
    {
        name: "Chulo tipo pañoleta",
        price: "$12.000 Cop",
        materials: "Saten - microfibra",
        category: "Accesorio",
        description: "Estoy funcionando y estoy feliz :)",
        mainImg: "./img/products/tohallas.JPG",
        img1: "./img/products/gorros1.JPG",
        img2: "./img/products/gorros1.JPG",
        img3: "./img/products/gorros1.JPG"
    },
    {
        name: "Accesorio",
        price: "$12.000 Cop",
        materials: "Saten - microfibra",
        category: "Accesorio",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
        mainImg: "./img/products/gorros1.JPG",
        img1: "./img/products/gorros1.JPG",
        img2: "./img/products/gorros1.JPG",
        img3: "./img/products/gorros1.JPG"
    },
    {
        name: "Accesorio",
        price: "$50.000 Cop",
        materials: "Saten - microfibra",
        category: "Accesorio",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
        mainImg: "./img/products/gorros1.JPG",
        img1: "./img/products/gorros1.JPG",
        img2: "./img/products/gorros1.JPG",
        img3: "./img/products/gorros1.JPG"
    },
    {
        name: "Ducha",
        price: "$25.000 Cop",
        materials: "Microfibra",
        category: "Ducha",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
        mainImg: "./img/products/gorros3.JPG",
        img1: "./img/products/gorros3.JPG",
        img2: "./img/products/gorros3.JPG",
        img3: "./img/products/gorros3.JPG"
    },
    {
        name: "Para dormir",
        price: "$25.000 Cop",
        materials: "Satén",
        category: "Para dormir",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
        mainImg: "./img/products/gorros-azules.jpg",
        img1: "./img/products/gorros-azules.jpg",
        img2: "./img/products/gorros-azules.jpg",
        img3: "./img/products/gorros-azules.jpg"
    }

];




//Category Buttons
let btnAccessories = document.getElementById("accessories");
let btnShower = document.getElementById("shower");
let btnSleep = document.getElementById("sleep");


//Modal Variables
let productsInlayout = []; // contains products that can see on the screen 

let closeModal = document.querySelectorAll(".close-modal")[0];
let productLinks = document.querySelectorAll(".product-link");
let modal = document.querySelectorAll(".modal-products")[0];
let modalContainer = document.querySelectorAll(".modal-container")[0];

productLinks.forEach(element => {
    productsInlayout.push(element);
    
});


//Products Variables
let productsTemplate = " "; //Contains products that will show eventually 

const productsContainer = document.querySelector(".products-container");




productsContainer.addEventListener('click', function(e){
    

    if(e.target.classList.contains("product-link")){
        showModal(productsInlayout,e.target)     
    }
    
})

btnAccessories.addEventListener("click", function (e) {
    showProducts("Accesorio");
    btnAccessories.style.backgroundColor = "#b78372";
    btnAccessories.style.border = " 1px solid #b78372";

    btnShower.style = "inherit";
    btnSleep.style = "inherit";
});

btnShower.addEventListener("click", function (e) {
    showProducts("Ducha");
    btnShower.style.backgroundColor = "#b78372";
    btnShower.style.border = " 1px solid #b78372";

    btnAccessories.style = "inherit";
    btnSleep.style = "inherit";
});

btnSleep.addEventListener("click", function (e) {
    showProducts("Para dormir");
    btnSleep.style.backgroundColor = "#b78372";   
    btnSleep.style.border = " 1px solid #b78372";

    btnAccessories.style = "inherit";
    btnShower.style = "inherit";
});


closeModal.addEventListener("click", function(e){
    hiddenModal();
});

window.addEventListener("click", function (e){ //function to close modal in case clik on "modal-container"
    if (e.target == modalContainer) { //case clik on "modal-container"
        hiddenModal();
    }
});



function showProducts(category) {

    //Empty template
    template = " ";
    

    //create template with the products
    products.forEach(item => {

        if(item.category === category){
            template += ` 
            <div class="item">
                <div class="product-link">
                    <img src="./img/products/gorros1.JPG" alt="">
                    <section class="item-header">
                        <h2>${item.name}</h2>
                        <h4>${item.price}</h4>
                    </section>
                    <section class="item-footer">
                        <h3>3 Und Disponibles <i class="fas fa-shopping-cart"></i></h3>
                    </section>
                </div>
        </div>
            `
        } else {
            template += ""
        }

    })

    //show products
    productsContainer.innerHTML = template;

    productLinks = [];
    productsInlayout = [];
    
    productLinks = productsContainer.querySelectorAll(".product-link")

    //fit the products that we can see
    productLinks.forEach(element => {

        console.log(element);
        productsInlayout.push(element); //fit products
        
    });

}

function hiddenModal(){
    modal.classList.toggle("modal-show-hiden");

    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
}

function showModal (productsInlayout,productSelected) {


    for (let i = 0; i < productsInlayout.length; i++) {
        
        if (productSelected === productsInlayout[i]) {
            findProduct(productsInlayout[i])
        }
        
    }
}

let modalMainImage = document.querySelector(".modal-main-image");
let modalImage1 = document.querySelector(".modal-image1");
let modalImage2 = document.querySelector(".modal-image2");
let modalImage3 = document.querySelector(".modal-image3");
let modalTitle = document.querySelector(".modal-title  h1");
let modalPrice = document.querySelector(".modal-title  h2");
let modalDescription = document.querySelector(".modal-description > p");
let modalMaterials = document.querySelector(".modal-properties .modal-materials");
let modalCategory = document.querySelector(".modal-properties .modal-category");

function openModal (product) {

    console.log(modalMainImage)

    modalMainImage.innerHTML = `<img src="${product.mainImg}" alt="">`
    modalImage1.innerHTML = `<img src="${product.img1}" alt="">`
    modalImage2.innerHTML = `<img src="${product.img2}" alt="">`
    modalImage3.innerHTML = `<img src="${product.img3}" alt="">`

    console.log(modalMainImage)

    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price;
    modalDescription.textContent = product.description;
    modalMaterials.textContent = product.materials;
    modalCategory.textContent = product.category;


    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-show-hiden"); //remove class "modal-show", if use this method again, the class "modal-show" it adds

    
}


function findProduct (productSelected) {

    productName = productSelected.querySelector(".item-header > h2").textContent;

    

    for (let i = 0; i < products.length; i++) {
        if(products[i].name === productName) {
            console.log(products[i])
            openModal(products[i])
        }
        
    }
}



function showAllProducts(){
    template = " ";

    items.forEach(item => {
        template += ` 

        `
    })
}

