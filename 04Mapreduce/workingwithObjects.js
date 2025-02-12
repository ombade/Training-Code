bookLibrary = {
  books: [{ title: "As a man thinketh", auther: "Paulo Coelho", yearOfPublish: 5 }],
};

function addBook(book) {
  bookLibrary.books.push(book);
}

function removeBook(title) {
  bookLibrary.books = bookLibrary.books.filter((book) => book.title !== title);
}

function getBooksByAuthor(auther) {
  return bookLibrary.books.find((book) => book.auther === auther);
}   

function getAllbooks() {
  return bookLibrary.books;
}

console.log(getAllbooks());
console.log(getBooksByAuthor("Paulo Coelho"));
console.log(removeBook("As a man thinketh"));
console.log(getAllbooks());
console.log(
  addBook({
    title: "Think like a monk ",
    auther: "jay shetty",
    yearOfPublish: 5,
  })
);
console.log(getAllbooks());
