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
    recipeNameEl.innerHTML = "Recipe Name: " + (data.meals[0].strMeal);
    recipePicEl.innerHTML = "Pictures: " + (data.meals[0].strYouTube);
    recipeDescEl.innerHTML = "Recipe Instructions: " + (data.meals[0].strInstructions);
    console.log(data.meals[0].strMeal) 
    ingredientsEl.innerHTML = "Ingredients: " + (data.meals[0].strIngredient1);
    
    var ingredientsArr = []
    
    for (let i = 0; i < ingredientsArr.length; i++) {
    console.log(ingredientsArr);
    }
});

}

var submitBtn = document.getElementById("search-btn");
submitBtn.addEventListener("click", getFoodInfo);