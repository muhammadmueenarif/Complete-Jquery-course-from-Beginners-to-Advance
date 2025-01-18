$(document).ready(function () {
    let headingText = $('#contentContainer h2').text();
    console.log('heading text', headingText);

    $('#contentContainer h2').text('Mastering Jquery');
    let imgUrl  = $('#sampleImg').attr('src');
    console.log('Image Url:', imgUrl);
    
    $('#sampleImg').attr('src', 'img/sample.jpg');
    
});
