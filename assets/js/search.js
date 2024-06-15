const searchMeal = async (id) => {
    const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${id}`);
    const resJson = await res.json();
    const data = resJson.meals;
    getSearchMeal(data);
}

const getSearchMeal = (meal) => {
    const searchedMeals = document.getElementById('searchedMeals');
    searchedMeals.innerHTML = "";
    meal.forEach(element => {
        const div = document.createElement('div');
        div.classList = `col-3`;
        div.innerHTML = `
            <a href="javascript:void(0)" onclick="getThatMeal('${element.idMeal}')">
                <div class="card">
                    <div class="card-img">
                        <img src="${element.strMealThumb}" class="card-img-top object-fit-contain w-100" alt="${element.strMeal}">
                    </div>
                    <div class="card-body">
                        <div class="align-items-end">
                            <a href="javascript:void(0)" onclick="getThatMeal('${element.idMeal}')" class="card-title">${element.strMeal}</a>
                        </div>
                        
                    </div>
                </div>
            </a>
        `;
        searchedMeals.appendChild(div);
        console.log(element)
    });

}
const getThatMeal = (data) => {
    window.location.href = `../../single.html?id=${data}`;
}

const searchInputValue = document.getElementById('search-input');
searchInputValue.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button-addon2").click();
    }
})
const getSearch = () => {
    const searchInputValue = document.getElementById('search-input');
    const searchInput = searchInputValue.value.toLowerCase();
    if(searchInputValue.value !== ""){
        searchMeal(searchInput);
    searchInputValue.value = "";
    }
}