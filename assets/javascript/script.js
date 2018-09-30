$(document).ready(function(){

$("#nav-contact").on("click",function() {
    console.log("clicked");
    $("html").animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});

});