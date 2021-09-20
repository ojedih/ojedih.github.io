$('.loader').hide();
$('.container').hide();

$('.btn').on("click", function(){
    $('.button-div').fadeOut(700, function(){
        $('.loader').fadeIn(700, function(){
            $(this).fadeOut(700, function(){
                $('.container').fadeIn(700)
            });
        });
        
    });
});