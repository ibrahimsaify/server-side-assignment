function timeConvert(minutes) {
	var hours = Math.floor(minutes / 60);
	var remainingMinutes = minutes % 60;
	return minutes + " minutes = " + hours + " hour(s) and " + remainingMinutes + " minute(s).";
}

// Example usage:
console.log(timeConvert(200));
