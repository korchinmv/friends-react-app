import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import FriendsCount from "../FriendsCount/FriendsCount";
import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";

const FriendsList = ({
  friends,
  setFriends,
  bestFriends,
  setBestFriends,
  professions,
  qualities,
  searchFriendById,
  friendId,
}) => {
  console.log(friendId);
  const [filtredFriends, setFiltredFriends] = useState(friends);
  const [filtredBestFriends, setFiltredBestFriends] = useState(bestFriends);
  const [sorted, setSorted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [friendsPerPage] = useState(7);
  const isMainPage = window.location.pathname === "/friends";
  useEffect(() => {
    setCurrentPage(1);
  }, [filtredFriends, filtredBestFriends]);

  const currentList = (array) => {
    const lastIndexInList = currentPage * friendsPerPage;
    const firstIndexInList = lastIndexInList - friendsPerPage;
    const result = array.slice(firstIndexInList, lastIndexInList);
    return result;
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

  const sortBy = (list, condition, page) => {
    if (condition) {
      const arr = list.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      page
        ? setFiltredFriends(arr.reverse())
        : setFiltredBestFriends(arr.reverse());
      setSorted(false);
    } else {
      const arr = list.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      page ? setFiltredFriends(arr) : setFiltredBestFriends(arr);
      setSorted(true);
    }
  };

  return (
    <>
      {friends ? (
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
            to={isMainPage ? "/best-friends" : "/friends"}
          >
            {isMainPage
              ? "Посмотреть список лучших друзей"
              : "Смотреть всех друзей"}
          </NavLink>
          <Table
            filtredFriends={filtredFriends}
            filtredBestFriends={filtredBestFriends}
            professions={professions}
            qualities={qualities}
            onChangeOptionProfession={handleChangeOptionProfession}
            onChangeOptionQuality={handleChangeOptionQuality}
            onAddBestFriend={handleAddBestFriend}
            onDeleteFriend={handleDeleteFriend}
            onDeleteBestFriend={handleDeleteBestFriend}
            isMainPage={isMainPage}
            currentList={currentList}
            sortBy={sortBy}
            sorted={sorted}
            searchFriendById={searchFriendById}
          />
          <Pagination
            friendsPerPage={friendsPerPage}
            totalFriends={filtredFriends}
            totalBestFriends={filtredBestFriends}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            isMainPage={isMainPage}
          />
        </>
      ) : (
        <h1>Ошибка</h1>
      )}
    </>
  );
};

export default FriendsList;
