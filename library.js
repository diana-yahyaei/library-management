"usestrct";
let library = [
  { title: "JavaScript Basics", author: "John Doe", available: true },
  { title: "Learn Node.js", author: "Jane Smith", available: true },
  { title: "Frontend Guide", author: "Mike Johnson", available: false },
];

let user = {
  name: "Alice",
  borrowedBooks: [1],
  borrowBook: function (bookTitle) {
    // implement borrowing logic here
    if (library.includes(library[0]) === true) {
      console.log(
        "user" +
          object.name +
          " borrowed" +
          library[0] +
          "total borrowed:" +
          this.borrowBook
      );
    } else if (library.includes(library[0]) === false) {
      console.log(`sorry ${library[0]} is not available`);
    } else {
      console.log(`${library[0]} not founded`);
    }
  },
  returnBook: function (bookTitle) {
    // implement returning logic here
    if (user.borrowBook === true) {
      user.borrowBook = 0;
      console.log("user" + user.name + "returned" + library[0]);
    } else {
      console.log(`user has not borrowed ${library[0]}`);
    }
  },
};
// let user2 = {
//   name: "hanna",
//   borrowedBooks: [],
//   borrowBook: function (bookTitle) {
//     // implement borrowing logic here
//   },
//   returnBook: function (bookTitle) {
//     // implement returning logic here
//   },
// };
for (let i = 0; i < library.length; i++) {
  console.log(library[i]);
}

const name = prompt("enter book`s name you want:");
console.log(library.includes(library[0]));
console.log(borrowBook);
console.log(user.borrowBook);
while (user.borrowBook === true) {
  borrowBook++;
}
