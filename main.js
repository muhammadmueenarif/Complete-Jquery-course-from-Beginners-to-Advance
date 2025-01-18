$(document).ready(function () {
    $('#dynamicList').append('<li>New item</li>');

    var newItemArray = ['item 3', 'item 4', 'item 5'];
    $.each(newItemArray, function (index, value) {
        $('#dynamicList').append('<li>' + value + '</li>')
    });
    //prepend means add text before that element
    $('#contentContainer').prepend('<h3>Added heading</h3>'); 
});
