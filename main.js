
console.log("This is our pickle app")

fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((characters) => {
    console.log(characters)
})