import Preloader from "../Preloader/Preloader";

const Searching = ({ clickSearch, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className='text-center pt-5'>
          <h1 className='mb-4'>Нажмите кнопку для поиска друзей</h1>
          <button className='btn btn-info' onClick={clickSearch}>
            Вот кнопка
          </button>
        </div>
      )}
    </>
  );
};

export default Searching;
