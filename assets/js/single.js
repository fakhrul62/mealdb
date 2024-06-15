const singleMealFunction = async () => {
    try {
        // Retrieve the id from the URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        if (id) {
            // Fetch data using the id from the API
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await res.json();
            const element = data.meals;
            getSingleMeal(element);
            const headingSingle = document.getElementById('recipe-name');
            headingSingle.innerHTML = element[0].strMeal;
            // Further processing of fetched data
        } else {
            console.error('No id parameter found in the URL');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const getSingleMeal = (meals) =>{
    const getSingleContainer = document.getElementById('single');
    meals.forEach(element => {
        
        const div = document.createElement('div');
        div.classList = `row row-gap-4 column-gap-4 d-flex flex-wrap`;
        div.innerHTML = `
            <div class="col-4">
                <div class="card">
                    <div class="card-img">
                        <img src="${element.strMealThumb}" class="card-img-top object-fit-contain w-100" alt="${element.strMeal}">
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <h5>Category: ${element.strCategory}</h5>
                    <h5>Origin: ${element.strArea}</h5>
                </div>
            </div>
            <div class="col-7">
                <h2>Ingreidents</h2>
                <div class="row row-gap-5 pt-5">
                <div class="col-3"><h5>${element.strIngredient1 ? element.strIngredient1 : ''}</h5><h6>${element.strMeasure1 ? element.strMeasure1 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient2 ? element.strIngredient2 : ''}</h5><h6>${element.strMeasure2 ? element.strMeasure2 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient3 ? element.strIngredient3 : ''}</h5><h6>${element.strMeasure3 ? element.strMeasure3 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient4 ? element.strIngredient4 : ''}</h5><h6>${element.strMeasure4 ? element.strMeasure4 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient5 ? element.strIngredient5 : ''}</h5><h6>${element.strMeasure5 ? element.strMeasure5 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient6 ? element.strIngredient6 : ''}</h5><h6>${element.strMeasure6 ? element.strMeasure6 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient7 ? element.strIngredient7 : ''}</h5><h6>${element.strMeasure7 ? element.strMeasure7 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient8 ? element.strIngredient8 : ''}</h5><h6>${element.strMeasure8 ? element.strMeasure8 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient9 ? element.strIngredient9 : ''}</h5><h6>${element.strMeasure9 ? element.strMeasure9 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient10 ? element.strIngredient10 : ''}</h5><h6>${element.strMeasure10 ? element.strMeasure10 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient11 ? element.strIngredient11 : ''}</h5><h6>${element.strMeasure11 ? element.strMeasure11 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient12 ? element.strIngredient12 : ''}</h5><h6>${element.strMeasure12 ? element.strMeasure12 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient13 ? element.strIngredient13 : ''}</h5><h6>${element.strMeasure13 ? element.strMeasure13 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient14 ? element.strIngredient14 : ''}</h5><h6>${element.strMeasure14 ? element.strMeasure14 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient15 ? element.strIngredient15 : ''}</h5><h6>${element.strMeasure15 ? element.strMeasure15 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient16 ? element.strIngredient16 : ''}</h5><h6>${element.strMeasure16 ? element.strMeasure16 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient17 ? element.strIngredient17 : ''}</h5><h6>${element.strMeasure17 ? element.strMeasure17 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient18 ? element.strIngredient18 : ''}</h5><h6>${element.strMeasure18 ? element.strMeasure18 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient19 ? element.strIngredient19 : ''}</h5><h6>${element.strMeasure19 ? element.strMeasure19 : ''}</h6></div>
                <div class="col-3"><h5>${element.strIngredient20 ? element.strIngredient20 : ''}</h5><h6>${element.strMeasure20 ? element.strMeasure20 : ''}</h6></div>
                </div>
            </div>
            <div class="row">
                <div class="col-7">
                    <h5>Instructions</h5>
                    <p>${element.strInstructions}</p>
                </div>
                <div class="col-5 d-flex align-items-center justify-content-center">
                   <a href="${element.strYoutube}" target=blank> <i class="fa-brands fa-youtube single-icon"></i></a>
                </div>
            </div>
        `;
        getSingleContainer.appendChild(div);
    });
}


singleMealFunction()