const _url = 'https://swapi-api.hbtn.io/api/films/?format=json';
const $list = $('#list_movies');
$.ajax({
  url: _url,
  dataType: 'json'
}).done((data) => {
  const _movie = data.results;
  for (let i = 0; i < _movie.length; ++i) {
    const movieTitle = _movie[i].title;
    const element = `<li>${movieTitle}`;
    $list.append(element);
  }
});
