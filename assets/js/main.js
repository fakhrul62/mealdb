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
        div.classList = `col-3`;
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

const getThatCategory = (data) =>{
    window.location.href = `../../meals.html?id=${data}`;
    console.log(data);
}

meal();