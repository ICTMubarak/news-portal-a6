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
    // console.log(data);
    const newsContainer = document.getElementById('news-container');
    const newsContainerArray = data.data;

    //  console.log(newsContainerArray[0].author.img);

    newsContainerArray.forEach(news => {
        console.log(news);

        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="card">
                      <img class="card-img-top" src="${news.thumbnail_url}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.details}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
        `;
        newsContainer.appendChild(newsDiv);
    })


}



loadNewsCatagory();