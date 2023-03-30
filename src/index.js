//This section declares all the variables globally meaning all functions within have access to them
const ramenMenu = document.querySelector("#ramen-menu");
const form = document.querySelector("#new-ramen")
let ramenImage = document.getElementsByClassName("detail-image")[0];
let ramenName = document.getElementsByClassName("name")[0];
let restaurant = document.getElementsByClassName("restaurant")[0];
let rating = document.getElementById("rating-display");
let comment = document.getElementById("comment-display");
let i;

//This loads the function loadRamen that fetches ramen array from db once the DOM loads
document.addEventListener("DOMContentLoaded", () => {
    loadRamen();
})

//function to fetch all the ramen data from db as array
function loadRamen(){
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then((data) => {
        window.addEventListener("load", showDetails(data));
        renderRamen(data);
      })
}

//This function adds all the relevant infomation to the loading page
function showDetails(ramen){
       
    rating.textcontent = ramen[0].rating;
    comment.textContent = ramen[0].comment;
    ramenImage.src = ramen[0].image;
    ramenImage.alt = ramen.name;
    ramenName.textContent = ramen[0].name;
    restaurant.textContent = ramen[0].restaurant;
    const form = document.querySelector("#ramen-rating")
}
//In this section, we loop through each ramen and display their details on the top menu
function renderRamen(ramenList){
    ramenList.map(ramen => {
     let img = document.createElement("img")
     // console.log(ramen)
     img.src = ramen.image; 
     img.alt = ramen.name 
     img.dataset.id = ramen.id
     ramenMenu.appendChild(img);
     //we add an event listener that highlights a chosen ramen and displays it centerstage
     img.addEventListener("click", () => {
        rating.textcontent = ramen.rating;
        comment.textContent = ramen.comment;
        ramenImage.src = ramen.image;
        ramenName.textContent = ramen.name;
        restaurant.textContent = ramen.restaurant;
     })
     }); 
 }

 //Form Submission and menu creation
 form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newRamenData = {
      name: e.target["new-name"].value,
      restaurant: e.target["new-restaurant"].value,
      image: e.target["new-image"].value,
      rating: e.target["new-rating"].value,
      comment: e.target["new-comment"].value,
    };
    createRamen(newRamenData);
    form.reset();
  });
  //This function uses fetch and post to add a new Ramen item to the db server
  function createRamen(data) {
    img.src = data.image;
    ramenMenu.append(img);
    fetch("http://localhost:3000/ramens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(info),
    })
    .then((response) => response.json())
    .then((ramen))
  }
//Thank you very much and happy coding!!!!!!!!!!