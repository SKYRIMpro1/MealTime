var foodInput = document.getElementById('food-search');
var foodRecipeEl = document.getElementById('food-recipe');

var apiKey = "o7645HZzM0ujmdeIjvnj4W328P77zYuFTWFGoXhL";

console.log('loaded')

function getFoodInfo() {
    var foodNameEl = document.getElementById("food-search")
    var apiFoodUsda = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=' + apiKey + '&query=' + foodNameEl.value

fetch(apiFoodUsda)
    .then(function(response) {
        return response.json();
})
    .then(function(data) {
    foodRecipeEl.innerHTML = "Recipe: " + (data.foods[0].value);
    console.log(data)
});
}

var submitBtn = document.getElementById("search-btn");
submitBtn.addEventListener("click", getFoodInfo);