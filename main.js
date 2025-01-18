$(document).ready(function () {
        $('.child').parents('.grandParent').css('background-color', '#e74c3c');

        $('.child').parents().css('border', '2px dashed #ffffff');
});
