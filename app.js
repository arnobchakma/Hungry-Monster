function onclickWithBtn() {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput === "") {
        alert('Please type at least one items in search')
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data.meals));
        document.getElementById('search-input').value = "";
    };
};

function displayData(data) {
    const searchMeal = document.getElementById('search-meal');
    searchMeal.innerHTML = "";
    const emptyIngredientList = document.getElementById('ingredient-list');
    emptyIngredientList.innerHTML = "";
    data.forEach(meal => {
        const createDiv = document.createElement('div');
        createDiv.className = 'single-meal';
        const mealInfo = `
        <div class="style-meal" onclick="ingredient('${meal.strMeal}')">
            <img src="${meal.strMealThumb}">;
            <h3>${meal.strMeal}</h3>
        </div>
        `
        createDiv.innerHTML = mealInfo;
        searchMeal.appendChild(createDiv);
    });
}

const ingredient = mealList => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealList}`;
    fetch(url)
        .then(res => res.json())
        .then(data => innerIngredient(data.meals[0]))
}

const innerIngredient = meal => {
    const ingredientList = document.getElementById('ingredient-list');
    ingredientList.innerHTML = `
    <div id="inner-meal-style">
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
    </div>
    <div id="meal-list">
        <h4>Ingredient List</h4>
        <p>${meal.strIngredient1}</p>
        <p>${meal.strIngredient2}</p>
        <p>${meal.strIngredient3}</p>
        <p>${meal.strIngredient4}</p>
        <p>${meal.strIngredient5}</p>
        <p>${meal.strIngredient6}</p>
        <p>${meal.strIngredient7}</p>
        <p>${meal.strIngredient8}</p>
        <p>${meal.strIngredient9}</p>
        <p>${meal.strIngredient10}</p>
    </div>
    `
}