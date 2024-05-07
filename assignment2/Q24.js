var invalidJSONString = '{"name": "Jason", "age": 24,}';

try {
	var parsedObject = JSON.parse(invalidJSONString);
	console.log(parsedObject);
} catch (error) {
	if (error instanceof SyntaxError) {
    	console.log("Error: Invalid JSON string.");
    	console.log(error.message);
	} else {
    	throw error;
	}
}
