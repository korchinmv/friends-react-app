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
  return (
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th
          scope='col'
          role='button'
          onClick={() => sortBy({ isMainPage ? "23" : "123"}, sorted)}
        >
          Имя
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
  );
};

export default TableHead;
