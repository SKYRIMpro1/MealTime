var foodInput = document.getElementById('food-search');
var recipeNameEl = document.getElementById('recipe-name');
var ingredientsEl = document.getElementById('ingredients');
var recipeDescEl = document.getElementById('recipe-desc')
var recipePicEl = document.getElementsByTagName('recipe-pic');


var apiKey = "o7645HZzM0ujmdeIjvnj4W328P77zYuFTWFGoXhL";


function getFoodInfo() {
    var foodNameEl = document.getElementById("food-search")
    // var apiFoodUsda = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=' + apiKey + '&query=' + foodNameEl.value
    var mealDB = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + foodNameEl.value
fetch(mealDB)
    .then(function(response) {
        return response.json();
})
    .then(function(data) {
//    loop for the top 3 results and display
    for (let i = 0; i < 3; i++) {
    const recipeInfo = document.querySelector('#recipe-info');
    
    const recipeContainer = document.createElement('div');

    const recipeName = document.createElement('h2');
    recipeName.textContent = 'Recipe Name: ' + (data.meals[i].strMeal);
    // sect.appendChild(recipeName);

    const instructions = document.createElement('p');
    instructions.textContent = 'Recipe Description: ' + (data.meals[i].strInstructions);

    
    // desc.appendChild(recipeDesc)

    recipeContainer.appendChild(recipeName);
    recipeContainer.appendChild(instructions);

    recipeInfo.appendChild(recipeContainer)
    console.log(data.meals[i].strMeal);
}
    
});

}

var submitBtn = document.getElementById("search-btn");
submitBtn.addEventListener("click", getFoodInfo);