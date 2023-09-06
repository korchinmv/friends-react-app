import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = ({
  filtredFriends,
  filtredBestFriends,
  sortedFriendsList,
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
        isMainPage={isMainPage}
        currentList={currentList}
        onAddBestFriend={onAddBestFriend}
        onDeleteFriend={onDeleteFriend}
        onDeleteBestFriend={onDeleteBestFriend}
        filtredFriends={filtredFriends}
        filtredBestFriends={filtredBestFriends}
      />
    </table>
  );
};

export default Table;
