console.log('loaded')
fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=Cheddar%20Cheese')
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
})

