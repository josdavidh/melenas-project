const accessories = [{
    name: "Chulo tipo pañoleta",
    price: "$12.000 Cop",
    materials: "Saten - microfibra",
    category: "Accesorio",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
    img1: "./img/products/gorros1.JPG",
    img2: "./img/products/gorros1.JPG",
    img3: "./img/products/gorros1.JPG",
    img4: "./img/products/gorros1.JPG"
}];

const shower = [{
    name: "Toalla tipo turbante",
    price: "$25.000 Cop",
    materials: "Microfibra",
    category: "Ducha",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
    img1: "./img/products/gorros3.JPG",
    img2: "./img/products/gorros3.JPG",
    img3: "./img/products/gorros3.JPG",
    img4: "./img/products/gorros3.JPG"
}];

const sleep = [{
    name: "Gorro encarterar",
    price: "$25.000 Cop",
    materials: "Satén",
    category: "Para dormir",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem dolore asperiores nemo saepe in, aliquid perspiciatis error vitae debitis consequatur cupiditate aspernatur cum! Quae quam mollitia consequuntur molestiae atque!",
    img1: "./img/products/gorros-azules.jpg",
    img2: "./img/products/gorros-azules.jpg",
    img3: "./img/products/gorros-azules.jpg",
    img4: "./img/products/gorros-azules.jpg"
}];

let btnAccessories = document.querySelector("#accessories");
let btnShower = document.querySelector("#shower");
let btnSleep = document.querySelector("#sleep");

const mainContainer = document.getElementById("main-container");

btnAccessories.addEventListener("click", function(e){
    showAccessories();
});

btnShower.addEventListener("click", function(e){
    showShower();
});

btnSleep.addEventListener("click", function(e){
    showSleep();
});

function showAccessories (){
    console.log(accessories);
}

function showShower (){
    console.log(shower);
}

function showSleep(){
    console.log(sleep);
}


