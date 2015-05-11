var sumrange = require("../testSumOfRange.js");

describe('sum of range', function() {
	it('if input of 1 returns 1, return true', function() {
		expect(sumrange.sumOfRangeR(1)).toEqual(1);
	});
	// it('returns sum of the numbers up to the inputted number', function() {
	// 	expect(sumrange.sumOfRangeR(10)).toEqual(55);
	// });
});