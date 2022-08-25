$(document).ready(function() {
	console.log("hello");
	// initialize color of start button and that timer
	var btcolor = "";
	var myColorTimer;
	var red=0;
	var green=0;
	var blue=0;


	// hide divs that are not shown at the beginning of game

	$(".timeRemaining").hide();
	$(".questions").hide();
	$("#doneButton").hide();
	$(".allDone").hide();

	//create the timer variables and function
	//adjust startCount to change length of time for quiz

	var startCount = 60;
	var myTimer;
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unAnswered = 0;

	//this array is for getting the values (chosen answers) of the user radio button selections
	var quest = [];

	//real answers: owl, Dentist, Grandmother, Snake, Motorcycle, Lumos, Accio, Buckbeak
	var ans = ["Owl", "Dentist", "Grandmother", "Snake", "Motorcycle", "Lumos", "Accio", "Buckbeak"];

	for (var i = 0; i < ans.length; i++) {

		quest[i] = "";
		console.log(quest[i]);
	}

	// create function to change the color of the start button
	// to cycle through all the colors

	function colorTimer() {
		loopRed:
		for (red; red <= 255; red++) {
			loopGreen:
			for (green; green <= 255; green++) {
				loopBlue:
				for (blue; blue <= 255; blue++) {
					console.log("beginning of loopBlue: red, green, blue: " + red + ", " + green + ", " + blue);
					var redstring = red.toString();
					var greenstring = green.toString();
					var bluestring = blue.toString();
					btcolor = "rgb(" + redstring + "," + greenstring + "," + bluestring + ");";
					console.log("btcolor = ", btcolor);
					$("#startButton").css("background-color", btcolor);
					//break loopGreen;
					//break loopRed;
					console.log("after breaks: red, green, blue: " + red + ", " + green + ", " + blue);
					if (red === 255) {
						console.log("red is 255");
						red = 0;
						green = 0;
						blue = 0;
					}
					myColorTimer = setTimeout(function(){ colorTimer() }, 1000);
					
				}
			}
		}
	}
	
	colorTimer();

	//
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

	$("#startButton").click(function() {

		$("#startButton").hide();
		$(".timeRemaining").show();
		$(".questions").show();
		$("#doneButton").show();

		// also, when the questions come up, the countdown timer should start

		timer();
		
	});


				// user starts picking answers
				// get value from radio buttons and store correct answers

				

				// I need a function that executes when the timer counts down...
				// ...and if the user hits the "Done" button. Both of these places
				// go to the stopTimer function, so I put the call to this function
				// in there

	function choicesMade() {

		quest[0] = $("input[name=qOne]:checked").val();
		quest[1] = $("input[name=qTwo]:checked").val();
		quest[2] = $("input[name=qThree]:checked").val();
		quest[3] = $("input[name=qFour]:checked").val();
		quest[4] = $("input[name=qFive]:checked").val();
		quest[5] = $("input[name=qSix]:checked").val();
		quest[6] = $("input[name=qSeven]:checked").val();
		quest[7] = $("input[name=qEight]:checked").val();

		// then check to see if the choices that were made are correct

		for (var i = 0; i < quest.length; i++) {

			console.log("quest[" + i + "]: " + quest[i]);

			if (quest[i] === undefined) {
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

	$("#doneButton").click(function() {

		$("#doneButton").hide();
		$(".timeRemaining").hide();
		$(".questions").hide();
		$(".allDone").show();

		//will have the timer stop counting down

		stopTimer();

	});

});