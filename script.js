// Create an object to encapsulate the library functionality
const libraryApp = {
  // Library array
  myLibrary: [],

  // Book constructor
  Book: function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  },

  // Toggle read status prototype method
  toggleReadStatus: function(book) {
    book.read = !book.read;
  },

  // Function to display books
  displayBooks: function() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear existing content

    this.myLibrary.forEach((book, index) => {
      const bookInfo = document.createElement('div');
      bookInfo.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read ? 'Yes' : 'No'}`;

      // Create a "Remove" button for each book
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(book);
        this.displayBooks();
      });

      // Create a "Toggle Read Status" button for each book
      const toggleReadButton = document.createElement('button');
      toggleReadButton.textContent = 'Toggle Read Status';
      toggleReadButton.addEventListener('click', () => {
        this.toggleReadStatus(book);
        this.displayBooks();
      });

      bookInfo.appendChild(removeButton);
      bookInfo.appendChild(toggleReadButton);

      bookList.appendChild(bookInfo);
    });
  },

  // Function to add a new book
  addBook: function(title, author, pages, read) {
    const newBook = new this.Book(title, author, pages, read);
    this.myLibrary.push(newBook);
    this.saveLibraryToLocalStorage();
    this.displayBooks();
  },

  // Function to remove a book
  removeBook: function(book) {
    const bookIndex = this.myLibrary.indexOf(book);
    if (bookIndex !== -1) {
      this.myLibrary.splice(bookIndex, 1);
      this.saveLibraryToLocalStorage();
    }
  },

  // Function to save library to local storage
  saveLibraryToLocalStorage: function() {
    localStorage.setItem('myLibrary', JSON.stringify(this.myLibrary));
  },

  // Function to load library from local storage
  loadLibraryFromLocalStorage: function() {
    const libraryData = localStorage.getItem('myLibrary');
    if (libraryData) {
      this.myLibrary.length = 0;
      this.myLibrary.push(...JSON.parse(libraryData));
    }
  },

  // Initialization function
  init: function() {
    this.loadLibraryFromLocalStorage();
    this.displayBooks();

    const newBookForm = document.getElementById('new-book-form');
    newBookForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const pages = document.getElementById('pages').value;
      const read = document.getElementById('read').checked;
      this.addBook(title, author, pages, read);
      newBookForm.reset();
      newBookForm.classList.add('hidden');
    });

    // Other initialization code can go here
  },
};

// Call the initialization function
libraryApp.init();
