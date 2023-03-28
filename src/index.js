const ramenMenu = document.querySelector("#ramen-menu");

document.addEventListener("DOMContentLoaded", () => {
    loadRamen();
})
function loadRamen(){
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(initializeRamen);
}
function initializeRamen(ramArray){
    ramArray.forEach(ramen => {
        renderRamen(ramen);
    });
}

function renderRamen(ramen){
    const img = document.createElement("img")
    // console.log(ramen)
    img.src = ramen.image; 
    ramenMenu.append(img);

    img.addEventListener("click", () => {
        showDetails(ramen);
    });     
}

function showDetails(){
    let image = document.querySelector(".detail-image");
    let name = document.querySelector(".name");
    let restaurant = document.querySelector(".restaurant");
    let rating = document.getElementById("rating");
    let comment = document.getElementById("comment");
    rating.value = ramen.rating;
    comment.value = ramen.comment;
    image.src = ramen.image;
    image.alt = ramen.name;
    name.textContent = ramen.name;
    restaurant.textContent = ramen.restaurant;
    const form = document.querySelector("#ramen-rating")
    form.dataset.id = ramen.id;
}