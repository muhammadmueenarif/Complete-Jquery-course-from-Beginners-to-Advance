$(document).ready(function () {
  $("#box").click( function () {
      $(this).fadeOut(500, function () {
        $(this).animate({
            width: "+=50px",
            height: "+=50px"}, 500, function () {
                $(this).fadeIn(500);
        })        
      })    
    },);
});
