// VARIABLES
var numberToGuess = 0;

var counter = 0;

var numbers = [];

var wins = 0, losses = 0;

// FUNCTION UTILIZED TO CREATE RANDOM NUMBER
var __getRandomNumber = function (min, max) {
	return Math.round((Math.random() * (max - min)) + min);
};

// SHOW USER HOW MANY TIMES THEY WON VERSUS HOW MANY TIMES THEY LOSS



// EACH TIME WHEN THE GAME STARTS, THE GAME WILL CHANGE THE VALUES OF EACH CRYSTAL


var __generateNumbers = function () {
	return [__getRandomNumber(1, 12), __getRandomNumber(1, 12), __getRandomNumber(1, 12), __getRandomNumber(1, 12)];
}

// FUNCTION UTILIZED TO RESET GAME (AND DICTATE ITS LOAD STATE)

var __init = function () {
	counter = 0;
	numberToGuess = __getRandomNumber(19, 120);
	numbers = __generateNumbers();

	$('#number').text(numberToGuess);
	$('#yourNumber').text(counter);


	// THERE ARE FOUR CRYSTALS AVAILABLE. NEED TO BE  ABLE TO DO THE FOLLOWING:


	$('#crystals').text('');

	for (var i=0; i< numbers.length; i++) {

		var imageCrystal = $('<img>');

		imageCrystal.attr('data-num', numbers[i]);

		imageCrystal.attr('class', 'image'+ [i]);

		imageCrystal.addClass('crystalImage');

		$('#crystals').append(imageCrystal);
	}

	// CLICK ON A CRYSTAL AND ADD A SPECIFIC AMOUNT OF POINTS TO TOTAL SCORE

	$('.crystalImage').on('click', function() {
		counter = counter + parseInt($(this).data('num'));


		// DISPLAY GEM VALUE THAT USER CLICKED ON. THE VALUE OF THE CRYSTAL IS HIDDEN UNTIL CLICKED.

		$('#yourNumber').text(counter);


		// WIN CONDITION: MATCH TOTAL SCORE TO RANDOM SCORE


		if (counter == numberToGuess){
			alert('You won!!!');
			wins++;

		// LOSE CONDITION: IF TOTAL SCORE IS ABOVE RANDOM SCORE
		} else if (counter > numberToGuess) {
			alert('You lost!');
			losses++;
		}

		// REGARDLESS OF RESULT ADD THE WIN OR LOSS TO THE HTML THAT SHOWS WIN OR LOSSES AND RESET THE GAME

		if (counter >= numberToGuess) {
			$('#winvloss').text('Wins: ' + wins + ' of ' + (wins + losses) + ' games');

			__init();		
		}
	});
}

__init();