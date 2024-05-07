class Rectangle {
	constructor(width, height) {
    	this.width = width;
    	this.height = height;
	}

	calculateArea() {
    	return this.width * this.height;
	}

	calculatePerimeter() {
    	return 2 * (this.width + this.height);
	}
}

var rectangle = new Rectangle(5, 10);

var area = rectangle.calculateArea();
var perimeter = rectangle.calculatePerimeter();

console.log("Area:", area); //50
console.log("Perimeter:", perimeter); //30
