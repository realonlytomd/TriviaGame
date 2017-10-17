$(document).ready(function() {
	console.log("hello");

	// hide divs that are not shown at the beginning of game

	//class="timeRemaining"
	//class="questions"
	//id="doneButton"
	//class="allDone"

	$(".timeRemaining").hide();
	$(".questions").hide();
	$("#doneButton").hide();
	$(".allDone").hide();

	//at the click of the start button,
	// make the start button disappear
	//make the time remaining div appear
	//make the questions appear
	//make the done button appear

	$("#startButton").click(function(){

		$("#startButton").hide();
		$(".timeRemaining").show();
		$(".questions").show();
		$("#doneButton").show();

		// also, when the questions come up, the countdown timer should start
		// create function to make the time actually count
		// so iterate down from 120 , every one second. 
		// feed that number to my html (every second)

		setTimeout(timeCountDown, 1000);

	});

	



	//  when click the done button,
	//make the done button disappear
	//make time remaining div disappear
	//make the questions div disappear
	//make the allDone div appear

	$("#doneButton").click(function(){

		$("#doneButton").hide();
		$(".timeRemaining").hide();
		$(".questions").hide();
		$(".allDone").show();

	});

	
	



});