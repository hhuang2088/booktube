export default (book, readingList) => {
  for (let i = 0; i < readingList.length; i++) {
    if (book.id === readingList[i].id) {
      return true;
    }
  }
  return false;
};
