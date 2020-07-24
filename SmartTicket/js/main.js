var totalPrice;

$(".ticket-div").hide();
$(".enter").hide();
$(".decimalPart").hide();
$(".finalPart").hide();
$(".restart").hide(500);

//Check for screen resolution
if(screen.width < 500) {
    $(".resp1").text("Bill €");
    $(".resp2").text("Ticket value");
}


// MAIN FUNCTION
$(".btnNextFirst").on("click", function(){
    if($(".total").val()) {
        totalPrice = $(".total").val();

        if(totalPrice <= 5) {

            // Too low value ERROR
            $(".title").fadeOut(500, function(){
                $(this).addClass("redMsg");
                $(this).text("This value is too low!")
                $(this).fadeIn(500);
            });
        } else {
            if(totalPrice % 1 == 0) {
                //Exact value function
                $(".btnNextFirst").fadeOut(500);
                $(".total-div").fadeOut(500, function(){
                    $(".title").removeClass("redMsg");
                    final(totalPrice);
                });
                
            } else {

                // Rounding page
                $(".title").fadeOut(500, function(){
                    $(this).removeClass("redMsg");
                    $(this).text("");
                    $(this).append('<i class="fas fa-exclamation-triangle"></i>');
                    $(this).fadeIn(500);
                });
                $(".box-3").fadeOut(500);
                $(".total-div").fadeOut(500, function(){
                    $(".decH3").text(totalPrice);
                    $(".decimalPart").fadeIn(700);

                    // Hover title animation
                    $(".title").hover(function(){
                        $(this).addClass("yellowMsg");
                    }, function(){
                        $(this).removeClass("yellowMsg");
                    });

                    // Hover Animations for Spans
                    $( "#upSpan" ).hover(
                        function() {
                          $(this).text(Math.ceil(totalPrice));
                        }, function() {
                          $(this).text("up");
                        }
                    );

                    $( "#downSpan" ).hover(
                        function() {
                          $(this).text(Math.floor(totalPrice));
                        }, function() {
                          $(this).text("down");
                        }
                    );

                    // Select Rounding
                    $("#upSpan").on("click", function(){
                        totalPriceRounded = Math.ceil(totalPrice);

                        final(totalPriceRounded);
                    });

                    $("#downSpan").on("click", function(){
                        totalPriceRounded = Math.floor(totalPrice);

                        final(totalPriceRounded);
                    });
                });
            }
        }
    } else {

        // Empty Value ERROR
        $(".title").fadeOut(500, function(){
            $(this).addClass("redMsg");
            $(this).text("Please type in a value")
            $(this).fadeIn(500);
        });
    }
});



function ticketCountCalc(bill, tick) {

    // Show up final page
    $(".ticket-div").fadeOut(500);
    $(".enter").fadeOut(500);

    if(tick == 1) {
        valueOne(bill);

    } else if(tick == 2) {
        valueTwo(bill);
        
    } else if(tick >= 3) {
        valueRest(bill, tick);
    }
}

//Ticket Values

function valueOne(val) {
    ticketCount = 0;

    for(var i = 0; i < val; i+= 1) {
            
        ticketCount ++;
    }

    finalResult(ticketCount, 1);

}

function valueTwo(val) {
    ticketCount = 0;
    
    if(val % 2 == 0) {
        for(var i = 0; i < val; i+= 2) {
            
            ticketCount ++;
        }

        finalResult(ticketCount, 2);
    } else {
        var oddBill = val - 1;

        for(var i = 0; i < oddBill; i+= 2) {
            
            ticketCount ++;
        }

        finalResult(ticketCount, 2);
    }
}

function valueRest(val, num) {
    ticketCount = 0;

    if(val % num == 0) {
        for(var i = 0; i < val; i+= num) {
            
            ticketCount ++;
        }

        finalResult(ticketCount, num);

    } else {

        for(var i = 0; i < (val - num); i+= num) {
                
            ticketCount ++;
        }

        finalResult(ticketCount, num);
    }
}

// Ticket Value function after rounding selection
function final(val) {
    $(".title").fadeOut(500, function(){
        $(".title").hover(function(){
            $(this).removeClass("yellowMsg");
        });
        $(".fa-exclamation-triangle").hide();
        $(this).text("Total: " + val + "€");
        $(this).fadeIn(500);
    });
    $(".decimalPart").fadeOut(500, function(){
        $(".ticket-div").fadeIn(500);
        $(".enter").fadeIn(500);
    });

    $(".btnCalc").on("click", function(){

        if($(".ticket").val() == false) {
            // Empty Value ERROR
            $(".title").fadeOut(500, function(){
                $(this).addClass("redMsg");
                $(this).text("Please type in a value")
                $(this).fadeIn(500);
            });

        } else if($(".ticket").val() < 1) {
            // Too low value ERROR
            $(".title").fadeOut(500, function(){
                $(this).addClass("redMsg");
                $(this).text("This value is too low!")
                $(this).fadeIn(500);
            });
        } else {
            //Final step
            var ticketValue = $(".ticket").val();
            ticketCountCalc(parseInt(val), parseInt(ticketValue));
        }
    });
}

// Show final results

function finalResult(cnt, tickVal) {
    $(".spanFinal-1").text(cnt);
    $(".spanFinal-2").text(tickVal);

    $(".finalPart").fadeIn(500);
    $(".restart").fadeIn(500);
    $(".btnRestart").on("click", function(){location.reload()});

}