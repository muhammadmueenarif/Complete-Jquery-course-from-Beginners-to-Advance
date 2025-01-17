$(document).ready(function(){
    $('#animate-btn').click(function () {
        $('#target-box').animate({
            opacity: 0.5,
            marginLeft: '50px',
            fontSize:'24px'
        }, 1000);
    }) 
});