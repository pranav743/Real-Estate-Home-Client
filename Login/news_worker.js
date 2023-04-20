// onmessage = enable_news();
enable_news();

function enable_news(){
    var all_articles = [];
    const news3_img = this.document.getElementById('news3');
    const news3_title = this.document.getElementById('news3_title');
    const news3_link = this.document.getElementById('news3_link');
    
    const news2_img = this.document.getElementById('news2');
    const news2_title = this.document.getElementById('news2_title');
    const news2_link = this.document.getElementById('news2_link');

    const news1_img = this.document.getElementById('news1');
    const news1_title = this.document.getElementById('news1_title');
    const news1_link = this.document.getElementById('news1_link');

    const url = 'https://newsapi.org/v2/everything?q=property%20rates%20OR%20affordable%20home%20loans%20OR%20cheap%20home%20prices%20OR%20investing';
    const apiKey = 'beb22a72eb9c4f8985e9ad475d58b45a';
  
  
    // Make a GET request to the API endpoint
    fetch(`${url}&apiKey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        // Process the data and display news articles
        var articles = data.articles;
        
  
        // articles.forEach(article => {
        //   const title = article.title;
        //   const description = article.description;
        //   const source = article.source.name;
        //   const url = article.url; 
        // });
        all_articles=[...articles]
        
      }
      )
      .catch(error => {
        console.error('Error fetching news articles:', error);
      });
      all_articles=all_articles[0];
      

      setInterval(function() {
         let random3 = Math.floor(Math.random() * all_articles.length);
         console.log(all_articles[random3]);
         
         news3_title.innerHTML=`${all_articles[random3].title}`;
         news3_img.src=all_articles[random3].urlToImage;
         news3_link.href=all_articles[random3].url;



         let random2 = Math.floor(Math.random() * all_articles.length);
         console.log(all_articles[random2]);
         
         news2_title.innerHTML=`${all_articles[random2].title}`;
         news2_img.src=all_articles[random2].urlToImage;
         news2_link.href=all_articles[random2].url;

         let random1 = Math.floor(Math.random() * all_articles.length);
         console.log(all_articles[random1]);
         
         news1_title.innerHTML=`${all_articles[random1].title}`;
         news1_img.src=all_articles[random1].urlToImage;
         news1_link.href=all_articles[random1].url;
        },6000);
      


  
}