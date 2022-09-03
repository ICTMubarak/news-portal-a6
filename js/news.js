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
        // console.log(catagoryId);
        const catagoryDiv = document.createElement('div');
        catagoryDiv.innerHTML = `
          <button class="btn d-flex" onclick="loadNews(${catagoryId})"><h6>${catagory.category_name}</h6></button>
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
    //  console.log(data);
    const newsContainer = document.getElementById('news-container');
    const newsContainerArray = data.data;
    const newsArrayLength = newsContainerArray.length;
    // console.log(newsArrayLength);
    if(newsArrayLength==0){
        const newsCountter = document.getElementById('news-number-count');
        newsCountter.innerHTML = ``;
        const newsNumberCount = document.createElement('div');
        newsNumberCount.innerHTML = `
        <div class="card d-flex flex-row bd-highlight mb-3">
                    <h5>No Data found</h5>
                    </div>
        `;
        newsCountter.appendChild(newsNumberCount);
    }

    //  console.log(newsContainerArray[0].author.img);
    newsContainer.innerHTML = ``;
    const newsDiv = document.createElement('div');
    newsDiv.innerHTML = ``;

   const newsCountter = document.getElementById('news-number-count');
   const newsNumberCount = document.createElement('div');

    newsContainerArray.forEach(news => {

        // console.log(news);
        // console.log("chack");
          const newsId = news._id;
        // console.log(newsId);
        // console.log(news._id);
        newsCountter.innerHTML = ``;
        newsNumberCount.innerHTML = `
        <div class="card d-flex flex-row bd-highlight mb-3">
                    <h5>${newsArrayLength} items found for category Entertainment.</h5>
                     
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
                            <div class = "col-3 text-center"><img class="autorpic rounded" src="${news.author.img}"> ${news.author.name? news.author.name:'No data found'}<br>${news.author.published_date}</div>
                            <div class = "col-3 text-center"><img class="rounded" src="pic/view-icon.jpg"> ${news.total_view?news.total_view:'No data found'}</div>
                            <div class = "col-3 text-center"><img class="rounded" src="pic/rating.jpg"></div>
                            <div class = "col-3 text-center"><button type="button" onclick="modalOpen('${newsId}')" data-bs-toggle="modal" data-bs-target="#myModal" class="btn btn-secondary btn-sm">Details</button></div>
                        <div>
                      </div>
                    </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
    
}

const modalOpen = (newsId) =>{
    // console.log(newsId);
    const url =  `https://openapi.programming-hero.com/api/news/${newsId}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayModalNews(data))
    // .catch(error => console.log(error))
}

const displayModalNews = (data) => {
    console.log(data.data[0].title);
   const newsOpenModal = document.getElementById('news-open-modal');
   const creatModalDiv = document.createElement('div');
   creatModalDiv.innerHTML = `
   
<div class="modal" id="myModal">
<div class="modal-dialog">
  <div class="modal-content">

    
    <div class="modal-header">
      <h4 class="modal-title">${data.data[0].title}</h4>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>

  
    <div class="modal-body">
    <img class="card-img-left" src="${data.data[0].thumbnail_url}" alt="Card image cap">
    <p>${data.data[0].details}</p>
    <div class = "row">
                            <div class = "col-3 text-center"><img class="autorpic rounded" src="${data.data[0].author.img}"> ${data.data[0].author.name? data.data[0].author.name:'No data found'}<br>${data.data[0].author.published_date}</div>
                            <div class = "col-3 text-center"><img class="rounded" src="pic/view-icon.jpg"> ${data.data[0].total_view?data.data[0].total_view:'No data found'}</div>
                            <div class = "col-3 text-center"><img class="rounded" src="pic/rating.jpg"></div>
    <div>
    </div>

   
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
    </div>

  </div>
</div>
</div>
   `;
   newsOpenModal.appendChild(creatModalDiv);

}

loadNewsCatagory();
loadNews(1);