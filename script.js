
async function fetchNews() {
   try {
       const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F');
       const data = await response.json();
       const newsList = document.getElementById('news-list');

       data.items.forEach(item => {
           newsList.innerHTML += `
               <li class= "box">
                   <h2>${item.title}</h2>
                   ${item.description}
                   <div class="split">
                   <a href="${item.link}" target="_blank">Read more...</a>
                   <h4>${item.author}</h4>
                   </div>
               </li>
           `;

         //   newsList.insertAdjacentHTML('beforeend', newsItemHTML);
       });
   } catch (error) {
       console.error('Error fetching news:', error);
   }
}

fetchNews();
