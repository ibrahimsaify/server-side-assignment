function displayTime() {
	var date = new Date();
	var hours = formatTime(date.getHours());
	var minutes = formatTime(date.getMinutes());
	var seconds = formatTime(date.getSeconds());
	console.log(hours + ":" + minutes + ":" + seconds);
}

function formatTime(time) {
	return time < 10 ? "0" + time : time;
}

setInterval(displayTime, 1000);
