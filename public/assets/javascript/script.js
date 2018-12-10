$(document).ready(() => {
    $('[data-toggle="tooltip"]').tooltip();   

    $("#portfolioDiv").hide();
    $("#contactDiv").hide();

    $("#aboutNav").on("click", () => {
        $("#portfolioDiv").hide();
        $("#contactDiv").hide();
        $("#carouselDiv").show();
        $("#aboutDiv:hidden").fadeIn(900);
    });

    $("#portfolioNav").on("click", () => {
        $("#aboutDiv").hide();
        $("#carouselDiv").hide();
        $("#contactDiv").hide();
        $("#portfolioDiv:hidden").fadeIn(900);
    });

    $("#contactNav").on("click", () => {
        $("#aboutDiv").hide();
        $("#carouselDiv").hide();
        $("#portfolioDiv").hide();
        $("#contactDiv").show();
    });

    $("#submitEmail").on("click", () => {
        $.post("/email", {
            from: $("#emailInput").val(),
            subject: $("#subjectInput").val(),
            message: $("#messageInput").val()
        }).then(() => {
            console.log("Email Has Been Sent!");
            $("#senderName").val("");
            $("#emailInput").val("");
            $("#subjectInput").val("");
            $("#messageInput").val("");
        }).catch( err => {
            console.log(err);
        });
    });

    const typed2 = new Typed('.options', {
        strings: ['"Awesome"', '"Driven"', '"Reliable"', '"Creative"', '"Hungry"'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

});
