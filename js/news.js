const loadNewsCatagory = () => {
    // const url = https://openapi.programming-hero.com/api/news/categories;
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCatagory(data))
    // .catch(error => console.log(error))
}


// const newsCatagory = (data) => {
//     // console.log(data);
//     const loadNewsCategory = data.data.news_category;
//     console.log(loadNewsCategory);
//     const newsCatagory = document.getElementById('news-catagory');
//     loadNewsCategory.forEach(Category => {

//         const catagoryDiv = document.createElement('div');
//         catagoryDiv.innerHTML = `
//          <h6>catagory namaeL: </h6>
//         `;
//         loadNewsCategory.appendChild(catagoryDiv);
//     })

// }



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