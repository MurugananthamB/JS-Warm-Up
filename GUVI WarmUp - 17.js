/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	// Your code Starts here
	const deltaX = x2 - x1;
	const deltaY = y2 - y1;
	const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
	return Math.floor(distance); // Rounds down
	// Your code Ends here
}
/*
Lines For TestCase
getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/