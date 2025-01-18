$(document).ready(function () {
        $('.child').parent().css('border', '2px solid #e74c3c');

        $('.parent').children().css('background-color', '#f39c12');
        
        $('.child').siblings().css('border', '2px dashed #ffffff');
});
