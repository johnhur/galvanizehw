//iterative
for (var i = 99; i >= 1; i--) {
	if (i > 2) {
      console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
 }   else if (i === 2) {
      console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall.");
 } else {
		console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. \n \nNo more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some mor, 99 bottles of beer on the wall.");
	};
}


// recursive
function singSong(n) {
	if (n == 0) {
		console.log("now it's time to visit the hospital. you have alcohol poisoning.")
		return "done"
	}
	if (n == 1){
		console.log(1 + " more bottle of beer on the wall," + 1 + "\n" +
			"more bottole of beer. You take it down and pass it around, no more bottles of \n"
			+ "beer on the wall!");
	}
	if (n > 1) {
		console.log(n + " bottles of beer on the wall," + n + " bottles of beer,\n" + 
		" you take one down and pass it around" + (n-1) + " bottles of beer on the wall" ); 
	}
	return singSong(n-1);
}