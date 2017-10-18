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

	var startCount = 8;
	var myTimer;
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unAnswered = 0;
	var questOne = "";
	var questTwo = "";
	var questThree = "";
	var questFour = "";
	var questFive = "";
	var questSix = "";
	var questSeven = "";
	var questEight = "";


	// initialize the variable for getting values from radio buttons
	var radioValue = "";
	console.log(radioValue);

	//creating the function to stop the timer if it counts down to zero
	

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
		// create function to make the time actually count
		// so iterate down from 120 , every one second. 
		// feed that number to my html (every second)

		timer();
		
	});

		//stop the counting if the timer reaches 0 (above) - done

		

		// user starts picking answers
		// get value from radio buttons and store correct answers

				// I've tried tons of sites and I can't find a way to translate
				// to what I actually need.
				// But I know it's the value of the radio button.
				// So, will somehow get values for each question

				// I need a function that executes when the timer counts down...
				// ...and if the user it's the "Done" button. Both of these places
				// go to the stopTimer function, so I put the call to this function
				// in there

		function choicesMade() {
	// code to get values for question 1 (possible?)  var qeustOne = $(#qOneAnswers.qOne.value);
	// code to get values for question 2  var questTwo
	// code to get values for question 3  var questThree
	// code to get values for question 4  var questFour
	// code to get values for question 5  var questFive
	// code to get values for question 6  var questSix
	// code to get values for question 7  var questSeven
	// code to get values for question 8  var questEight

			// then check to see if the choices that were made are correct

			if (questOne === "") {
				unAnswered++;
			} else if (questOne === "Owl") {
				correctAnswers++;
			} else {
				wrongAnswers++;
			}

			if (questTwo === "") {
				unAnswered++;
			} else if (questTwo === "Dentist") {
				correctAnswers++;
			} else {
				wrongAnswers++;
			}

			if (questThree === "") {
				unAnswered++;
			} else if (questThree === "Grandmother") {
				correctAnswers++;
			} else {
				wrongAnswers++;
			}

			if (questFour === "") {
				unAnswered++;
			} else if (questFour === "Snake") {
				correctAnswers++;
			} else {
				wrongAnswers++;
			}

			if (questFive === "") {
				unAnswered++;
			} else if (questFive === "Motorcycle") {
				correctAnswers++;
			} else {
				wrongAnswers++;
			}

			if (questSix === "") {
				unAnswered++;
			} else if (questSix === "Lumos") {
				correctAnswers++;
			} else {
				wrongAnswers++;
			}

			if (questSeven === "") {
				unAnswered++;
			} else if (questSeven === "Accio") {
				correctAnswers++;
			} else {
				wrongAnswers++;
			}

			if (questEight === "") {
				unAnswered++;
			} else if (questEight === "Buckbeak") {
				correctAnswers++;
			} else {
				wrongAnswers++;
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