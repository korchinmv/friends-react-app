const SearchingInput = ({ searchInput, setSearchInput }) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form className='mb-5 w-100'>
      <input
        type='text'
        className='form-control'
        id='search-friend'
        name='search-friend'
        placeholder='Поиск по имени'
        value={searchInput}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchingInput;
