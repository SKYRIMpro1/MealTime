var foodInput = document.getElementById('food-search');
// var recipeNameEl = document.getElementById('recipe-name');
// var ingredientsEl = document.getElementById('ingredients');
// var recipeDescEl = document.getElementById('recipe-desc')
// var recipePicEl = document.getElementsByTagName('recipe-pic');


var apiKey = "o7645HZzM0ujmdeIjvnj4W328P77zYuFTWFGoXhL";


function getFoodInfo() {
    var foodNameEl = document.getElementById("food-search")
    // var apiFoodUsda = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=' + apiKey + '&query=' + foodNameEl.value
    var mealDB = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + foodNameEl.value
    
    // fetch data from mealDB api
    fetch(mealDB)
        .then(function(response) {
            return response.json();
    })
        .then(function(data) {
        const recipeInfo = document.querySelector('#recipe-info');
        recipeInfo.innerHTML = "" 
    //    loop for the top 3 results and display
        for (let i = 0; i < 3; i++) {
    
        const recipeContainer = document.createElement('div');

        const recipeName = document.createElement('h2');
        recipeName.textContent = (data.meals[i].strMeal);

        const instructions = document.createElement('p');
        instructions.textContent = (data.meals[i].strInstructions);

        recipeContainer.appendChild(recipeName);
        recipeContainer.appendChild(instructions);

        recipeInfo.appendChild(recipeContainer);
        console.log(data.meals[i].strMeal);
        }
    });
}
// search for nutritional value
function foodNutrition() {
    var usdaSearchEl = document.getElementById("food-search");
    var apiFoodUsda = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=' + apiKey + '&query=' + usdaSearchEl.value;

    fetch(apiFoodUsda) 
        .then(function(res) {
            console.log(res)
            return res.json();
            
    })
        .then(function(db) {
            console.log(db)
            const usda = document.querySelector('#nutrition');
            usda.innerHTML = ""
            const usdaTitle = document.createElement('h1');
            usdaTitle.textContent = "Nutritional Value: "
            usda.appendChild(usdaTitle);

            const usdaContainer = document.createElement('div');

            var foods = db.foods[0].foodNutrients
            

            for (let i = 0; i < foods.length; i++) {
                var food = foods[i];
                
            usdaName = document.createElement('h3');
            
            usdaName.textContent = food.nutrientName + " - " + food.value + food.unitName;
            
            usdaContainer.appendChild(usdaName);

            // console.log(apiFoodUsda)
            
            // console.log(db.foods[0].foodNutrients[i].nutrientName);
        }
        usda.appendChild(usdaContainer);
        })
}


var submitBtn = document.getElementById("search-btn");
submitBtn.addEventListener("click", function(){
    getFoodInfo();
    foodNutrition();
});