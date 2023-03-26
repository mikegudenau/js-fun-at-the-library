function shelfBook(bookTitle, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    return sciFiShelf.unshift(bookTitle);
  }
}

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(titles) {
  var list = [];
  for (var i = 0; i < titles.length; i++) {
    list.push(titles[i].title);
  }
  return list.join(", ");
}

function searchShelf(bookShelf, title) {
  var bookOnShelf = false;
  for (var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title === title) {
      bookOnShelf = true;
    }
  }
  if (bookOnShelf) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
