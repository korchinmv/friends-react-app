import FriendsCount from "../FriendsCount/FriendsCount";

const FriendsList = ({ friends }) => {
  console.log(friends);
  return (
    <>
      <FriendsCount />

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Имя</th>
            <th scope="col">Профессия</th>
            <th scope="col">Качества</th>
            <th scope="col">Рейтинг</th>
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
                    <span className={`badge btn-${quality.color} m-1`}>
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{friend.rate}</td>
                <td>
                  <button className="btn ">Удалить друга</button>
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
