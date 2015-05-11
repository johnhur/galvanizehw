//iterative
function power(base, exp) {
	return Math.pow(base, exp);
}

//recursive
function power(base,exp) {
	if (exp === 0) {
		return 1;
	}
	if (exp === 1) {
		return base;
	}
	if (exp === 2) {
		return (base * base);
	}
	return (power(base, exp-1) * base);
};

