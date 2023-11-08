function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
};


// Create Library Array
const myLibrary = [];
const book1 = new Book("The Hobbit", "JRR Tolkien", 500, true)
myLibrary.push(book1)
