module.exports = {
	sumOfRangeR: function(n) {
	if (n === 1) {
		return 1;
	}	
	return n + sumOfRangeR(n-1);
}
};

