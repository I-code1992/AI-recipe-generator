function displayRecipe(response) {
  new Typewriter("#idea", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function giveRecipe(event){
    event.preventDefault();


let userInput= document.querySelector("#request");
let apiKey ="5eb0eof63a40df20e382fa4batcaf05e";
let prompt =`Generate a recipe about ${userInput.value}`;
let context ="You are a world famous chef that focus on making healthy recipe for fitness and health.Do not use US metrics and make sure it is short and simple.Please generate the recipe in HTML and do not show the word html, separate each ingredients and instructions in </br> without space in between. ";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#idea");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a healthy recipe with ${userInput.value}</div>`;

axios.get(apiURL).then(displayRecipe);
}

let requestInput = document.querySelector("#recipe-generator-form");
requestInput.addEventListener("submit", giveRecipe); 

