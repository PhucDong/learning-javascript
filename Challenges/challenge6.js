// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

let containerEl = document.getElementById("container");

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function render(images) {
    let listImages = "";

    for (let i=0; i < images.length; i++) {
        listImages += `
            <img alt="Employee in the company" class="team-img" src="${images[i]}">
        `;
    }

    containerEl.innerHTML = listImages;
}

render(imgs);