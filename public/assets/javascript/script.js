$(document).ready(function () {

    $("#portfolioDiv").hide();
    $("#contactDiv").hide();

    $("#aboutNav").on("click", function () {
        $("#portfolioDiv").hide();
        $("#contactDiv").hide();
        $("#carouselDiv").show();
        $("#aboutDiv:hidden").fadeIn(900);
    });

    $("#portfolioNav").on("click", function () {
        $("#aboutDiv").hide();
        $("#carouselDiv").hide();
        $("#contactDiv").hide();
        $("#portfolioDiv:hidden").fadeIn(900);
    });

    $("#contactNav").on("click", function () {
        $("#aboutDiv").hide();
        $("#carouselDiv").hide();
        $("#portfolioDiv").hide();
        $("#contactDiv").show();
    });

    $("#submitEmail").on("click", function () {
        $.post("/email", {
            from: $("#emailInput").val(),
            subject: $("#subjectInput").val(),
            message: $("#messageInput").val()
        }).then(function () {
            console.log("Email Has Been Sent!");
            $("#senderName").val("");
            $("#emailInput").val("");
            $("#subjectInput").val("");
            $("#messageInput").val("");
        }).catch(function (err) {
            console.log(err);
        });
    });

    var typed2 = new Typed('.options', {
        strings: ['"Awesome"', '"Driven"', '"Reliable"', '"Creative"', '"Hungry"'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

});
