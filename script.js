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


// Function to display books
function displayBooks() {
  const bookList  = document.getElementById('book-list');
  bookList.innerHTML = ''; //Clear existing content

  myLibrary.forEach((book, index) => {
    const bookInfo = document.createElement('div');
    bookInfo.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read ? 'Yes' : 'No'}`;
    bookList.appendChild(bookInfo);
  })
}

//Call the displayBooks to initially show the books
displayBooks()