$('.loader').hide();

$('.btn').on("click", function(){
    $('.button-div').fadeOut(700, function(){
        $('.loader').fadeIn(700);
    });
});