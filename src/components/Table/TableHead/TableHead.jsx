const TableHead = ({
  filtredFriends,
  filtredBestFriends,
  professions,
  qualities,
  onChangeOptionProfession,
  onChangeOptionQuality,
  sortBy,
  sorted,
  isMainPage,
}) => {
  const checkPage = (page) => {
    return page ? filtredFriends : filtredBestFriends;
  };
  return (
    <>
      {professions && qualities ? (
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th
              scope='col'
              role='button'
              onClick={() => sortBy(checkPage(isMainPage), sorted, isMainPage)}
            >
              Имя
              {sorted ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-arrow-down-short'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-arrow-up-short'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z'
                  />
                </svg>
              )}
            </th>

            <th scope='col'>
              <label htmlFor='select-proffesion'>Профессия:</label>
              <select
                className='form-select'
                id='select-proffesion'
                defaultValue={""}
                onChange={onChangeOptionProfession}
                required
              >
                <option value={""} disabled>
                  -- Выберите профессию --
                </option>
                {professions.map((p) => (
                  <option key={p._id} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value={"all"}>Все профессии</option>
              </select>
            </th>
            <th scope='col'>
              <label htmlFor='select-quality'>Качество:</label>
              <select
                className='form-select'
                id='select-quality'
                defaultValue={""}
                onChange={onChangeOptionQuality}
                required
              >
                <option value={""} disabled>
                  -- Выберите качество --
                </option>
                {qualities.map((q) => (
                  <option key={q._id} value={q.name}>
                    {q.name}
                  </option>
                ))}
                <option value={"all"}>Все качества</option>
              </select>
            </th>
            <th scope='col'>Действие</th>
          </tr>
        </thead>
      ) : null}
    </>
  );
};

export default TableHead;
