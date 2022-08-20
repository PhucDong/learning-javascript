// function getFirst(arr) {
//     return arr[0];
// }

// console.log(getFirst(["apple", "orange"]));

let showBtn = document.querySelector("#show-btn")
let feedEl = document.querySelector("#feed")

showBtn.addEventListener("click", function() {
    let xhr = new XMLHttpRequest() // store XMLHttpRequest object to xhr

    xhr.open("GET", "https://restcountries.com/v3.1/all", true) // initialize the request

    xhr.send()
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            // console.log("Success")
            let countries = JSON.parse(this.response)
            console.log(countries)
            countries.forEach(country => {
                // countryCard.textContent = country.name.official
                feedEl.appendChild(countryCard(country))
            })
        }
    }
})

function countryCard(nation) {
    const containerEl = document.createElement("div")
    let cardElements = `
        <img alt="${nation.name.official}" src="${nation.flags.png}">
        <p>${nation.name.official}</p>
    `
    containerEl.innerHTML = cardElements

    return containerEl
}