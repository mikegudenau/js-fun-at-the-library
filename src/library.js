function createLibrary(libName) {
  var library = {
    name: libName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}

function addBook(libName, bookTitle) {
  if (bookTitle.genre === "fantasy") {
    libName.shelves.fantasy.push(bookTitle);
  } else if (bookTitle.genre === "nonFiction") {
    libName.shelves.nonFiction.push(bookTitle);
  } else if (bookTitle.genre === "fiction") {
    libName.shelves.fiction.push(bookTitle);
  }
  return bookTitle;
}

function checkoutBook(libName, bookTitle, genre) {
  var bookExists = false;
  for (var i = 0; i < libName.shelves[genre].length; i++) {
    if (libName.shelves[genre][i].title === bookTitle) {
      libName.shelves[genre].splice(i, 1);
      bookExists = true;
    }
  }
  if (bookExists) {
    return `You have now checked out ${bookTitle} from the ${libName.name}.`;
  } else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${libName.name}.`;
  }
}

function takeStock(libName, genre) {
  var numOfBooks = 0;
  if (genre) {
    numOfBooks = libName.shelves[genre].length;
    return `There are a total of ${numOfBooks} ${genre} books at the ${libName.name}.`;
  } else {
    numOfBooks =
      libName.shelves.fiction.length +
      libName.shelves.nonFiction.length +
      libName.shelves.fantasy.length;
    return `There are a total of ${numOfBooks} books at the ${libName.name}.`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock,
};
