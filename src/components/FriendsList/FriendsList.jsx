import { useState, useEffect } from "react";
import FriendsCount from "../FriendsCount/FriendsCount";

const FriendsList = ({ friends, setFriends }) => {
  const [countFriend, setCountFriend] = useState(0);
  const [professionsSelectList, setProfessionsSelectList] = useState([]);
  const [qualitiesSelectList, setQualitiesSelectList] = useState([]);

  useEffect(() => {
    setCountFriend(friends.length);
    getProfessionsSelectList();
    getQualitiesSelectList();
  }, [friends]);

  const getProfessionsSelectList = () => {
    const professionsArray = friends.map((friend) => {
      return friend.profession.name;
    });
    const uniqueProfessionList = professionsArray.filter(
      (item, i, ar) => ar.indexOf(item) === i
    );
    setProfessionsSelectList(uniqueProfessionList);
  };

  const getQualitiesSelectList = () => {
    const qualitiesArray = friends.reduce((total, friend) => {
      const arr = friend.qualities.map((quality) => {
        return quality.name;
      });
      return [...total, ...arr];
    }, []);
    const uniqueQualitiesList = qualitiesArray.filter(
      (item, i, ar) => ar.indexOf(item) === i
    );
    setQualitiesSelectList(uniqueQualitiesList);
  };

  return (
    <>
      <FriendsCount friendsCount={countFriend} />

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Имя</th>
            <th scope="col">
              <select
                className="form-select"
                id="select-proffesion"
                defaultValue="Профессия..."
                required
              >
                {professionsSelectList.map((prof, i) => (
                  <option key={i}>{prof}</option>
                ))}
              </select>
            </th>
            <th scope="col">
              <select
                className="form-select"
                id="select-quality"
                defaultValue="Качества..."
                required
              >
                {qualitiesSelectList.map((q, i) => (
                  <option key={i}>{q}</option>
                ))}
              </select>
            </th>
            <th scope="col">Действие</th>
          </tr>
        </thead>

        <tbody>
          {friends.map((friend, index) => {
            return (
              <tr key={friend._id}>
                <th scope="row">{index + 1}</th>
                <td>{friend.name}</td>
                <td>{friend.profession.name}</td>
                <td>
                  {friend.qualities.map((quality) => (
                    <span
                      className={`badge btn-${quality.color} m-1`}
                      key={quality._id}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>
                  <button className="btn btn-success me-3">
                    Добавить в лучшие друзья
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setFriends(friends.filter((f) => f._id !== friend._id));
                    }}
                  >
                    Удалить друга
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FriendsList;
