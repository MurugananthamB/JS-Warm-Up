/* Given an object and a key, "getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return null. */

var obj = {
	mykey: 'value'
}

function getProperty(obj, key) {
	// Your code Starts here
	return obj[key] !== undefined ? obj[key] : undefined;
	// Your code Ends here
}
/*
Lines For TestCase

getProperty(obj,'mykey');
getProperty(obj,'dummykey');
*/