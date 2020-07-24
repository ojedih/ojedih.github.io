//Type limit

let dayInp = document.getElementById('day');
let monthInp = document.getElementById('month');
let yearInp = document.getElementById('year');

dayInp.addEventListener('keyup', () => {
    if (dayInp.value.length > 2) {
        dayInp.value = dayInp.value.substr(0, 2);
	}
	$("#dayLabel").removeClass("red");
	$("#day").removeClass("red");
})

monthInp.addEventListener('keyup', () => {
    if (monthInp.value.length > 2) {
        monthInp.value = monthInp.value.substr(0, 2);
	}
	$("#monthLabel").removeClass("red");
	$("#month").removeClass("red");
})

yearInp.addEventListener('keyup', () => {
    if (yearInp.value.length > 4) {
        yearInp.value = yearInp.value.substr(0, 4);
	}
	$("#yearLabel").removeClass("red");
	$("#year").removeClass("red");
})

//Date Calculation
$(".result").fadeOut(0);
$(".error").fadeOut(0);
$(".sun").fadeOut(0);


$(".goBtn").on("click", function(){
    if($("#day").val() && $("#month").val() && $("#year").val()) {
		if($("#day").val() > 31) {
			error(1);
		} else if($("#month").val() > 12) {
			error(2);
		} else if($("#year").val() < 1970) {
			error(3);
		} else {
			window.day = $("#day").val();
			window.month = $("#month").val();
			window.year = $("#year").val();

			window.dateUserInit = month + "/" + day + "/" + year;

			window.dateUser = new Date(dateUserInit);

			var dateUser = new Date(dateUserInit);
			var dateNow = new Date();
			var dateDiff = (dateNow.getTime()) - (dateUser.getTime());
			var dateActual = dateDiff / (1000 * 3600 * 24);
			var dateResult = dateActual.toFixedDown(0);
			$(".resultNum").text(dateResult + " days from today.");

			$(".hides").fadeOut(700);
			$(".errorMsg").fadeOut(700);
			$("input").removeClass("red");

			$(".hides2").fadeOut(700, function(){
				$(".result").fadeIn(700);
			});
		}
    }
});


function error(arg) {
	$(".error").fadeIn(0);
	if(arg == 1) {
		$(".errorMsg").text("Are you sure that's a day?").fadeIn(200);
		$("#dayLabel").addClass("red");
		$("#day").addClass("red");
	} else if( arg == 2) {
		$(".errorMsg").text("I don't think that month exists").fadeIn(200);
		$("#monthLabel").addClass("red");
		$("#month").addClass("red");
	} else if( arg == 3) {
		$(".errorMsg").text("Sorry but I can't reach that year :(").fadeIn(200);
		$("#yearLabel").addClass("red");
		$("#year").addClass("red");
	}
}

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

//Go back

$(".goBack").on("click", function(){
	$("input").val("");
	$(".result").fadeOut(700, function(){
		$(".hides").fadeIn(700);
		$(".hides2").fadeIn(700);
	});
});