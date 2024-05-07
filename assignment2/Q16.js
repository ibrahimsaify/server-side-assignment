function parseURL(url) {
	var parser = document.createElement('a');
	parser.href = url;

	return {
    	protocol: parser.protocol,
    	hostname: parser.hostname,
    	port: parser.port,
    	pathname: parser.pathname,
    	search: parser.search,
    	hash: parser.hash,
    	origin: parser.origin
	};
}

// Example usage:
var url = "https://www.example.com:8080/path/to/page?key1=value1&key2=value2#section1";
var parsedURL = parseURL(url);
console.log(parsedURL);
