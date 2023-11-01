const $header = $('header');
const $redHeader = $('#toggle_header');

$redHeader.on('click', () => {
  const currentClass = $header.attr('class');

  if (currentClass === 'green') {
    $header.toggleClass(`${currentClass} red`);
  }

  if (currentClass === 'red') {
    $header.toggleClass(`${currentClass} green`);
  }
});
