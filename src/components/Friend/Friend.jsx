import { Link } from "react-router-dom";
import QualitiesList from "../QualitiesList/QualitiesList";

const Friend = ({
  friend,
  index,
  onAddBestFriend,
  onDeleteFriend,
  onDeleteBestFriend,
  isMainPage,
}) => {
  return (
    <tr>
      <th scope='row'>{index + 1}</th>
      <td>
        <Link to={`/${isMainPage ? "friends" : "best-friends"}/${friend._id}`}>
          {friend.name}
        </Link>
      </td>
      <td>{friend.profession.name}</td>
      <td>
        <QualitiesList qualitiesArr={friend.qualities} />
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
