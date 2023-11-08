function Library(book, author, pages) {
  this.book = book;
  this.author = author;
  this.pages = pages;

  this.giveInfo = function() {
    return `Book: ${this.book}, Author: ${this.author}, Pages: ${this.pages}`;
  }
}

let test = new Library("Harry Potter", "J.K. Rowling", 69);
console.log(test.giveInfo());
