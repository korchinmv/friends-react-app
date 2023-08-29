import { useState } from "react";
import FriendsCount from "../FriendsCount/FriendsCount";
import { professions } from "../../api/user.api.js";
import { qualities } from "../../api/user.api";
import { NavLink } from "react-router-dom";

const FriendsList = ({ friends, setFriends, bestFriends, setBestFriends }) => {
  const [filtredFriends, setFiltredFriends] = useState(friends);
  const [filtredBestFriends, setFiltredBestFriends] = useState(bestFriends);
  const isMainPage = window.location.pathname === "/";
  console.log(filtredBestFriends);
  const getOptions = (professions) => {
    let arr = [];
    for (var key in professions) {
      arr.push(professions[key]);
    }
    return arr;
  };

  const handleChangeOptionProfession = (e) => {
    if (e.target.value === "all") {
      if (isMainPage) {
        setFiltredFriends(friends);
      } else {
        setFiltredBestFriends(filtredBestFriends);
      }
    } else {
      if (isMainPage) {
        const newArray = friends.filter((f) => {
          return f.profession.name === e.target.value;
        });
        setFiltredFriends(newArray);
      } else {
        const newArray = bestFriends.filter((f) => {
          return f.profession.name === e.target.value;
        });
        setFiltredBestFriends(newArray);
      }
    }
  };

  const handleChangeOptionQuality = (e) => {
    if (e.target.value === "all") {
      setFiltredFriends(friends);
    } else {
      const newArray = filtredFriends.filter((f) => {
        return f.qualities.some((item) => item.name === e.target.value);
      });
      setFiltredFriends(newArray);
    }
  };

  return (
    <>
      <FriendsCount
        friendsCount={filtredFriends.length}
        bestFriendsCount={filtredBestFriends.length}
        isMainPage={isMainPage}
      />
      <NavLink
        style={{ width: "fit-content" }}
        className={
          "link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover d-block mb-5 mx-auto"
        }
        to={isMainPage ? "/best-friends" : "/"}
      >
        {isMainPage
          ? "Посмотреть список лучших друзей"
          : "Смотреть всех друзей"}
      </NavLink>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Имя</th>
            <th scope='col'>
              <label htmlFor='select-proffesion'>Профессия:</label>
              <select
                className='form-select'
                id='select-proffesion'
                defaultValue={""}
                onChange={handleChangeOptionProfession}
                required
              >
                <option value={""} disabled>
                  -- Выберите профессию --
                </option>
                {getOptions(professions).map((p) => (
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
                onChange={handleChangeOptionQuality}
                required
              >
                <option value={""} disabled>
                  -- Выберите качество --
                </option>
                {getOptions(qualities).map((q) => (
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

        <tbody>
          {isMainPage && filtredFriends.length !== 0 ? (
            filtredFriends.map((friend, index) => {
              return (
                <tr key={friend._id}>
                  <th scope='row'>{index + 1}</th>
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
                    <button
                      className='btn btn-success me-3'
                      onClick={() => {
                        setBestFriends([...bestFriends, friend]);
                        setFiltredFriends(
                          filtredFriends.filter((f) => f._id !== friend._id)
                        );
                        setFriends(friends.filter((f) => f._id !== friend._id));
                      }}
                    >
                      Добавить в лучшие друзья
                    </button>

                    <button
                      className='btn btn-danger'
                      onClick={() => {
                        setFiltredFriends(
                          filtredFriends.filter((f) => f._id !== friend._id)
                        );
                        setFriends(friends.filter((f) => f._id !== friend._id));
                      }}
                    >
                      Удалить друга
                    </button>
                  </td>
                </tr>
              );
            })
          ) : filtredBestFriends.length !== 0 ? (
            filtredBestFriends.map((friend, index) => {
              return (
                <tr key={friend._id}>
                  <th scope='row'>{index + 1}</th>
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
                    <button
                      className='btn btn-danger'
                      onClick={() => {
                        setFiltredBestFriends(
                          filtredBestFriends.filter((f) => f._id !== friend._id)
                        );
                        setFriends([...friends, friend]);
                      }}
                    >
                      Убрать из лучших друзей
                    </button>
                  </td>
                </tr>
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
      </table>
    </>
  );
};

export default FriendsList;
