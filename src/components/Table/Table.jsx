import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = ({
  filtredFriends,
  filtredBestFriends,
  professions,
  qualities,
  onChangeOptionProfession,
  onChangeOptionQuality,
  isMainPage,
  currentList,
  onAddBestFriend,
  onDeleteFriend,
  onDeleteBestFriend,
  sortBy,
  sorted,
  searchFriendById,
}) => {
  return (
    <table className='table table-hover mb-5'>
      <TableHead
        filtredFriends={filtredFriends}
        filtredBestFriends={filtredBestFriends}
        professions={professions}
        qualities={qualities}
        onChangeOptionProfession={onChangeOptionProfession}
        onChangeOptionQuality={onChangeOptionQuality}
        sortBy={sortBy}
        sorted={sorted}
        isMainPage={isMainPage}
      />
      <TableBody
        filtredFriends={filtredFriends}
        filtredBestFriends={filtredBestFriends}
        isMainPage={isMainPage}
        currentList={currentList}
        onAddBestFriend={onAddBestFriend}
        onDeleteFriend={onDeleteFriend}
        onDeleteBestFriend={onDeleteBestFriend}
        searchFriendById={searchFriendById}
      />
    </table>
  );
};

export default Table;
