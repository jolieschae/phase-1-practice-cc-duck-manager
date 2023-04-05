let duckNav = document.getElementById("duck-nav")
let duckImageDisplay = document.getElementById("duck-display-image")
let duckNameDisplay = document.getElementById("duck-display-name")
let likeButton = document.getElementById("duck-display-likes")
let form = document.getElementById("new-duck-form")
let newDuckName
let newDuckImage

fetch("http://localhost:3000/ducks")
.then(response => response.json())
.then(data => renderDucks(data));

function renderDucks(ducks){
    ducks.forEach((duck) => {
        let duckImage = document.createElement("img");
        duckImage.src = duck.img_url;
        duckNav.append(duckImage);

        duckImage.addEventListener("click", () => {
            duckNameDisplay.textContent = duck.name;
            duckImageDisplay.src = duck.img_url;
            likeButton.textContent = duck.likes;
         });
    });
};

likeButton.addEventListener("click", () => {
    likeButton.textContent++;
 });

 form.addEventListener("submit", (e) => {
    e.preventDefault()
    let newValue = parseInt(e.target.likes.value) + parseInt(likeButton.textContent)
    likeButton.textContent = newValue
 });
