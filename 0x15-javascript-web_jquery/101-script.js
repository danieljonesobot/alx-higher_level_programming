$(document).ready(function() {
            // Function to add a new <li> element
            $('#add_item').click(function() {
                var newItem = '<li>Item</li>';
                $('.my_list').append(newItem);
            });
            
            // Function to remove the last <li> element
            $('#remove_item').click(function() {
                $('.my_list li:last').remove();
            });
            
            // Function to clear all <li> elements
            $('#clear_list').click(function() {
                $('.my_list').empty();
            });
        });


