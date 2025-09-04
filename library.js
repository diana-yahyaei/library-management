"usestrct";
let library = [
  { title: "JavaScript Basics", author: "John Doe", available: true },
  { title: "Learn Node.js", author: "Jane Smith", available: true },
  { title: "Frontend Guide", author: "Mike Johnson", available: false },
];

let user = {
  name: "Alice",
  borrowedBooks: [],
  borrowBook: function (bookTitle) {
    // implement borrowing logic here
  },
  returnBook: function (bookTitle) {
    // implement returning logic here
  },
};
for (let i = 0; i < library.length; i++) {
  console.log(library[i]);
}

const name = prompt("enter book`s name you want:");
// console.log(library.includes(library.title));
