import axios from 'axios';

const Card = (articleobj) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


//create elements

  const theCard = document.createElement('div');
  const theHeadline = document.createElement('div');
  const theAuthor = document.createElement('div');
  const theImage = document.createElement('img');
  const theImageDiv = document.createElement('div');
  const theAuthorName = document.createElement('span');


//add class names

  theCard.classList.add('card');
  theHeadline.classList.add('headline');
  theAuthor.classList.add('author');
  theImageDiv.classList.add('img-container');

//add 
  theCard.appendChild(theHeadline);
  theCard.appendChild(theAuthor);
  theImageDiv.appendChild(theImage);

  theAuthor.appendChild(theImageDiv);
  theAuthor.appendChild(theAuthorName);



//add text content
theHeadline.textContent = articleobj.headline;
theAuthorName.textContent = articleobj.authorName;
theImage.src = articleobj.authorPhoto;



return theCard
}




const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


  axios.get(`http://localhost:5001/api/articles`).then(response => {
    console.log(response)

    const articles = response.data.articles

    for (let cat in articles) {
      articles[cat].forEach(art => { 
        
        const articleCard = Card (art)
        console.log(articleCard)
        document.querySelector(selector).append(articleCard)
      })
    }
  })


}
//console.log(cardAppender)

export { Card, cardAppender };