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
          <button class="btn" onclick="loadNews(${catagoryId})"><h6>${catagory.category_name}</h6></button>
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
    const newsArrayLength = newsContainerArray.length;
    console.log(newsArrayLength);

    //  console.log(newsContainerArray[0].author.img);
    newsContainer.innerHTML = ``;
    const newsDiv = document.createElement('div');
    newsDiv.innerHTML = ``;

   const newsCountter = document.getElementById('news-number-count');
   const newsNumberCount = document.createElement('div');

    newsContainerArray.forEach(news => {

        console.log(news);
        
        newsCountter.innerHTML = ``;
        newsNumberCount.innerHTML = `
        <div class="card d-flex flex-row bd-highlight mb-3">
                    <h3>${newsArrayLength} items found for category Entertainment koi</h3>
                     
                    </div>
        `;
        newsCountter.appendChild(newsNumberCount);
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = ``;
        newsDiv.innerHTML = `
        <div class="card d-flex flex-row bd-highlight mb-3">
                    <div>
                    <img class="card-img-left" src="${news.thumbnail_url}" alt="Card image cap">
                    </div>
                      
                      <div class="card-body d-inline">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.details.slice(0, 500)}...</p><br><br>
                        <div class = "row">
                            <div class = "col-3 text-center"><img class="autorpic rounded" src="${news.author.img}"> ${news.author.name}<br>${news.author.published_date}</div>
                            <div class = "col-3 text-center"><img class="rounded" src="pic/view-icon.jpg"> ${news.total_view}</div>
                            <div class = "col-3 text-center"><img class="rounded" src="pic/rating.jpg"></div>
                            <div class = "col-3 text-center"><button type="button" class="btn btn-secondary btn-sm">Details</button></div>
                        <div>
                      </div>
                    </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}
loadNewsCatagory();