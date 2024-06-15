const meal = async () => {
    const res = await fetch('https://themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();
    const element = data.categories;
    getMeal(element);
}
const getMeal = (food) => {
    const getDivContainer = document.getElementById('category-list');
    food.forEach(element => {
        const div = document.createElement('div');
        div.classList = `col-6 col-lg-2 col-xl-2 col-lg-3 col-md-3 col-sm-4`;
        div.innerHTML = `
            <a href="javascript:void(0)" onclick="getThatCategory('${element.strCategory}')">
                <div class="card">
                    <div class="card-img">
                        <img src="${element.strCategoryThumb}" class="card-img-top object-fit-contain h-75 w-100" alt="${element.strCategory}">
                    </div>
                    <div class="card-body">
                        <div class="d-flex">
                            <a href="javascript:void(0)" onclick="getThatCategory('${element.strCategory}')" class="card-title">${element.strCategory}</a>
                        </div>
                        
                    </div>
                </div>
            </a>
        `;
        getDivContainer.appendChild(div);
    });
}

const getThatCategory = (data) => {
    window.location.href = `../../meals.html?id=${data}`;
}

// random meal
const randomMeal = async () => {
    const res = await fetch(`https://themealdb.com/api/json/v1/1/random.php`);
    const data = await res.json();
    const random = data.meals[0];
    const randomDiv = document.getElementById('random-div');
    randomDiv.innerHTML = "";
    const div = document.createElement('div');
    div.innerHTML = `
            <a href="javascript:void(0)" onclick="getThatMeal('${random.idMeal}')">
                <div class="card">
                    <div class="card-img">
                        <img src="${random.strMealThumb}" class="card-img-top object-fit-contain h-75 w-100" alt="${random.strMeal}">
                    </div>
                    <div class="card-body">
                        <div class="d-flex">
                            <a href="javascript:void(0)" onclick="getThatMeal('${random.idMeal}')" class="card-title">${random.strMeal}</a>
                        </div>
                        
                    </div>
                </div>
            </a>
        `;
    randomDiv.appendChild(div);
}
const search = () => {
    window.location.href = '../../search.html';
}
//countries
const getCountries = async () => {
    const res = await fetch('https://themealdb.com/api/json/v1/1/list.php?a=list');
    const resJson = await res.json();
    const data = resJson.meals;
    const countryList = document.getElementById('country-list');
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList = `col-6 col-lg-2 col-xl-2 col-lg-3 col-md-3 col-sm-4`;
        div.innerHTML = `<a href="javascript:void(0)" onclick="getThatCountry('${element.strArea}')">${element.strArea}</a>`;
        countryList.appendChild(div);
    });
    
}
getCountries();
const getThatCountry = (data) => {
    window.location.href = `../../meals.html?country=${data}`;
}

meal();
randomMeal();