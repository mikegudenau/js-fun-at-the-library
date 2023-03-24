function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return character;
}

// Refactor
// function buildMainCharacter(name, age, pronouns) {
//   return character = {
//     name: name,
//     age: age,
//     pronouns: pronouns,
//   };
// }

function saveReview(review, array) {
  if (!array.includes(review)) {
    return array.push(review);
  }
}

function calculatePageCount(bookTitle) {
  var pages = (bookTitle.length *= 20);
  return pages;
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
  return book;
}

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount *= .75;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
