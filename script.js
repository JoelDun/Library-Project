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

    // Create a "Remove" button for each book
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {gi
        const bookIndex = myLibrary.indexOf(book)

        if (bookIndex !== -1) {
          myLibrary.splice(bookIndex, 1);
        }

        displayBooks();
    });
    
    // Create a "Toggle Read Status" button for each book
    const toggleReadButton = document.createElement('button');
    toggleReadButton.textContent = 'Toggle Read Status';
    toggleReadButton.addEventListener('click', () => {
       book.toggleReadStatus();
   
       // Update the displayed book list
       displayBooks();
   });
    
    bookInfo.appendChild(removeButton);
    bookInfo.appendChild(toggleReadButton);
    
    bookList.appendChild(bookInfo);
  })
}

//Call the displayBooks to initially show the books
displayBooks()


const newBookForm = document.getElementById('new-book-form');

newBookForm.addEventListener('submit', function(event){
  event.preventDefault();

    // Get form input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    // Create a new Book object
    const newBook = new Book(title, author, pages, read);

      // Add the new book to myLibrary
      myLibrary.push(newBook);

      displayBooks();

      newBookForm.reset();

      newBookForm.classList.add('hidden'); 

})



function saveLibraryToLocalStorage() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}


function loadLibraryFromLocalStorage() {
  const libraryData = localStorage.getItem('myLibrary');
  if (libraryData) {
    myLibrary.length = 0
    myLibrary.push(...JSON.parse(libraryData));
  }
}


window.onload = () => {
  loadLibraryFromLocalStorage()
  displayBooks();
}