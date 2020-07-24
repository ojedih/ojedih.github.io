//Typewriter

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('have you been single?')
    .pauseFor(2500)
    .deleteAll()
    .typeString('to your birthday?')
    .pauseFor(2500)
    .deleteAll()
    .typeString('since you were born?')
    .pauseFor(2500)
    .deleteAll()
    .typeString('for school to end?')
    .pauseFor(2500)
    .start();

//Switch Themes

$(".moon").on("click", function darkTheme(){
    $(this).fadeOut(700);
    $("body").addClass("dark");
    $("a").addClass("dark");
    $("span").addClass("dark");
    $("input").addClass("dark");
    $("label").addClass("dark");
    $(".sun").fadeIn(700);
});

$(".sun").on("click", function(){
    $(this).fadeOut(700);
    $("body").removeClass("dark");
    $("a").removeClass("dark");
    $("span").removeClass("dark");
    $("input").removeClass("dark");
    $("label").removeClass("dark");
    $(".moon").fadeIn(900);
});