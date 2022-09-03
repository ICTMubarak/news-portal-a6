const loadNewsCatagory = () => {
    // const url = https://openapi.programming-hero.com/api/news/categories;
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCatagory(data))
    // .catch(error => console.log(error))
}

const displayCatagory = data => {
    const catagoryArr = data.data.news_category;
    console.log(catagoryArr);
    const catagoryContainer = document.getElementById('catagory-container');
    catagoryArr.forEach(catagory => {
        const catagoryDiv = document.createElement('div');
        catagoryDiv.innerHTML = `
          <h6>${catagory.category_name}</h6>
        `;
        catagoryContainer.appendChild(catagoryDiv);
    })
}




loadNewsCatagory();