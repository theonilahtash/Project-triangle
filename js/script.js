function triangle(){

	var A = parseFloat(document.getElementById('sideOne').value);
	var B = parseFloat(document.getElementById('sideTwo').value);
	var C = parseFloat(document.getElementById('sideThree').value);


	var AB = A + B;
	var AC = A + C;
	var BC = B + C;


	 if ((AB < C) || (AC < B) || (BC < A)) {
		 alert("There is no triangle formed");
	}
	else if(A === B && B === C){
		alert("You have an equilateral triangle");
	}

	else if(A === B || B === C || A===C){
		alert("You have an isosceles triangle");
	}
	else if((AB > C) || (AC > B) || (BC > A)){
		alert("Scalene triangle formed");
	}
	else {
		alert("try again");
	}
}
var displayWord = function(words){
var words = ["Refresh page" , "to see more"];
words.forEach(function(word){
	alert(word);
});
}
