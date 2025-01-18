$(document).ready(function () {
    $('#sampleText').text('welcome to jquery magic show');
    $('#contentContainer').append('<p>New content added dynamically</p>');
    $('#contentContainer h2').html('<em>Updated</em> Heading');
    $('#sampleImg').attr('alt', 'Updated Image');
    
});
//remember to use your own image