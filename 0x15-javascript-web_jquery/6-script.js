const $header = $('header');
const $update_header = $('#update_header');
$update_header.on('click', () => {
  $header.text('New Header!!!');
});
