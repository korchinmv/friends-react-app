import { Link } from "react-router-dom";

const Friend = ({
  friend,
  index,
  onAddBestFriend,
  onDeleteFriend,
  onDeleteBestFriend,
  isMainPage,
  searchFriendById,
}) => {
  return (
    <tr>
      <th scope='row'>{index + 1}</th>
      <td>
        <Link
          to={`/${isMainPage ? "friends" : "best-friends"}/${123}`}
          onClick={searchFriendById}
        >
          {friend.name}{" "}
        </Link>{" "}
      </td>
      <td>{friend.profession.name}</td>
      <td>
        {friend.qualities.map((quality) => (
          <span className={`badge btn-${quality.color} m-1`} key={quality._id}>
            {quality.name}
          </span>
        ))}
      </td>
      <td>
        {isMainPage ? (
          <>
            <button
              className='btn btn-success me-3'
              onClick={() => onAddBestFriend(friend)}
            >
              Добавить в лучшие друзья
            </button>
            <button
              className='btn btn-danger'
              onClick={() => onDeleteFriend(friend)}
            >
              Удалить друга
            </button>
          </>
        ) : (
          <button
            className='btn btn-danger'
            onClick={() => onDeleteBestFriend(friend)}
          >
            Удалить лучшего друга
          </button>
        )}
      </td>
    </tr>
  );
};

export default Friend;
