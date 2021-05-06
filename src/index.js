//CONSTS
const dogBarDiv = document.querySelector("div#dog-bar")
const dogInfoDiv = document.querySelector("div#dog-info")


//FUNCTIONS
function fetchAll(){
fetch ("http://localhost:3000/pups")
.then(response => response.json())
  .then(dogArray => renderDogs(dogArray));
}
fetchAll()

function renderDogs (dogArray){
    dogArray.forEach((dogObject)=>{
       let dogSpan = document.createElement("span")
        dogSpan.innerHTML = `${dogObject.name}`
       dogBarDiv.append(dogSpan)

    function isGoodDog(){
        `${dogObject.isGoodDog}`
    }

//EVENT LISTENERS

       
dogSpan.addEventListener("click", (event)=>{
    // let dogImage = event.target.image
    // let dogName = event.target.name
    // let isGoodDog = event.target.isGoodDog
    const image = document.createElement('img')
    const dogButton = document.createElement('button');

// document.body.appendChild(inputElement); 
    let belowDogSpan = document.createElement("span")
    belowDogSpan.innerHTML = `name: ${dogObject.name} <br></br> <img src="${dogObject.image}" /> <br></br> 
    <button onclick="isGoodDog()"> Is Good Dog?</button>`
    dogInfoDiv.append(belowDogSpan)


})
    })}
