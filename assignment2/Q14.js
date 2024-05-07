var library = [
	{
    	author: 'Bill Gates',
    	title: 'The Road Ahead',
    	readingStatus: true
	},
	{
    	author: 'Steve Jobs',
    	title: 'Walter Isaacson',
    	readingStatus: true
	},
	{
    	author: 'Suzanne Collins',
    	title: 'Mockingjay: The Final Book of The Hunger Games',
    	readingStatus: false
	}
];

for (var i = 0; i < library.length; i++) {
	var book = library[i];
	var bookInfo = "'" + book.title + "' by " + book.author;

	if (book.readingStatus) {
    	console.log("You have already read " + bookInfo + ".");
	} else {
    	console.log("You haven't read " + bookInfo + " yet.");
	}
}
