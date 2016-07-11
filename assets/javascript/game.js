// VARIABLES
var numberToGuess = 53;

var counter = 0;

var numbers = [10, 5, 3, 7];



// SHUFFLE CRYSTAL VALUES AT THE BEGINNING OF THE GAME

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

shuffle(numbers);
console.log(numbers);



// DISPLAY THE "REVEAL VALUE" TO THE USER

$('#number').text(numberToGuess);

// THERE ARE FOUR CRYSTALS AVAILABLE. NEED TO BE  ABLE TO DO THE FOLLOWING:

	// ADD DIFFERENT IMAGES TO MULTIPLE IMAGE TAGS
	// ATTAIN A RANDOM VALUE BASED ON THE ARRY NUMBERS
	// CLICK ON A CRYSTAL AND ADD A SPECIFIC AMOUNT OF POINTS TO TOTAL SCORE

for (var i=0; i< numbers.length; i++) {

	var imageCrystal = $('<img>');

	imageCrystal.attr('data-num', numbers[i]);

	imageCrystal.attr('class', 'image'+ [i]);

	imageCrystal.addClass('crystalImage');

	$('#crystals').append(imageCrystal);


}


$('.crystalImage').on('click', function(){
	counter = counter + parseInt($(this).data('num'));


// DISPLAY GEM VALUE THAT USER CLICKED ON. THE VALUE OF THE CRYSTAL IS HIDDEN UNTIL CLICKED.

	$('#yourNumber').text(counter);


// WIN CONDITION: MATCH TOTAL SCORE TO RANDOM SCORE


	if (counter == numberToGuess){
		alert('You won!!!');
		counter = 0;


// LOSE CONDITION: IF TOTAL SCORE IS ABOVE RANDOM SCORE
	} else if (counter > numberToGuess) {
		alert('You lost!');
		counter = 0;
	}
});




// SHOW USER HOW MANY TIMES THEY WON VERSUS HOW MANY TIMES THEY LOSS



// EACH TIME WHEN THE GAME STARTS, THE GAME WILL CHANGE THE VALUES OF EACH CRYSTAL



