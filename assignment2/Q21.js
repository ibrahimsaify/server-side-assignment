class Node {
	constructor(data) {
    	this.data = data;
    	this.next = null;
	}
}

class LinkedList {
	constructor() {
    	this.head = null;
	}

	isEmpty() {
    	return this.head === null;
	}
}

// Example usage:
var linkedList = new LinkedList();
console.log(linkedList.isEmpty()); // true

linkedList.head = new Node(10);
console.log(linkedList.isEmpty()); // false
