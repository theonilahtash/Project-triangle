function triangle(){

	var sideOne = parseFloat(document.getElementById('sideOne').value);
	var sideTwo = parseFloat(document.getElementById('sideTwo').value);
	var sideThree = parseFloat(document.getElementById('sideThree').value);


	var sideOne&Two = sideOne + sideTwo;
	var sideOne&Three = sideOne + sideThree;
	var sideTwo&Three = sideTwo + sideThree;


	 if ((sideOne&Two < sideThree) || (sideOne&Three < sideTwo) || (sideTwo&Three < sideOne)) {
		 alert("not a triangle");
	}
	else if(sideOne=== sideTwo && sideTwo === sideThree){
		alert( "an equilateral triangle");
	}

	else if(sideOne === sideTwo || sideTwo === sideThree || sideOne===sideThree){
		alert(" an isosceles triangle");
	}
	else if((sideOne&Two > sideThree) || (sideOne&Three > sideTwo) || (sideTwo&Three > sideOne)){
		alert("Scalene triangle ");
	}
	else {
		alert("no values inserted");
	}
}
var displayWord = function(words){
var words = ["Refresh page" , "to see more"];
words.forEach(function(word){
	alert(word);
});
}
