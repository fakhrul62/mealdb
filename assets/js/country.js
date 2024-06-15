const countryFunction = async () => {
    try {
        // Retrieve the id from the URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        if (id) {
            // Fetch data using the id from the API
            const res = await fetch(`https://themealdb.com/api/json/v1/1/list.php?a=list`);
            const data = await res.json();
            const element = data.meals;
            console.log(element)
            getCountryMeals(element);
            // Further processing of fetched data
        } else {
            console.error('No id parameter found in the URL');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const getCountryMeals = (meals) =>{
    const getCountryContainer = document.getElementById('country-list');
    meals.forEach(element => {
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
        getCountryContainer.appendChild(div);
    });
}

countryFunction();

