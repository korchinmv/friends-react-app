import {
  paginate,
  prevPage,
  nextPage,
  getPageNumbers,
} from "../../utils/paginate";

const Pagination = ({
  friendsPerPage,
  totalFriends,
  totalBestFriends,
  setCurrentPage,
  currentPage,
  isMainPage,
}) => {
  const checkPage = (page) => {
    if (page) {
      return totalFriends;
    }
    return totalBestFriends;
  };

  const pagesQuantity = getPageNumbers(checkPage(isMainPage), friendsPerPage);

  return (
    <>
      {pagesQuantity.length > 1 ? (
        <nav aria-label='Навигация'>
          <ul className='pagination justify-content-center'>
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className='page-link'
                onClick={() => prevPage(setCurrentPage)}
              >
                {"<"}
              </button>
            </li>
            {pagesQuantity.map((number) => (
              <li
                className={`page-item ${
                  number === currentPage ? "active" : ""
                }`}
                key={number}
              >
                <button
                  className='page-link'
                  onClick={() => paginate(number, setCurrentPage)}
                >
                  {number}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === pagesQuantity.slice(-1)[0] ? "disabled" : ""
              }`}
            >
              <button
                className='page-link'
                onClick={() => nextPage(setCurrentPage)}
              >
                {">"}
              </button>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default Pagination;
