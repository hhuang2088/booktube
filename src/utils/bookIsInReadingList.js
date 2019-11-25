export default (book, readingList) => {
  if (book === undefined || readingList === undefined) {
    return;
  }
  for (let i = 0; i < readingList.length; i++) {
    if (book.id === readingList[i].id) {
      return true;
    }
  }
  return false;
};
