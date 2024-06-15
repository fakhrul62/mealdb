const categoryFunction = async () => {
    try {
        // Retrieve the id from the URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        if (id) {
            // Fetch data using the id from the API
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);
            const data = await res.json();
            const element = data.meals;
            getCategorizedMeals(element);
            const heading = document.getElementById('cat-name');
            heading.innerHTML = id;
            // Further processing of fetched data
        } else {
            console.error('No id parameter found in the URL');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const getCategorizedMeals = (meals) =>{
    const getCategorizedContainer = document.getElementById('categorized');
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
        getCategorizedContainer.appendChild(div);
    });
}
const getThatMeal = (data) =>{
    window.location.href = `../../single.html?id=${data}`;
}

categoryFunction();

