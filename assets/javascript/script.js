$(document).ready(function () {

    $("#portfolioDiv").hide();


    $("#aboutNav").on("click", function () {
        $("#portfolioDiv").hide();
        $("#aboutDiv:hidden").fadeIn(900);
    });

    $("#portfolioNav").on("click", function () {
        $("#aboutDiv").hide();
        $("#portfolioDiv:hidden").fadeIn(900);
    });

    var typed2 = new Typed('.options', {
        strings: ['"Awesome"', '"Driven"', '"Reliable"', '"Creative"', '"Hungry"'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

});
