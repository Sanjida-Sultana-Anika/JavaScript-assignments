document.getElementById('search').addEventListener('submit', function(event){
  event.preventDefault();
  const queryValue = document.getElementById('query').value;

  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(queryValue)}`;
  fetch(url)
  .then(r => r.json())
  .then(data => {
        console.log('Your search result: ', data);
  })
      .catch(error => {
        console.error('Error occurred!', error);
  });
});