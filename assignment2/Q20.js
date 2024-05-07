class Stack {
	constructor() {
    	this.items = [];
	}

	push(element) {
    	this.items.push(element);
	}

	search(element) {
    	return this.items.includes(element);
	}
}

// Example usage:
var stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);

console.log("Is 10 present in the stack?", stack.search(10)); // true
console.log("Is 20 present in the stack?", stack.search(20)); // false
