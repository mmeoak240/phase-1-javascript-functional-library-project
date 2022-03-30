function myEach(testArr, alert) {
	if (Array.isArray(testArr) === true) {
		testArr.forEach((item) => alert(item));
	} else {
		Object.values(testArr).forEach((item) => alert(item));
	}
	return testArr;
}

function myMap(testArr, callback) {
	if (Array.isArray(testArr) === true) {
		return testArr.map((item) => callback(item));
	} else {
		return Object.values(testArr).map((item) => callback(item));
	}
}

function myReduce(collection, callback, acc) {
	acc = acc || collection[0];

	for (let accessor in collection) {
		acc = callback(acc, collection[accessor], collection);
	}
	return acc;
}
