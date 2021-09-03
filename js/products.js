const products = [
    {
        name: "Accesorio",
        price: "$12.000 Cop",
        materials: "Saten - microfibra",
        category: "Accesorio",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
        img1: "./img/products/gorros1.JPG",
        img2: "./img/products/gorros1.JPG",
        img3: "./img/products/gorros1.JPG",
        img4: "./img/products/gorros1.JPG"
    },
    {
        name: "Accesorio",
        price: "$12.000 Cop",
        materials: "Saten - microfibra",
        category: "Accesorio",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
        img1: "./img/products/gorros1.JPG",
        img2: "./img/products/gorros1.JPG",
        img3: "./img/products/gorros1.JPG",
        img4: "./img/products/gorros1.JPG"
    },
    {
        name: "Accesorio",
        price: "$50.000 Cop",
        materials: "Saten - microfibra",
        category: "Accesorio",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
        img1: "./img/products/gorros1.JPG",
        img2: "./img/products/gorros1.JPG",
        img3: "./img/products/gorros1.JPG",
        img4: "./img/products/gorros1.JPG"
    },
    {
        name: "Ducha",
        price: "$25.000 Cop",
        materials: "Microfibra",
        category: "Ducha",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
        img1: "./img/products/gorros3.JPG",
        img2: "./img/products/gorros3.JPG",
        img3: "./img/products/gorros3.JPG",
        img4: "./img/products/gorros3.JPG"
    },
    {
        name: "Para dormir",
        price: "$25.000 Cop",
        materials: "Satén",
        category: "Para dormir",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
        img1: "./img/products/gorros-azules.jpg",
        img2: "./img/products/gorros-azules.jpg",
        img3: "./img/products/gorros-azules.jpg",
        img4: "./img/products/gorros-azules.jpg"
    }

];


let btnAccessories = document.getElementById("accessories");
let btnShower = document.getElementById("shower");
let btnSleep = document.getElementById("sleep");

btnAccessories.addEventListener("click", function (e) {
    showProducts(products,"Accesorio");
    btnAccessories.style.backgroundColor = "#b78372";
    btnAccessories.style.border = " 1px solid #b78372";

    btnShower.style = "inherit";
    btnSleep.style = "inherit";
});

btnShower.addEventListener("click", function (e) {
    showProducts(products,"Ducha");
    btnShower.style.backgroundColor = "#b78372";
    btnShower.style.border = " 1px solid #b78372";

    btnAccessories.style = "inherit";
    btnSleep.style = "inherit";
});

btnSleep.addEventListener("click", function (e) {
    showProducts(products,"Para dormir");
    btnSleep.style.backgroundColor = "#b78372";   
    btnSleep.style.border = " 1px solid #b78372";

    btnAccessories.style = "inherit";
    btnShower.style = "inherit";
});


let template = " ";

const productsContainer = document.querySelector(".products-container");

function showProducts(items,category) {
    console.log(items);


    //Empty template
    template = " ";
    

    //create template with the products
    items.forEach(item => {

        if(item.category === category){
            template += ` 
            <div class="item">
                <a href="#" class="product-link">
                <img src="./img/products/gorros1.JPG" alt="">
                <section class="item-header">
                    <h2>${item.name}</h2>
                    <h4>${item.price}</h4>
                </section>
                <section class="item-footer">
                    <h3>3 Und Disponibles <i class="fas fa-shopping-cart"></i></h3>
                </section>
                </a>
            </div>
            `
        } else {
            template += ""
        }

    })

    //show products
    productsContainer.innerHTML = template;

}

function showAllProducts(){
    template = " ";

    items.forEach(item => {
        template += ` 
        <div class="item">
            <a href="#" class="product-link">
            <img src="./img/products/gorros1.JPG" alt="">
            <section class="item-header">
                <h2>${item.name}</h2>
                <h4>${item.price}</h4>
            </section>
            <section class="item-footer">
                <h3>3 Und Disponibles <i class="fas fa-shopping-cart"></i></h3>
            </section>
            </a>
        </div>
        `
    })
}



