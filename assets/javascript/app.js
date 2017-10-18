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

	//create the timer variables and function
	//adjust startCount to change length of time for quiz

	var startCount = 8;
	var myTimer;
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unAnswered = 0;

	//this array is for getting the values (chosen answers) of the user radio button selections
	var quest = [];

	//real answers: owl, Dentist, Grandmother, Snake, Motorcycle, Lumos, Accio, Buckbeak
	var ans = ["Owl", "Dentist", "Grandmother", "Snake", "Motorcycle", "Lumos", "Accio", "Buckbeak"]



	for (var i = 0; i < 8; i++) {

		quest[i] = "";
		console.log(quest[i]);
	}


	// initialize the variable for getting values from radio buttons
	var radioValue = "";

	//creating the function to stop the timer if it counts down to zero
	//or if the Done button is clicked
	

	function stopTimer() {
		console.log("we are in stopTimer " + startCount);
			clearTimeout(myTimer);
			choicesMade();

			//also need to re-hide the divs and ids not pertinent

			$(".timeRemaining").hide();
			$(".questions").hide();
			$("#doneButton").hide();
			$(".allDone").show();

		}

		// create function to run the count down timer

	function timer() {
		$("#countDown").html(startCount);
		startCount = startCount - 1;
		console.log(startCount);
		myTimer = setTimeout(function(){ timer() }, 1000);
		if (startCount === -1) {
			console.log("we have reached " + startCount);
			stopTimer();
		}
		
	}

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

		timer();
		
	});


		// user starts picking answers
		// get value from radio buttons and store correct answers

				// I've tried tons of sites and I can't find a way to translate
				// to what I actually need.
				// But I know it's the value of the radio button.
				// So, will somehow get values for each question

				// I need a function that executes when the timer counts down...
				// ...and if the user hits the "Done" button. Both of these places
				// go to the stopTimer function, so I put the call to this function
				// in there

		function choicesMade() {

		//	quest[0] = $(#qOneAnswers.qOne.value);
		//	quest[1] = $(#qTwoAnswers.qTwo.value);
		//	quest[2] = $(#qThreeAnswers.qThree.value);
		//	quest[3] = $(#qFourAnswers.qFour.value);
		//	quest[4] = $(#qFiveAnswers.qFive.value);
		//	quest[5] = $(#qSixAnswers.qSix.value);
		//	quest[6] = $(#qSevenAnswers.qSeven.value);
		//	quest[7] = $(#qEightAnswers.qEight.value);



			// then check to see if the choices that were made are correct

			for (var i = 0; i < 8; i++) {

				if (quest[i] === "") {
				unAnswered++;
			} else if (quest[i] === ans[i]) {
				correctAnswers++;
			} else {
				wrongAnswers++;
			}
			}

			//Then, write the new variable to DOM

			$("#correctAnswers").html(correctAnswers);
			$("#incorrectAnswers").html(wrongAnswers);
			$("#unAnswered").html(unAnswered);

		}


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

		//will have the timer stop counting down

		stopTimer();

	});

});