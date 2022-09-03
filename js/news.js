const loadNewsCatagory = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCatagory(data))
    // .catch(error => console.log(error))
}

const displayCatagory = data => {
    const catagoryID = data.data.news_category.category_id;
    
    const catagoryArr = data.data.news_category;
    
    const catagoryContainer = document.getElementById('catagory-container');
    catagoryArr.forEach(catagory => {
        const catagoryId = catagory.category_id; 
        console.log(catagoryId);
        const catagoryDiv = document.createElement('div');
        catagoryDiv.innerHTML = `
          <button onclick="loadNews(${catagoryId})"><h6>${catagory.category_name}</h6></button>
        `;
        catagoryContainer.appendChild(catagoryDiv);
    })
}

const loadNews = (catagoryId) =>{
        const url = `https://openapi.programming-hero.com/api/news/category/0${catagoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data))
        // .catch(error => console.log(error))

}

const displayNews = (data) => {
    console.log(data);
}



loadNewsCatagory();