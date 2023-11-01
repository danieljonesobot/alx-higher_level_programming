const _url = 'https://swapi-api.hbtn.io/api/people/5/?format=json';
const $divCharacter = $('#character');
$.ajax({
  url: _url,
  dataType: 'json'
}).done((data) => {
  $divCharacter.text(data.name);
});
