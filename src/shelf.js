function shelfBook(bookTitle, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    return sciFiShelf.unshift(bookTitle);
  }
}

// The unshift() method adds one or more elements to the
// beginning of an array and returns the new length of the array.

function unshelfBook(bookTitle, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === bookTitle) {
      sciFiShelf.splice(i, 1);
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
  var list = [];
  for (var i = 0; i < bookShelf.length; i++) {
    list.push(bookShelf[i].title);
    if (bookShelf[i].title.includes(title)) {
      return true;
    }
  }
  return false;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
