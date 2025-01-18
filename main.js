$(document).ready(function () {
    var boxWidth = $('#magicBox').width();
    var boxHeight = $('#magicBox').height();

    $('#contentContainer').append('<p>Box width: ' + boxWidth + 'px</p>');
    $('#contentContainer').append('<p>Box height: ' + boxHeight + 'px</p>');

    var boxInnerWidth = $('#magicBox').innerWidth();
    var boxInnerHeight = $('#magicBox').innerHeight();

    $('#contentContainer').append('<p> Box inner width: ' + boxInnerWidth + 'px</p>')
    $('#contentContainer').append('<p> Box inner height: ' + boxInnerHeight + 'px</p>')

    var boxPosition = $('#magicBox').position();
    $('#contentContainer').append('<p> Box position - top:' + boxPosition.top + 'px</p>');
    $('#contentContainer').append('<p> Box position - left:' + boxPosition.left + 'px</p>');
});
