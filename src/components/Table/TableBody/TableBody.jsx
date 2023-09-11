import Friend from "../../Friend/Friend";

const TableBody = ({
  filtredFriends,
  filtredBestFriends,
  isMainPage,
  currentList,
  onAddBestFriend,
  onDeleteFriend,
  onDeleteBestFriend,
  searchFriendById,
}) => {
  return (
    <tbody>
      {isMainPage && filtredFriends.length !== 0 ? (
        currentList(filtredFriends).map((friend, index) => {
          return (
            <Friend
              key={friend._id}
              friend={friend}
              index={index}
              onAddBestFriend={onAddBestFriend}
              onDeleteFriend={onDeleteFriend}
              isMainPage={isMainPage}
              searchFriendById={searchFriendById}
            />
          );
        })
      ) : filtredBestFriends.length !== 0 ? (
        currentList(filtredBestFriends).map((friend, index) => {
          return (
            <Friend
              key={friend._id}
              friend={friend}
              index={index}
              onDeleteBestFriend={onDeleteBestFriend}
              isMainPage={isMainPage}
            />
          );
        })
      ) : (
        <tr>
          <td className='text-center' colSpan='5'>
            Список пуст
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
