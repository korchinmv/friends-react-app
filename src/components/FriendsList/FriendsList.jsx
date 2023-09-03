import { useState, useEffect } from "react";
import FriendsCount from "../FriendsCount/FriendsCount";
import { professions } from "../../api/user.api.js";
import { qualities } from "../../api/user.api";
import { NavLink } from "react-router-dom";
import Friend from "../Friend/Friend";
import Pagination from "../Pagination/Pagination";

const FriendsList = ({ friends, setFriends, bestFriends, setBestFriends }) => {
  const [filtredFriends, setFiltredFriends] = useState(friends);
  const [filtredBestFriends, setFiltredBestFriends] = useState(bestFriends);
  const [currentPage, setCurrentPage] = useState(1);
  const [friendsPerPage] = useState(5);
  const isMainPage = window.location.pathname === "/";

  useEffect(() => {
    setCurrentPage(1);
  }, [filtredFriends, filtredBestFriends]);

  const currentList = (array) => {
    const lastIndexInList = currentPage * friendsPerPage;
    const firstIndexInList = lastIndexInList - friendsPerPage;
    const result = array.slice(firstIndexInList, lastIndexInList);
    return result;
  };

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
        setFiltredBestFriends(bestFriends);
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
      if (isMainPage) {
        setFiltredFriends(friends);
      } else {
        setFiltredBestFriends(bestFriends);
      }
    } else {
      if (isMainPage) {
        const newArray = friends.filter((f) => {
          return f.qualities.some((item) => item.name === e.target.value);
        });
        setFiltredFriends(newArray);
      } else {
        const newArray = bestFriends.filter((f) => {
          return f.qualities.some((item) => item.name === e.target.value);
        });
        setFiltredBestFriends(newArray);
      }
    }
  };

  const handleAddBestFriend = (friend) => {
    setBestFriends([...bestFriends, friend]);
    setFiltredFriends(filtredFriends.filter((f) => f._id !== friend._id));
    setFriends(friends.filter((f) => f._id !== friend._id));
  };

  const handleDeleteFriend = (friend) => {
    setFiltredFriends(filtredFriends.filter((f) => f._id !== friend._id));
    setFriends(friends.filter((f) => f._id !== friend._id));
  };

  const handleDeleteBestFriend = (friend) => {
    const newArr = filtredBestFriends.filter((f) => f._id !== friend._id);
    setFiltredBestFriends(newArr);
    setBestFriends(newArr);
    setFriends([...friends, friend]);
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
      <table className='table table-hover mb-5'>
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
            currentList(filtredFriends).map((friend, index) => {
              return (
                <Friend
                  key={friend._id}
                  friend={friend}
                  index={index}
                  onAddBestFriend={handleAddBestFriend}
                  onDeleteFriend={handleDeleteFriend}
                  isMainPage={isMainPage}
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
                  onDeleteBestFriend={handleDeleteBestFriend}
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
      </table>

      <Pagination
        friendsPerPage={friendsPerPage}
        totalFriends={filtredFriends}
        totalBestFriends={filtredBestFriends}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        isMainPage={isMainPage}
      />
    </>
  );
};

export default FriendsList;
