const $list = $('ul.my_list');
const $addItem = $('#add_item');

$addItem.on('click', () => {
  $list.append('<li>Item</li>');
});
