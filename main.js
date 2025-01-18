$(document).ready(function () {
  $("#box").hover(
    function () {
      $(this).fadeIn(500).animate({  
            width: "+=50px",
            height: "+=50px",
          },500).css("background-color", "#e74c3c");
    },
    function () {
      $(this).fadeOut(500).animate({
            width: "+=50px",
            height: "+=50px",
          },500).css("background-color", "#3498db");
    }
  );
});
