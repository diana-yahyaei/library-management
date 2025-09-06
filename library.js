"usestrct";
let library = [
  { title: "JavaScript Basics", author: "John Doe", available: true },
  { title: "Learn Node.js", author: "Jane Smith", available: true },
  { title: "Frontend Guide", author: "Mike Johnson", available: false },
];
for (let i = 0; i < library.length; i++) {
  console.log(
    `${library[i].title}(${
      library[i].available ? "available" : "not available"
    })`
  );
}
let user = {
  name: "Alice",
  borrowedBooks: [],
  borrowBook: function (bookTitle) {
    let book = library.find((b) => b.title === bookTitle);
    if (!book) {
      console.log(`${bookTitle} is not founded in the library`);
      return;
    } else if (!book.available) {
      console.log(`sorry ${bookTitle} is not available`);
      return;
    }
    book.available = false;
    this.borrowBook.push(bookTitle);
    console.log(`user ${this.name}borrowed${bookTitle} `);

    this.showBooks();
  },

  returnBook: function (bookTitle) {
    let bookindex = this.borrowedBooks.indexOf(bookTitle);
    if (bookindex === -1) {
      console.log(`user has not borrowed this book(${bookTitle})`);
      return;
    }
    this.borrowedBooks.slice(index, 1);
    let book = library.find((b) => b.title === bookTitle);
    book.available = true;
    console.log(`User ${this.name} returned "${bookTitle}"`);
  },

  showBooks: function () {
    for (let i = 0; i < this.borrowedBooks.length; i++) {
      console.log(`${this.borrowedBooks[i]}`);
    }
    console.log(`total borrowed: ${this.borrowedBooks.length}`);

    let total = 0;

    let count = this.borrowedBooks.length;
    while (count > 0) {
      count--;
      total++;
    }
    console.log(`total borrowed: ${total}`);
  },
};
function displayLibrary() {
  console.log(`Available books in library:`);
  for (let book of library) {
    console.log(
      `- ${book.title} (${book.available ? "Available" : "Not Available"})`
    );
  }
}
