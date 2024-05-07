var images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Replace these with actual image URLs
var currentIndex = 0;

function showSlide(index) {
	var image = document.getElementById("image");
	if (index >= 0 && index < images.length) {
    	image.src = images[index];
    	currentIndex = index;
	}
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % images.length;
	showSlide(currentIndex);
}

function prevSlide() {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	showSlide(currentIndex);
}

showSlide(currentIndex);
