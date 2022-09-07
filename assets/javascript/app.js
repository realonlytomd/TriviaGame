$(document).ready(function() {
	console.log("hello");
	// initialize color of start button and that timer
	var btcolor = [];
	var myColorTimer;
	var j = 0; // the counter for cycling through the color array for the html element
	var light = 0;
	var hueDown = 180; // to get the light number to go down, hue needs to move down from 180 to 0

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

	// create function, buildRBG, to build an array of all 16 million colors
	function buildRGB() {
		LoopRed:
		for (var red = 0; red <= 255; red = red + 5) {
			LoopGreen:
			for (var green = 0; green <= 255; green = green + 5) {
				LoopBlue:
				for (var blue = 0; blue <= 255; blue = blue + 5) {
					// console.log("beginning of loopBlue: red, green, blue: " + red + ", " + green + ", " + blue);
					var redString = red.toString();
					var greenString = green.toString();
					var blueString = blue.toString();
					btcolor.push("rgb(" + redString + "," + greenString + "," + blueString + ")");
				}
			}
		}
		console.log("btcolor = ", btcolor);
		// call the timer function to start cycling through the array on the HTML element
		colorTimer();
	}

	// create new function, buildHSLsimple, to build an array of 360 colors using HSL
	
	function buildHSLsimple() {
		for (var hue = 0; hue <= 360; hue = hue + 3) {
					var hueString = hue.toString();
					if (hue <= 180) {
						light = (hue / 3) + 20;
						console.log("light inside if under 180: ", light);
					} else {
						hueDown = hueDown - 3; // first time, hueDown would be 181
						light = (hueDown / 3) + 20;
						console.log("light inside if over 180: ", light);
					}
					var lightString = light.toString();
					btcolor.push("hsl(" + hueString + ", 100%, " + lightString + "%)");
		}
		console.log("btcolor = ", btcolor);
		// call the timer function to start cycling through the array on the HTML element
		colorTimer();
	}
	
	// call the function that builds the colors for the element (button)
	buildHSLsimple();

	// make a timer function that will loop through the colors in a timed fashion
	function colorTimer() {
		$("#startButton").css("background-color", btcolor[j]);
		$("#startButton").html("Start" + "<br>" + "<background-color>");
		j = j + 1;
		myColorTimer = setTimeout(function(){ colorTimer() }, 100);
		if (j === 121) {
			stopColorTimer();
		}
	}
	// make stop timer for the color cycling that then calls the color timer over again
	function stopColorTimer() {
		clearTimeout(myColorTimer);
		j = 0;
		colorTimer();
	}

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