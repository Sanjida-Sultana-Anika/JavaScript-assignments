document.getElementById('search').addEventListener('submit', function(event){
  event.preventDefault();
  const queryValue = document.getElementById('query').value;

  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(queryValue)}`;
  fetch(url)
  .then(r => r.json())
  .then(data => {
        displayResults(data);
  })
      .catch(error => {
        console.error('Error occurred!', error);
  });
});
function displayResults(data){
  const results = document.getElementById('results');
  results.innerHTML = '';

  data.forEach(tvSeries => {
  const article = document.createElement('article');
  const name = document.createElement('h2');
  const link = document.createElement('a');
  const image = document.createElement('img');
  const summaryContainer = document.createElement('div');

  name.textContent = tvSeries.show.name;

  image.src = tvSeries.show.image?.medium || 'https://via.placeholder.com/210x295?text=Not%20Found';
  image.alt = tvSeries.show.name;

  link.href = tvSeries.show.url;
  link.target = '_blank';
  link.textContent = 'Details';

  summaryContainer.insertAdjacentHTML("afterBegin", tvSeries.show.summary);
  article.appendChild(name);
  article.appendChild(link);
  article.appendChild(image);
  article.appendChild(summaryContainer);
  results.appendChild(article);
});
}