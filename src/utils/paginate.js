export const paginate = (pageNumber, setCurrentPage) => {
  setCurrentPage(pageNumber);
};

export const prevPage = (setCurrentPage) => {
  setCurrentPage((prev) => prev - 1);
};

export const nextPage = (setCurrentPage) => {
  setCurrentPage((prev) => prev + 1);
};

export const getPageNumbers = (array, friendsPerPage) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(array.length / friendsPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};
