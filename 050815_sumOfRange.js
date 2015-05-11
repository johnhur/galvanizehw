// Define a function sumOfRange that takes a 
//number x and returns the sum of all digits between 0 and x.

//iterative
function sumOfRange(x) {
	var sum = 0;
	for(var i = 0; i <= x; i++) {
		sum += i;
	}
	return sum;
}

console.log(sumOfRange(10); 
//recursive

function sumOfRangeR(n) {
	if (n === 1) {
		return 1;
	}	
	return n + sumOfRangeR(n-1);
}