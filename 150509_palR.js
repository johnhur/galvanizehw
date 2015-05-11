//iterative
function pal(string) {
	reverse = ""
	for (var i = 0; i < string.length; i++) {
		reverse += string.charAt(string.length - 1 - i);
	}
	if (reverse === string) {
		return true;
	}
	else {
		return false;
	}
}


//recursive
function palR(str, i) {
	if (i == Math.floor((str.length)/2)) {
		return true;
	}
	if (str.charAt(i) == str.charAt(str.length - 1 - i)) {
		return palR(str, i+=1);
	}
	else{
		return false
	}
}
palR('ana', 0);