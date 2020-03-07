const calculateArea = require('../src/07-AreaOfARectangularRoom');

describe('calculateArea', () => {
	test('returns the area of a room in feet and metres', () => {
		expect(calculateArea(2, 2)).toEqual({ feet: 4, metres: 0.37161216 });
		expect(calculateArea(3, 3)).toEqual({ feet: 9, metres: 0.83612736 });
	})
});