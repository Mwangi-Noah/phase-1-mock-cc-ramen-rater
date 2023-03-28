const ramenMenu = document.querySelector("#ramen-menu");
const form = document.getElementById("ramen-rating")

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
    img.alt = ramen.name 
    img.dataset.id = ramen.id
    ramenMenu.append(img);

    img.addEventListener("click", function(e){
        getRamen(e.target.dataset.id);
    });     
}



function getRamen(ramenId){
    fetch(`http://localhost:3000/ramens/${ramenId}`)
    .then(response => response.json())
    .then(ramen => {
        showDetails(ramen)
    })
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
function updateForm(){

    const form = document.getElementById("ramen-rating")
    form.addEventListener("submit", function(e) {
        e.preventDefault();
                // console.log(e);
        const newRating = document.querySelector("#rating").value
        const newComment = document.querySelector("#comment").value
          
        const updatedObj = {
            id: parseInt(ramenForm.dataset.id),
            rating: newRating,
            comment: newComment
        }
    })
}