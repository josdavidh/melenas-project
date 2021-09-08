document.addEventListener("DOMContentLoaded", function(event) {
    // 'data base' products
const products = [
    {
        name: "Scrunchies",
        price: "$12.000 Cop",
        materials: "Saten - microfibra",
        category: "Accsorio",
        description: "Las scrunchies son los productos más divertidos de nuestra casa pues encuentras muchísimos colores, estilos, tamaños y formas para darle variedad a tus pintas, color a tu cabello, acompañar tus peinados y lo más importante, sin maltratar tu cabello",
        mainImg: "./img/products/chulos/DSC06844.jpg",
        img1: "./img/products/chulos/DSC06654.jpg",
        img2: "./img/products/chulos/DSC06461.jpg",
        img3: "./img/products/chulos/DSC06839.jpg"
    },
    {
        name: "Capa",
        price: "$25.000 Cop",
        materials: "Saten - microfibra",
        category: "Ducha",
        description: "Accesorio perfecto para proteger tu ropa del cabello mojado al salir de la ducha y acompañar tu rutina de definición. La capa cuenta con un lado impermeable para no traspasar la humedad a tu ropa y el otro lado en tela toalla de microfibra para secar solo lo necesario y quitar el exceso de producto.",
        mainImg: "./img/products/capas/DSC06855.jpg",
        img1: "./img/products/capas/DSC06561.jpg",
        img2: "./img/products/capas/DSC06565.jpg",
        img3: "./img/products/capas/DSC06319.jpg"
    },
    {
        name: "Manga santín",
        price: "$20.000 Cop",
        materials: "Saten - microfibra",
        category: "Para dormir",
        description: "Gorro de satín tipo manga diseñado especialmente para proteger tu cabello al dormir, conservar la definición, hidratación y forma, además tiene dos cintas para que lo ajustes con la medida ideal para que no te aprete y sea muy cómodo",
        mainImg: "./img/products/mangas-satin/DSC06448.jpg",
        img1: "./img/products/mangas-satin/DSC06460.jpg",
        img2: "./img/products/mangas-satin/DSC06606.jpg",
        img3: "./img/products/mangas-satin/DSC06795.jpg"
    },
    {
        name: "Toalla tipo turbante",
        price: "$25.000 Cop",
        materials: "Saten - microfibra",
        category: "Ducha",
        description: "Toalla tipo turbante en tela de microfibra para secar tu cabello sin maltratarlo mientras te vistes, te maquillas o haces cualquier otra actividad. Puedes usarlo también para hacer scrunch o y quitar el exceso de producto sin secar de más.",
        mainImg: "./img/products/turbantes-microfibra/DSC06672.jpg",
        img1: "./img/products/turbantes-microfibra/DSC06676.jpg",
        img2: " ",
        img3: " "
    },
    {
        name: "Gorro lycra",
        price: "$30.000 Cop",
        materials: "Saten - microfibra",
        category: "Para dormir",
        description: "Gorro de satín doble faz diseñado especialmente para proteger tu cabello al dormir, conservar la definición, hidratación y forma. Cuenta con un diseño diferente en cada lado para que lo puedas usar por el lado que quieras y cambies de estilo cada noche, además tiene un sistema de ajuste tradicional con la medida ideal para que no te aprete y sea muy cómodo.",
        mainImg: "./img/products/gorros-lycra/DSC06641.jpg",
        img1: "./img/products/gorros-lycra/DSC06437.jpg",
        img2: "./img/products/gorros-lycra/DSC06427.jpg",
        img3: " "
    },
    {
        name: "Pañoleta",
        price: "$12.000 Cop",
        materials: "Saten - microfibra",
        category: "Accesorio",
        description: "Les presentamos nuestras hermosas pañoletas. Un excelente complemento para usar de muchísimas formas y darle un toque diferente a tu cabello o tus pintas",
        mainImg: "./img/products/pañoletas/DSC06373.jpg",
        img1: "./img/products/pañoletas/DSC06537.jpg",
        img2: "./img/products/pañoletas/DSC06374.jpg",
        img3: "./img/products/pañoletas/DSC06535.jpg"
    },
    {
        name: "Gorro impermeable",
        price: "$25.000 Cop",
        materials: "Saten - microfibra",
        category: "Ducha",
        description: "Gorro doble faz con un lado impermeable y otro de satín que funciona perfecto con el lado impermeable por fuera para proteger tu cabello del agua en la ducha en esos días donde no lo lavas y por el lado impermeable hacia adentro para aplicar mascarillas o tratamientos y dejarlo actuar el tiempo que quieras.",
        mainImg: "./img/products/gorros-impermeables/DSC06695.jpg",
        img1: "/img/products/gorros-impermeables/DSC06356.jpg",
        img2: "./img/products/gorros-impermeables/DSC06833.jpg",
        img3: " "
    },
    {
        name: "Gorro encaretar",
        price: "$25.000 Cop",
        materials: "Saten - microfibra",
        category: "Para dormir",
        description: "Gorro de satín doble faz diseñado especialmente para proteger tu cabello al dormir, conservar la definición, hidratación y forma. Cuenta con un diseño diferente en cada lado para que lo puedas usar por el lado que quieras y cambies de estilo cada noche, además tiene un sistema de ajuste tradicional con la medida ideal para que no te aprete y sea muy cómodo.",
        mainImg: "./img/products/gorros-doble-encaretar/DSC06398.jpg",
        img1: "./img/products/gorros-doble-encaretar/DSC06405.jpg",
        img2: "./img/products/gorros-doble-encaretar/DSC06637.jpg",
        img3: " "
    },
    {
        name: "Funda de almohada",
        price: "$20.000 Cop",
        materials: "Saten - microfibra",
        category: "Para dormir",
        description: "Fundas de almohada en satina con una sensación increíble de confort y suavidad que ayudas a cuidar tu cabello y tu piel ya que evita la fricción, previene el frizz y cuida la hidratación de tu cabello y tu piel.",
        mainImg: "/img/products/fundas-almohada/DSC06710.jpg",
        img1: "./img/products/fundas-almohada/DSC06494.jpg",
        img2: "./img/products/fundas-almohada/DSC06713.jpg",
        img3: "./img/products/fundas-almohada/DSC06731.jpg"
    },
    {
        name: "Balaca Cross",
        price: "$9.000 Cop",
        materials: "Saten - microfibra",
        category: "Accesorio",
        description: "Nuestra balaca Cross es el aliado perfecto para recoger tu cabello con estilo. Esta balaca tiene un cruce en la parte delantera y elástico en la parte trasera para ajustarse a tu cabeza.",
        mainImg: "./img/products/balacas/DSC06850.jpg",
        img1: "./img/products/balacas/DSC06659.jpg",
        img2: "./img/products/balacas/DSC06482.jpg",
        img3: " "
    },
    {
        name: "Toalla sencilla",
        price: "$15.000 Cop",
        materials: "Saten - microfibra",
        category: "Ducha",
        description: "toalla sencilla de 50x60 cm en tela de microfibra para secar tu cabello haciendo scrunch y quitar el exceso de producto sin secar de más.",
        mainImg: "./img/products/toallas-sencillas/DSC06681.jpg",
        img1: "./img/products/toallas-sencillas/DSC06684.jpg",
        img2: " ",
        img3: " "
    },
];

//nav-buttons

let nosotros = document.getElementById("nosotros");
let productos = document.getElementById("productos");
let promos = document.getElementById("promo");
let contacto = document.getElementById("contacto");

//Category Buttons
let btnAccessories = document.getElementById("accessories");
let btnShower = document.getElementById("shower");
let btnSleep = document.getElementById("sleep");
let btnAllProducts = document.getElementById("all-products");

//btn button 
document.querySelector(".menu-btn").addEventListener('click', function(e){
    document.querySelector(".nav-items-responsive").classList.toggle("show");
    document.querySelector(".body").classList.toggle("scroll-stop");
})



//Modal Variables
let productsInlayout = []; // contains products that can see on the screen 

let closeModal = document.querySelectorAll(".close-modal")[0];
let productLinks = document.querySelectorAll(".product-link");
let modal = document.querySelectorAll(".modal-products")[0];
let modalContainer = document.querySelectorAll(".modal-container")[0];

productLinks.forEach(element => {
    productsInlayout.push(element);
    
});


const productsContainer = document.querySelector(".products-container");



productsContainer.addEventListener('click', function(e){
    

    if(e.target.classList.contains("product-link")){
        showModal(productsInlayout,e.target)     
    }
    
})

nosotros.addEventListener("click",function(e){
    document.querySelector(".nav-items-responsive").classList.toggle("show");
    document.querySelector(".body").classList.toggle("scroll-stop");
})

productos.addEventListener("click",function(e){
    document.querySelector(".nav-items-responsive").classList.toggle("show");
    document.querySelector(".body").classList.toggle("scroll-stop");
})

promos.addEventListener("click",function(e){
    document.querySelector(".nav-items-responsive").classList.toggle("show");
    document.querySelector(".body").classList.toggle("scroll-stop");
})

contacto.addEventListener("click",function(e){
    document.querySelector(".nav-items-responsive").classList.toggle("show");
    document.querySelector(".body").classList.toggle("scroll-stop");
})


btnAllProducts.addEventListener("click", function (e){
    showAllProducts();

    btnAccessories.style = "inherit";
    btnShower.style = "inherit";
    btnSleep.style = "inherit";
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
                    <img loading="lazy" src="${item.mainImg}" alt="">
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

    
    ScrollReveal().reveal('.item', {
        duration: 900,
        origin: 'bottom',
        distance: '50px',
        delay:555
    });

    //fit the products that we can see
    productLinks.forEach(element => {
        productsInlayout.push(element); //fit products

    });

}

function showAllProducts () {

    template = " ";

    products.forEach(item => {
        template += ` 
        <div class="item">
            <div class="product-link">
                <img loading="lazy" src="${item.mainImg}" alt="">
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
    })

    productsContainer.innerHTML = template;

    productLinks = [];
    productsInlayout = [];

    productLinks = productsContainer.querySelectorAll(".product-link")


    ScrollReveal().reveal('.item', {
        duration: 900,
        origin: 'bottom',
        distance: '50px',
        delay:555
    });

        //fit the products that we can see
        productLinks.forEach(element => {
            console.log(element)
            productsInlayout.push(element); //fit products
            
        });
    
}

function hiddenModal(){

    document.querySelector(".body").classList.toggle("scroll-stop");

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

    document.querySelector(".body").classList.toggle("scroll-stop");

    modalMainImage.innerHTML = `<img loading="lazy" src="${product.mainImg}" alt="">`

    modalImage1.innerHTML = `<img loading="lazy" src="${product.img1}" alt="">`

    if(product.img2 != " "){
        modalImage2.innerHTML = `<img loading="lazy" src="${product.img2}" alt="">`
    } else {
        modalImage2.innerHTML = " "
    }

    if(product.img3 != " "){
        modalImage3.innerHTML = `<img loading="lazy" src="${product.img3}" alt="">`
    } else {
        modalImage3.innerHTML = " "
    }


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

    console.log(productSelected)

    for (let i = 0; i < products.length; i++) {
        if(products[i].name === productName) {
            console.log(products[i])
            openModal(products[i])
        }
        
    }
}


ScrollReveal().reveal('.carousel-texts', {
    duration: 1000,
    origin: 'top',
    distance: '100px',
    delay:800
});


ScrollReveal().reveal('.carousel-texts', {
    duration: 1000,
    origin: 'top',
    distance: '100px',
    delay:800
});



ScrollReveal().reveal('.item', {
    duration: 900,
    delay:555
});


ScrollReveal().reveal('.section-promo1-left', {
    duration: 900,
    origin: 'left',
    distance: '50px',
    delay:555
});

ScrollReveal().reveal('.section-promo1-right', {
    duration: 900,
    origin: 'right',
    distance: '50px',
    delay:555
});

ScrollReveal().reveal('.section-promo2-right', {
    duration: 900,
    origin: 'bottom',
    distance: '50px',
    delay:555
});
ScrollReveal().reveal('.section-promo2-left', {
    duration: 900,
    origin: 'top',
    distance: '50px',
    delay:555
});

ScrollReveal().reveal('.section-promo3-left', {
    duration: 900,
    origin: 'left',
    distance: '50px',
    delay:555
});

ScrollReveal().reveal('.section-promo3-right', {
    duration: 900,
    origin: 'right',
    distance: '50px',
    delay:555
});


});


