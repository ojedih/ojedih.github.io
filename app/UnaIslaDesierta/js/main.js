$('.loader').hide();

$('.btn').on("click", function(){
    $('.container').fadeOut(700, function(){
        $('.loader').fadeIn(700);
    });
});