$(document).ready(function(){
    
    let animationInterval;

    $('#start-btn').click(function () {
        $('#animated-element').fadeIn(1000);

        animationInterval = setInterval(function () {
            $('#animated-element').animate({
                left: '+=50px'
            }, 500)
        }, 500)
    })

    $('#stop-btn').click(function () {
        clearInterval(animationInterval);
        $('#animated-element').fadeOut(1000);
    })
});